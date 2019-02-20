//
//  NetWebViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/5.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "NetWebViewController.h"
#import <WebKit/WebKit.h>

@interface NetWebViewController ()<WKUIDelegate,WKNavigationDelegate>
@property(nonatomic,strong) WKWebView * webView;


@end

@implementation NetWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor  = [UIColor whiteColor];
    [self initWebView];
}
-(void)initWebView{
    self.webView = [[WKWebView alloc] initWithFrame:self.view.bounds];
    
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://cai33356.com/#/index"] cachePolicy:NSURLRequestReloadIgnoringLocalCacheData  timeoutInterval:10]];
    self.webView.UIDelegate = self;
    self.webView.navigationDelegate = self;
    //支持滑动返回
    self.webView.allowsBackForwardNavigationGestures = NO;
}
#pragma mark--
#pragma mark--WKUIDelegate代理事件
//页面开始加载的时候使用
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation{
    
}
//当内容开始返回时调用
- (void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation{
    
}
//当页面加载完成之后调用
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation{
    
}
//Called when an error occurs while the web view is loading content.
//页面加载失败时调用
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation withError:(NSError *)error{
    
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
#pragma mark--WKNavigationDelegate代理事件,主要实现与js的交互
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
    UIAlertController *alertController = [UIAlertController alertControllerWithTitle:message message:nil preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
        completionHandler(NO);
    }];
    UIAlertAction *okAction = [UIAlertAction actionWithTitle:@"确认" style:UIAlertActionStyleDestructive handler:^(UIAlertAction * _Nonnull action) {
        completionHandler(YES);
    }];
    [alertController addAction:cancelAction];
    [alertController addAction:okAction];
    [self presentViewController:alertController animated:YES completion:nil];
    
}
//Displays a JavaScript text input panel.
////弹出一个输入框（与JS交互的）
- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * _Nullable))completionHandler{
    
    UIAlertController * alert = [UIAlertController alertControllerWithTitle:prompt message:defaultText preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction * cancel = [UIAlertAction actionWithTitle:@"sure" style:UIAlertActionStyleCancel handler:^(UIAlertAction * action){
        //这里必须执行不然页面会加载不出来
        completionHandler(@"");
    }];
    UIAlertAction * sure = [UIAlertAction actionWithTitle:@"ok" style:UIAlertActionStyleDefault handler:^(UIAlertAction*action){
        completionHandler(@"=====");
    }];
    [alert addAction:cancel];
    [alert addAction:sure];
    [self presentViewController:alert animated:YES completion:nil];
    
}

@end
