//
//  WXActivityDetailsViewController.h
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/25.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK.h>

NS_ASSUME_NONNULL_BEGIN

@interface WXActivityDetailsViewController : WXBaseViewController
@property(nonatomic,strong) NSString * urlStr;

@property(nonatomic,strong) NSDictionary * navBarStyle;


@end

NS_ASSUME_NONNULL_END
