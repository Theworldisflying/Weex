//
//  WXCustomComponent.h
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/20.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WXComponent.h"

NS_ASSUME_NONNULL_BEGIN

@interface WXCustomComponent : WXComponent

@property(nonatomic,strong) NSString * content;
-(void)show:(NSString*)content;
@end

NS_ASSUME_NONNULL_END
