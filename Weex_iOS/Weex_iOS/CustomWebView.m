//
//  CustomWebView.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2019/1/11.
//  Copyright © 2019 miu_wen. All rights reserved.
//

#import "CustomWebView.h"
#import <WebKit/WebKit.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import <WeexSDK/WeexSDK.h>
#import "WXOthersViewController.h"
@interface CustomWebView()<WKUIDelegate,WKNavigationDelegate,WKScriptMessageHandler>
@property(nonatomic,strong) UILabel * label;
@property(nonatomic,strong) WKWebView * webView;
@property(nonatomic,strong) NSDictionary * dic;
@property(nonatomic,strong) WXSDKInstance * weexInstance;
//@property(nonatomic,strong) NSDictionary * barStyle;
@end

@implementation CustomWebView


- (instancetype)initWithFrame:(CGRect)frame data:(nonnull NSDictionary *)data weexInstance:(WXSDKInstance*)weexInstance
{
    self = [super initWithFrame:frame];
    if (self) {
        self.weexInstance = weexInstance;
        NSString *  html = [self htmlEntityDecode:data[@"content"]];
        //        self.barStyle = barStyle;
        
        //自适应屏幕宽度
        WKWebViewConfiguration * webConfiguration = [[WKWebViewConfiguration alloc] init];
        //// JS调用OC 添加处理脚本
        WKUserContentController *wkUController = [[WKUserContentController alloc] init];
        
        webConfiguration.userContentController = wkUController;
        
        //自适应屏幕宽度js
        NSString *jSString = @"var meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width'); document.getElementsByTagName('head')[0].appendChild(meta);";
        
        WKUserScript *wkUserScript = [[WKUserScript alloc] initWithSource:jSString injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
        
        // 添加自适应屏幕宽度js调用的方法
        [wkUController addUserScript:wkUserScript];
#pragma mark--      更改样式
        if (data[@"customCss"]) {
            NSDictionary * cssDic = data[@"customCss"];
            if (cssDic[@"cssStr"]) {
                //自适应屏幕宽度js
                NSString *cssJSString = cssDic[@"cssStr"];
                
                WKUserScript *wkUserScriptCss = [[WKUserScript alloc] initWithSource:cssJSString injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
                
                // 添加自适应屏幕宽度js调用的方法
                [wkUController addUserScript:wkUserScriptCss];
            }
        }
        
#pragma mark--监听按钮点击事件
        if (data[@"pushData"]) {
            self.dic = data[@"pushData"];
            //监听按钮点击事件
            //
            NSString *buttonId = @"";
            //        根据message的值判断响应哪个事件
            NSString *message = @"";
            
            if (self.dic[@"className"]) {
                buttonId = self.dic[@"className"];
            }
            if (self.dic[@"messageName"]) {
                message = self.dic[@"messageName"];
            }
            
            if (self.dic[@"id"]) {
                NSString *scriptStr = [NSString stringWithFormat:@"function fun(){window.webkit.messageHandlers.%@.postMessage(null);}(function(){var btn=document.getElementsById(\"%@\");btn.addEventListener('click',fun,false);}());", message,buttonId];        WKUserScript *userScript = [[WKUserScript alloc] initWithSource:scriptStr injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
                [wkUController addUserScript:userScript];
            }else{
                NSString *scriptStr = [NSString stringWithFormat:@"function fun(){window.webkit.messageHandlers.%@.postMessage(null);}(function(){var btn=document.getElementsByClassName(\"%@\");btn[0].addEventListener('click',fun,false);}());", message,buttonId];        WKUserScript *userScript = [[WKUserScript alloc] initWithSource:scriptStr injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
                [wkUController addUserScript:userScript];
            }
            
            [wkUController addScriptMessageHandler:self name:message];
        }
        
        //UIWebView 加载HTML字符串
        self.webView = [[WKWebView alloc] initWithFrame:self.bounds configuration:webConfiguration];
        if (html&&html.length>0) {
          [self.webView loadHTMLString:html baseURL:nil];
        }
        if (data[@"scroll"]) {
            self.webView.scrollView.scrollEnabled = YES;
        }else{
            self.webView.scrollView.scrollEnabled = NO;
        }
        
        //    [self.webView loadRequest:[NSURLRequest requestWithURL:url cachePolicy:NSURLRequestReloadIgnoringLocalCacheData  timeoutInterval:10]];
        self.webView.UIDelegate = self;
        self.webView.navigationDelegate = self;
        
        //支持滑动返回
        self.webView.allowsBackForwardNavigationGestures = NO;
        [self addSubview:self.webView];
        
        
    }
    return self;
}
#pragma mark--
#pragma mark --- WKScriptMessageHandler ---
// WKWebView收到ScriptMessage时回调此方法
//实现协议方法。在这个方法里message参数有一个属性body。message.body就是JS传过来的参数，可以是字符串，可以是数组，也可以是字典。通过message.name判断可以知道监听的是JS的哪个方法。
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"message.name======%@", message.name);
    NSLog(@"message.body======%@", message.body);
    NSString * name = @"";
    if (self.dic[@"messageName"]) {
        name = self.dic[@"messageName"];
    }
    if ([message.name isEqualToString:name]) {
        [self.weexInstance fireGlobalEvent:@"geolocation" params:self.dic];
        if (self.dic[@"url"]) {
            //            主动调用weex端
            
            
            //            if (self.dic[@"vcName"]) {
            //                Class vc = NSClassFromString(self.dic[@"vcName"]);
            //                UIViewController * controller = [[vc alloc] init];
            //                if ([controller respondsToSelector:@selector(setUrlStr:)]) {
            //                    [controller performSelector:@selector(setUrlStr:) withObject:self.dic[@"url"]];
            //                }
            //                if ([controller respondsToSelector:@selector(setNavStyles:)]) {
            //                    [controller performSelector:@selector(setNavStyles:) withObject:self.barStyle];
            //                }
            //                [[self.weexInstance.viewController navigationController] pushViewController:controller animated:YES];
            //            }else{
            //                WXOthersViewController * vc = [[WXOthersViewController alloc] init];
            //                vc.urlStr = self.dic[@"url"];
            //                vc.navBarStyle = self.barStyle;
            ////                [self.weexInstance.viewController presentViewController:vc animated:YES completion:nil];
            //                [[self.weexInstance.viewController navigationController] pushViewController:vc animated:YES];
            //
            //            }
            
        }
    }
    // 根据name做想做的操作
}
//将 &lt 等类似的字符转化为HTML中的“<”等
-(NSString *)htmlEntityDecode:(NSString *)string
{
    string = [string stringByReplacingOccurrencesOfString:@"&quot;" withString:@"\""];
    string = [string stringByReplacingOccurrencesOfString:@"&apos;" withString:@"'"];
    string = [string stringByReplacingOccurrencesOfString:@"&lt;" withString:@"<"];
    string = [string stringByReplacingOccurrencesOfString:@"&gt;" withString:@">"];
    string = [string stringByReplacingOccurrencesOfString:@"&amp;" withString:@"&"]; // Do this last so that, e.g. @"&amp;lt;" goes to @"&lt;" not @"<"
    
    return string;
}
//将HTML字符串转化为NSAttributedString富文本字符串
- (NSAttributedString *)attributedStringWithHTMLString:(NSString *)htmlString
{
    NSDictionary *options = @{ NSDocumentTypeDocumentAttribute : NSHTMLTextDocumentType,
                               NSCharacterEncodingDocumentAttribute :@(NSUTF8StringEncoding) };
    
    NSData *data = [htmlString dataUsingEncoding:NSUTF8StringEncoding];
    
    return [[NSAttributedString alloc] initWithData:data options:options documentAttributes:nil error:nil];
}
- (void)setContent:(NSString *)content{
    self.label.text = content;
}
@end
