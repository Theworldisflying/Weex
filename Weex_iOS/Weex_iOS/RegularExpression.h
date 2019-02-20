//
//  RegularExpression.h
//  KaiXinCai
//
//  Created by wyl on 2018/7/5.
//  Copyright © 2018年 Mac_mini. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface RegularExpression : NSObject
/*
 *指定长度必须包含字母和数字
 */
+(BOOL)isLetterAndNum:(NSString*)test minimalLength:(NSInteger)min max:(NSInteger)max;
//是否只包含纯数字
+ (BOOL)isNumText:(NSString *)str;
////是否是url
+(BOOL)isUrl:(NSString*)url;
//检测数字是否时包含+-号小数点
+ (BOOL)isNumString:(NSString *)str;
//检测是否时以指定字符或这些字符中的一个字符开头
+(BOOL)isStartStr:(NSString*)str appoint:(NSString*)appoint;
@end
