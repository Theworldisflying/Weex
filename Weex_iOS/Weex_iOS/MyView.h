//
//  MyView.h
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/28.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WeexSDK.h>

NS_ASSUME_NONNULL_BEGIN

@interface MyView : UIView
@property(nonatomic,strong) NSString * scontent;
/*frame:cgrect
 data: webView 内容设置
    参数：content：htmldata：网页html
 weexInstance：实例
 pushData：给标签添加事件 ，通过className 或id 参数 :className :id messageName
barStyle： 导航栏样式
 */
//- (instancetype)initWithFrame:(CGRect)frame data:(NSDictionary*)data weexInstance:(WXSDKInstance*)weexInstance barStyle:(NSDictionary*)barStyle;
- (instancetype)initWithFrame:(CGRect)frame data:(NSDictionary*)data weexInstance:(WXSDKInstance*)weexInstance;
@end

NS_ASSUME_NONNULL_END
