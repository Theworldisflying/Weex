//
//  PhoneModel.h
//  KaiXinCai
//
//  Created by miu_wen on 2018/9/21.
//  Copyright © 2018年 Mac_mini. All rights reserved.
//

#ifndef PhoneModel_h
#define PhoneModel_h
#define URLData @"https://c33372.com/#/index"
//获得屏幕的宽高
#define kScreenWidth ([UIScreen mainScreen].bounds.size.width)
#define kScreenHeight ([UIScreen mainScreen].bounds.size.height)
//iPhoneX / iPhoneXS
#define  isIphoneX_XS     (kScreenWidth == 375.f && kScreenHeight == 812.f ? YES : NO)
//iPhoneXR / iPhoneXSMax
#define  isIphoneXR_XSMax    (kScreenWidth == 414.f && kScreenHeight == 896.f ? YES : NO)
//异性全面屏
#define   isFullScreen    (isIphoneX_XS || isIphoneXR_XSMax)

/**
 *导航栏高度
 */
#define SafeAreaTopHeight (IPHONE_X ? 88 : 64)

/**
 *tabbar高度
 */
#define SafeAreaBottomHeight (IPHONE_X ? (49 + 34) : 49)

// Status bar height.
#define  StatusBarHeight     (isFullScreen ? 44.f : 20.f)

// Navigation bar height.
#define  NavigationBarHeight  44.f

// Tabbar height.
#define  TabbarHeight         (isFullScreen ? (49.f+34.f) : 49.f)

// Tabbar safe bottom margin.
#define  TabbarSafeBottomMargin         (isFullScreen ? 34.f : 0.f)

// Status bar & navigation bar height.
#define  StatusBarAndNavigationBarHeight  (isFullScreen ? 88.f : 64.f)


//判断是否是ipad
#define isPad ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad)
//判断iPhone4系列
#define kiPhone4 ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(640, 960), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhone5系列
#define kiPhone5 ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(640, 1136), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhone6 6s 7系列
#define kiPhone6 ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(750, 1334), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhone6p 6sp 7p系列
#define kiPhone6Plus ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1242, 2208), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhoneX，Xs（iPhoneX，iPhoneXs）
#define IS_IPHONE_X ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1125, 2436), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhoneXr
#define IS_IPHONE_Xr ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(828, 1792), [[UIScreen mainScreen] currentMode].size) && !isPad : NO)
//判断iPhoneXsMax
#define IS_IPHONE_Xs_Max ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1242, 2688), [[UIScreen mainScreen] currentMode].size)&& !isPad : NO)

//判断iPhoneX所有系列
#define IS_PhoneXAll (IS_IPHONE_X || IS_IPHONE_Xr || IS_IPHONE_Xs_Max)
#define k_Height_NavContentBar 44.0f
#define k_Height_StatusBar (IS_PhoneXAll? 44.0 : 20.0)
#define k_Height_NavBar (IS_PhoneXAll ? 88.0 : 64.0)
#define k_Height_TabBar (IS_PhoneXAll ? 83.0 : 49.0)



#endif /* PhoneModel_h */
