//
//  ViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/5.
//  Copyright © 2018 miu_wen. All rights reserved.
//https://www.jianshu.com/p/c2a09a057306

#import "ViewController.h"
#import "LocalWebViewController.h"
#import "NetWebViewController.h"
#import "PhoneModel.h"

#import <WebKit/WebKit.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "HexStringColor.h"
#import "RPQHUD.h"


#import <WeexSDK/WXSDKInstance.h>

#import "WXCustomVueViewController.h"
#import "WeexCustomViewController.h"

#define SCREEN_WIDTH      [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT     [UIScreen mainScreen].bounds.size.height
@interface ViewController ()<WKUIDelegate,WKNavigationDelegate,WKScriptMessageHandler,UIScrollViewDelegate>
@property(nonatomic,strong) WKWebView * webView;
@property(nonatomic,strong) RPQHUD *hud;
@property(nonatomic,assign) Boolean isAllowRoom;

@property (nonatomic, strong) WXSDKInstance *instance;
//URL属性(用于指定加载js的URL,一般声明在接口中,我们为了测试方法写在了类扩展中.)
@property (nonatomic, strong) NSURL *url;
//Weex视图
@property (weak, nonatomic) UIView *weexView;

@end
//jsPatch
//https://www.cnblogs.com/ios122/p/5025791.html

//weex
//https://www.cnblogs.com/LiLihongqiang/p/6704713.html
//https://www.jianshu.com/p/e1ba1ffb755a

//https://www.jianshu.com/p/5fe02ca05e86
@implementation ViewController
//https://blog.csdn.net/u013583789/article/details/51540273 清除缓存
//https://www.jianshu.com/p/0dbaea15778c 左右滑动
- (void)viewDidLoad {
    [super viewDidLoad];
    
    
    UIButton * jumpBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    jumpBtn.backgroundColor = [UIColor blueColor];
    jumpBtn.frame =CGRectMake(100, 100, 100, 50);
    [jumpBtn setTitle:@"MyVue" forState:UIControlStateNormal];
    jumpBtn.tag = 1;
    [jumpBtn addTarget:self action:@selector(myVuewBtn:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:jumpBtn];
    
    UIButton * customBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    customBtn.backgroundColor = [UIColor blueColor];
    customBtn.frame =CGRectMake(100, CGRectGetMaxY(jumpBtn.frame)+50, 100, 50);
    [customBtn setTitle:@"自定义组件" forState:UIControlStateNormal];
    customBtn.tag =2;
    [customBtn addTarget:self action:@selector(myVuewBtn:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:customBtn];
    
    
    
    
#pragma mark--
    
    //     self.view.backgroundColor  = [HexStringColor colorwithHexString:@"ec0022"];
    //    RPQHUD *hud = [[RPQHUD alloc]initWithFrame:CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)];
    //    self.hud = hud;
    //    UIApplication *ap = [UIApplication sharedApplication];
    //    [ap.keyWindow addSubview: hud];
    //
    //    self.isAllowRoom = YES;
    
    //    [self initWebView];
}
-(void)myVuewBtn:(UIButton*)btn{
    if (btn.tag==1) {
        WXCustomVueViewController* vue = [[WXCustomVueViewController alloc] init];
        UINavigationController * nav = [[UINavigationController alloc] initWithRootViewController:vue];
        [self presentViewController:nav animated:YES completion:nil];
    }else if (btn.tag==2){
        // 创建WXSDKInstance对象
        //        _instance = [[WXSDKInstance alloc] init];
        //        NSURL *URL = [NSURL URLWithString:@"http://192.168.1.19:8084/dist/components/Frame/MyCustomVue.js"];
        //        [_instance renderWithURL:URL options:@{@"bundleUrl":URL.absoluteString} data:nil];
        NetWebViewController* vue = [[NetWebViewController alloc] init];
        UINavigationController * nav = [[UINavigationController alloc] initWithRootViewController:vue];
        [self presentViewController:nav animated:YES completion:nil];
        
    }
}

- (void)dealloc {
    //  销毁WXSDKInstance实例
    [self.instance destroyInstance];
}

- (NSURL *)url {
    if (!_url) {
        _url =  [[NSBundle mainBundle] URLForResource:@"list"   withExtension:@"js"];
    }
    return _url;
}

- (NSURL*)testURL:(NSString*)url
{
    NSRange range = [url rangeOfString:@"_wx_tpl"];
    if (range.location != NSNotFound) {
        NSString *tmp = [url substringFromIndex:range.location];
        NSUInteger start = [tmp rangeOfString:@"="].location;
        NSUInteger end = [tmp rangeOfString:@"&"].location;
        ++start;
        if (end == NSNotFound) {
            end = [tmp length] - start;
        }
        else {
            end = end - start;
        }
        NSRange subRange;
        subRange.location = start;
        subRange.length = end;
        url = [tmp substringWithRange:subRange];
    }
    return [NSURL URLWithString:url];
}


-(void)initWebView{
    CGSize size = [UIScreen mainScreen].bounds.size;
    
    //自适应屏幕宽度
    WKWebViewConfiguration * webConfiguration = [[WKWebViewConfiguration alloc] init];
    //// JS调用OC 添加处理脚本
    WKUserContentController *wkUController = [[WKUserContentController alloc] init];
    
    webConfiguration.userContentController = wkUController;
    
    /*
     window.webkit.messageHandlers.<name>.postMessage(<messageBody>)
     //其中<name>，就是上面方法里的第二个参数`name`。
     //例如我们调用API的时候第二个参数填@"Share"，那么在JS里就是:
     //window.webkit.messageHandlers.Share.postMessage(<messageBody>)
     //<messageBody>是一个键值对，键是body，值可以有多种类型的参数。可以是HTML DOM标签
     // 在`WKScriptMessageHandler`协议中，我们可以看到mssage是`WKScriptMessage`类型，有一个属性叫body。
     // 而注释里写明了body 的类型：
     Allowed types are NSNumber, NSString, NSDate, NSArray, NSDictionary, and NSNull.
     */
    
    
    
    //    //自适应屏幕宽度js
    //    NSString *jSString = @"var meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width'); document.getElementsByTagName('head')[0].appendChild(meta);";
    //
    //    WKUserScript *wkUserScript = [[WKUserScript alloc] initWithSource:jSString injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
    //
    //    // 添加自适应屏幕宽度js调用的方法
    //    [wkUController addUserScript:wkUserScript];
    
    
    CGFloat H = IS_PhoneXAll?SCREEN_HEIGHT-TabbarSafeBottomMargin:SCREEN_HEIGHT-TabbarSafeBottomMargin-20;
    
    
    self.webView = [[WKWebView alloc] initWithFrame:CGRectMake(0, StatusBarHeight, size.width, H) configuration:webConfiguration];
    //加载本地html 如果html要加载本地js css img 需存放在统一目录下或放置在实体文件中。 路径如: ./js/js.js
    //    self.webView.backgroundColor = [HexStringColor colorwithHexString:@"ec0022"];
    NSURL * url = [NSURL URLWithString:URLData];
    //    [self.webView loadFileURL:url allowingReadAccessToURL:url];
    [self.webView loadRequest:[NSURLRequest requestWithURL:url cachePolicy:NSURLRequestReloadIgnoringCacheData timeoutInterval:10]];
    self.webView.UIDelegate = self;
    self.webView.navigationDelegate = self;
    self.webView.scrollView.delegate = self;
    
    
    //支持滑动返回
    self.webView.allowsBackForwardNavigationGestures = YES;
    [self.view addSubview:self.webView];
}

//- (UIView *)viewForZoomingInScrollView:(UIScrollView *)scrollView{
////    return nil;
//    if (self.isAllowRoom) {
//        return nil;
//    }else{
//        return self.webView.scrollView.subviews.firstObject;
//    }
//}
#pragma mark--
#pragma mark --- WKScriptMessageHandler ---
// WKWebView收到ScriptMessage时回调此方法
//实现协议方法。在这个方法里message参数有一个属性body。message.body就是JS传过来的参数，可以是字符串，可以是数组，也可以是字典。通过message.name判断可以知道监听的是JS的哪个方法。
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"message.name======%@", message.name);
    NSLog(@"message.body======%@", message.body);
    if ([message.name isEqualToString:@"btn2Click"]) {
        
        //TODO
#pragma mark--调用js 代码(可以获取或更改html标签属性)
        [_webView evaluateJavaScript:@"document.getElementById('getinputhtml').value" completionHandler:^(id res,NSError*err){
            NSLog(@"res====%@",res);
#pragma mark--在指定控件后添加div
            NSString * divStr = [NSString stringWithFormat:@"var container = document.getElementById('myImg');var newDiv = document.getElementById('newDiv');if (newDiv){newDiv.parentNode.removeChild(newDiv);}var div = document.createElement('div');div.setAttribute('id', 'newDiv');div.innerHTML = '=====div===';div.style.paddingTop = '10px';div.style.marginLeft = '10px';container.parentNode.insertBefore(div,container.nextSibling);"];
            WKUserScript * divScript = [[WKUserScript alloc] initWithSource:divStr injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
            [self.webView.configuration.userContentController addUserScript:divScript];
#pragma mark--在指定控件后添加img
            //图片路径
            //图片在实体文件下，需在图片名称前加上实体文件名称，否则获取不到图片路径
            NSString * src = [[NSBundle mainBundle] pathForResource:@"img/laba@3x" ofType:@"png"];
            NSString * divImg = [NSString stringWithFormat:@"var container = document.getElementById('newDiv');var newImg = document.getElementById('newImg');if (newImg){newImg.parentNode.removeChild(newImg);}var div = document.createElement('img');div.setAttribute('id', 'newImg');div.src = \"%@\";div.style.paddingTop = '10px';div.style.marginLeft = '10px';container.parentNode.insertBefore(div,container.nextSibling);",src];
            WKUserScript * imgScript = [[WKUserScript alloc] initWithSource:divImg injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
            [self.webView.configuration.userContentController addUserScript:imgScript];
            //重新加载webView 否则添加的标签不显示
            [self.webView reloadInputViews];
        }];
        
    }
    // 根据name做想做的操作
}
#pragma mark--
#pragma mark--WKNavigationDelegate代理事件,主要实现与js的交互
//页面开始加载的时候使用
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation{
    
}
//当内容开始返回时调用
- (void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation{
    
}
//当页面加载完成之后调用
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation{
    //
    [self.hud setHide];
    self.isAllowRoom = NO;
    //调用js方法
    [self.webView evaluateJavaScript:@"btnlis()" completionHandler:^(id _Nullable res,NSError* error){
        NSLog(@"===========调用了js的方法=%@===",res);
        
    }];
    
    //    JSContext *context = [self.webView valueForKeyPath:@"document.webView.mainFrame.javaScriptContext"];
    //    context[@"Share"] = ^() {
    //
    //        NSArray *args = [JSContext currentArguments];
    //
    //        dispatch_async(dispatch_get_main_queue(), ^{
    //
    //            //TODO
    //            NSLog(@"===========");
    //        });
    //
    //    };
    
    
}
//Called when an error occurs while the web view is loading content.
//页面加载失败时调用
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation withError:(NSError *)error{
    //    UIAlertController * alert = [UIAlertController alertControllerWithTitle:@"温馨提示" message:@"加载失败,请重新加载" preferredStyle:UIAlertControllerStyleAlert];
    //    UIAlertAction * action = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * action){
    //        NSURL * url = [NSURL URLWithString:URLData];
    //        //    [self.webView loadFileURL:url allowingReadAccessToURL:url];
    //        [self.webView loadRequest:[NSURLRequest requestWithURL:url cachePolicy:NSURLRequestReloadIgnoringCacheData timeoutInterval:10]];
    //    }];
    //    [alert addAction:action];
    //    [self presentViewController:alert animated:YES completion:nil];
    
}

//Called when a web view receives a server redirect.
//接收到服务器跳转请求之后再执行
- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation{
    
}
//Decides whether to allow or cancel a navigation after its response is known.
//收到响应后决定是否跳转
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler{
    
    WKNavigationResponsePolicy actionPolicy = WKNavigationResponsePolicyAllow;
    //这句是必须加的，不然会异常
    decisionHandler(actionPolicy);
}
//Decides whether to allow or cancel a navigation.
//在发送请求之前，决定是否跳转
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler{
    //    NSString * title = webView.title;
    
    WKNavigationActionPolicy actionPolicy = WKNavigationActionPolicyAllow;
    if(navigationAction.navigationType==WKNavigationTypeBackForward) {//判断是返回类型
        
        //        //同时设置返回按钮和关闭按钮为导航栏左边的按钮 这里可以监听左滑返回事件，仿微信添加关闭按钮。
        //        self.navigationItem.leftBarButtonItems = @[self.backBtn, self.closeBtn];
        //可以在这里找到指定的历史页面做跳转
        //        if (webView.backForwardList.backList.count>0) {                                  //得到栈里面的list
        //            DLog(@"%@",webView.backForwardList.backList);
        //            DLog(@"%@",webView.backForwardList.currentItem);
        //            WKBackForwardListItem * item = webView.backForwardList.currentItem;          //得到现在加载的list
        //            for (WKBackForwardListItem * backItem in webView.backForwardList.backList) { //循环遍历，得到你想退出到
        //                //添加判断条件
        //                [webView goToBackForwardListItem:[webView.backForwardList.backList firstObject]];
        //            }
        //        }
        
    }
    //这句是必须加的，不然会异常
    decisionHandler(actionPolicy);
    
}
#pragma mark--
#pragma mark--WKUIDelegate代理事件
//Displays a JavaScript alert panel.
////显示一个JS的Alert（与JS交互）
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler{
    NSLog(@"frame==%@",frame);
    NSLog(@"message==%@",message);
    completionHandler();
    
}
//Displays a JavaScript confirm panel.
////显示一个确认框（JS的）
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL))completionHandler{
    //    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:message message:nil preferredStyle:UIAlertControllerStyleAlert];
    //    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
    //        completionHandler(NO);
    //    }];
    //    UIAlertAction *okAction = [UIAlertAction actionWithTitle:@"确认" style:UIAlertActionStyleDestructive handler:^(UIAlertAction * _Nonnull action) {
    //        completionHandler(YES);
    //    }];
    //    [alertController addAction:cancelAction];
    //    [alertController addAction:okAction];
    //    [self presentViewController:alertController animated:YES completion:nil];
    
}
//Displays a JavaScript text input panel.
////弹出一个输入框（与JS交互的）
- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * _Nullable))completionHandler{
    //
    //    UIAlertController * alert = [UIAlertController alertControllerWithTitle:prompt message:defaultText preferredStyle:UIAlertControllerStyleAlert];
    //    UIAlertAction * cancel = [UIAlertAction actionWithTitle:@"sure" style:UIAlertActionStyleCancel handler:^(UIAlertAction * action){
    //        //这里必须执行不然页面会加载不出来
    //        completionHandler(@"");
    //    }];
    //    UIAlertAction * sure = [UIAlertAction actionWithTitle:@"ok" style:UIAlertActionStyleDefault handler:^(UIAlertAction*action){
    //        completionHandler(@"=====");
    //    }];
    //    [alert addAction:cancel];
    //    [alert addAction:sure];
    //    [self presentViewController:alert animated:YES completion:nil];
    
}

////为避免内存泄漏前面添加的方法去掉
//- (void)dealloc
//{
//    [self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"btn2Click"];
//    [self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"imgClick"];
//}
@end
