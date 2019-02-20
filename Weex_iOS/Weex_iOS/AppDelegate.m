//
//  AppDelegate.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/5.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "AppDelegate.h"
#import <WeexSDK/WeexSDK.h>
#import <WeexSDK/WXSDKInstance.h>
#import <WeexSDK/WXSDKEngine.h>
#import <WeexSDK/WXUtility.h>
#import <WeexSDK/WXDebugTool.h>
#import <WeexSDK/WXSDKManager.h>
#import <WeexSDK/WXEventModuleProtocol.h>
#import <WeexSDK/WXModuleProtocol.h>
#import <WXDevTool/WXDevTool.h>

#import "LImageLoader.h"
#import "NetWork.h"
#import "ViewController.h"

#import "WXCustomEventModule.h"
#import "WXCustomComponent.h"
#import "WXCustomNavgationModule.h"

//#import <WXNavigationDefaultImpl.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    
    //business configuration
    //1.1 设置组织
    [WXAppConfiguration setAppGroup:@"com.xianyu.cai33"];
    ////1.2 设置App的名称
    [WXAppConfiguration setAppName:@"Cai33"];
    ////1.3 设置App的版本号
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    
    //init sdk environment
    ///2. 初始化`WeexSDK`环境
    [WXSDKEngine initSDKEnvironment];
    //   注册图片加载器
    [WXSDKEngine registerHandler:[LImageLoader new] withProtocol:@protocol(WXImgLoaderProtocol)];
    //自定义NetworkProtocol,可以针对网络请求进行拦截修改
    //    [WXSDKEngine registerHandler:[NetWork new] withProtocol:@protocol(WXNetworkProtocol)];
    //    [WXSDKEngine registerHandler:[WXCustomNavgationModule class] withProtocol:@protocol(WXNavigationProtocol)];
    //register custom module and component，optional
    ////3. 注册自定义的组件和模型(可选)  [如果有就注册如果没有就不注册]
    [WXSDKEngine registerComponent:@"customwebview" withClass:[WXCustomComponent class]];
    [WXSDKEngine registerModule:@"WXEventModule" withClass:[WXCustomEventModule class]];
    
    
    //register the implementation of protocol, optional
    ////4. 注册协议的实现,可选
    //    [WXSDKEngine registerHandler:[WXNavigationDefaultImpl new] withProtocol:@protocol(WXNavigationProtocol)];
    
    //set the log level
    // //5. 设置日志的级别(默认的日志级别是Info)
    [WXLog setLogLevel: WXLogLevelAll];
    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
