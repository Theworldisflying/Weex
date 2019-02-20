//
//  Navigator.h
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/26.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^LeftItem)(void);
typedef void (^RightItem)(void);
typedef void (^TitleViewBlock)(void);

@interface Navigator : NSObject
+(Navigator *)sharedInstance;

@property(nonatomic,copy) LeftItem leftItem;
@property(nonatomic,copy) RightItem rightItem;
@property(nonatomic,copy) TitleViewBlock titleViewBlock;

//导航栏左侧按钮
-(UIView*)setLeftBarButtonItem:(NSDictionary*)styles;
//导航栏右侧按钮
-(UIView*)setRightBarButtonItem:(NSDictionary*)styles;
/*titleView
 */
-(UIView*)setTitleView:(NSDictionary*)styles;
@end

NS_ASSUME_NONNULL_END
