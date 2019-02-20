//
//  WXCustomEventModule.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/20.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WXCustomEventModule.h"
#import "WXCustomVueViewController.h"
#import "WXActivityDetailsViewController.h"

#import <WeexSDK/WXBaseViewController.h>
#import "WXCustomComponent.h"

@interface WXCustomEventModule()
@property (nonatomic, strong) WXSDKInstance *instance;


@end

@implementation WXCustomEventModule
@synthesize weexInstance;// 让该module 获得当前instance
WX_EXPORT_METHOD(@selector(pushVC:))
//WX_EXPORT_METHOD(@selector(pushVC:params:))
WX_EXPORT_METHOD(@selector(push:))
WX_EXPORT_METHOD(@selector(showParams:))//
WX_EXPORT_METHOD(@selector(loadCellDic:))//
WX_EXPORT_METHOD(@selector(getToken:callback:))
//根据控制器名称跳转
WX_EXPORT_METHOD(@selector(pushController:))
WX_EXPORT_METHOD(@selector(presentController:))
-(void)showParams:(NSString*)param{
    if (!param) {
        return;
    }
//    WXCustomComponent  *c = [[WXCustomComponent alloc] init];
//    c.content = param;
//    [c show:param];
    NSLog(@"调用====params===%@",param);
}
//这里使用callback回调传值给weex
-(void)getToken:(NSString*)params callback:(WXModuleKeepAliveCallback)callback{
    callback(@{@"token":@"$2y$10$4fFIY5gBj5Z/HjwupajPze40feUl9LBpOSjenDyWHCHL7I7lWrpBu",@"SITEID":@"1"},YES);
}


-(void)loadCellDic:(NSDictionary*)param{
    if (!param) {
        return;
    }
    NSLog(@"调用=dic===params===%@",param[@"id"]);
//    WXCustomVueViewController * vc = [[WXCustomVueViewController alloc] init];
//    [vc performSelector:@selector(cellClick:) withObject:param];
//    WXActivityDetailsViewController * dvc = [[WXActivityDetailsViewController alloc] init];
//  
//    [[_instance.viewController navigationController]  pushViewController:dvc animated:YES];
}
- (void)setNavigationBackgroundColor:(UIColor *)backgroundColor withContainer:(UIViewController *)container{
    
}
- (void)anotherOpenURL:(NSString *)url callback:(WXKeepAliveCallback)callback {
    callback(url,false);
    NSLog(@"call me");
}
- (void)openURL:(NSDictionary*)params
{
    NSString *newURL = @"";
    NSString * url = @"";
    if (params!=nil) {
        url = params[@"url"];
        newURL = url;
    }
    
    if ([url hasPrefix:@"//"]) {
        newURL = [NSString stringWithFormat:@"http:%@", url];
    } else if (![url hasPrefix:@"http"]) {
        // relative path
        newURL = [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL].absoluteString;
    }
    
    UIViewController *controller = [[WXActivityDetailsViewController alloc] init];
    ((WXActivityDetailsViewController *)controller).urlStr = newURL;
    ((WXActivityDetailsViewController *)controller).navBarStyle = params[@"style"];
    
    [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
}
- (void)openWithURL:(NSString *)url
{
    NSString *newURL = url;
    if ([url hasPrefix:@"//"]) {
        newURL = [NSString stringWithFormat:@"http:%@", url];
    } else if (![url hasPrefix:@"http"]) {
        // relative path
        newURL = [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL].absoluteString;
    }
    
    UIViewController *controller = [[WXActivityDetailsViewController alloc] init];
    ((WXActivityDetailsViewController *)controller).urlStr = newURL;
    
    [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
}

- (void)push:(NSString *)url
{
    [self openWithURL:url];
}
-(void)pushVC:(NSDictionary*)params{
    [self openURL:params];
}
#pragma mark--
#pragma mark--根据类名跳转控制器
-(void)pushController:(NSDictionary*)param{
    if (param[@"vcName"]) {
        Class vc = NSClassFromString(param[@"vcName"]);
        UIViewController * controller = [[vc alloc] init];
        if (param[@"url"]) {
            //            判断当前调用方法是否存在
            if ([controller respondsToSelector:@selector(setUrlStr:)]) {
                [controller performSelector:@selector(setUrlStr:) withObject:param[@"url"]];
            }
            
        }
        if (param[@"barStyle"]) {
            NSDictionary * barStyle = param[@"barStyle"];
            if ([controller respondsToSelector:@selector(setNavBarStyle:)]) {
                [controller performSelector:@selector(setNavBarStyle:) withObject:barStyle];
            }
        }
        [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
    }
   
}
-(void)presentController:(NSDictionary*)param{
    if (param[@"vcName"]) {
        Class vc = NSClassFromString(param[@"vcName"]);
        UIViewController * controller = [[vc alloc] init];
        if (param[@"url"]) {
//            判断当前调用方法是否存在
            if ([controller respondsToSelector:@selector(setUrlStr:)]) {
                [controller performSelector:@selector(setUrlStr:) withObject:param[@"url"]];
            }
            
        }
       
        [weexInstance.viewController presentViewController:controller animated:YES completion:nil];
    }
}

@end
