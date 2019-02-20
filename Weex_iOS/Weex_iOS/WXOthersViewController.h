//
//  WXOthersViewController.h
//  WkWebViewAndH5
//
//  Created by miu_wen on 2019/1/8.
//  Copyright © 2019 miu_wen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK.h>

NS_ASSUME_NONNULL_BEGIN

@interface WXOthersViewController : WXBaseViewController
@property(nonatomic,strong) NSString * urlStr;
@property(nonatomic,strong) NSDictionary * navBarStyle;

//url
-(void)setUrlStr:(NSString*)urlStr;
//navstyles
-(void)setNavStyles:(NSDictionary*)navBarStyle;

@end

NS_ASSUME_NONNULL_END
