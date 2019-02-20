//
//  RegularExpression.m
//  KaiXinCai
//
//  Created by wyl on 2018/7/5.
//  Copyright © 2018年 Mac_mini. All rights reserved.
//

#import "RegularExpression.h"

@implementation RegularExpression

+(BOOL)isLetterAndNum:(NSString*)test minimalLength:(NSInteger)min max:(NSInteger)max{
   

    NSString * pattern = [NSString stringWithFormat:@"^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{%ld,%ld}$",min,max];
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", pattern];
   BOOL result = [pred evaluateWithObject:test];

    return result;
}


//是否是纯数字
+ (BOOL)isNumText:(NSString *)str{
    NSString * regex        = @"([0-9]*)";
    NSPredicate * pred      = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    BOOL isMatch            = [pred evaluateWithObject:str];
    if (isMatch) {
        return YES;
    }else{
        return NO;
    }

}
//检测数字是否时包含+-号小数点
+ (BOOL)isNumString:(NSString *)str{
    NSString * regex        = @"([+-])*([0-9]*)[.]([0-9]*)?$";
    NSPredicate * pred      = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    BOOL isMatch            = [pred evaluateWithObject:str];
    if (isMatch) {
        return YES;
    }else{
        return NO;
    }
    
}

//检测是否时以n指定字符或这些字符中的一个字符开头并返回该字符
+(BOOL)isStartStr:(NSString*)str appoint:(NSString*)appoint{
    NSString * regex        = [NSString stringWithFormat:@"^[%@]?",appoint];
    NSPredicate * pred      = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", regex];
    BOOL isMatch            = [pred evaluateWithObject:str];
    if (isMatch) {
        return YES;
    }else{
        return NO;
    }
}

//是否是url
+(BOOL)isUrl:(NSString*)url

{
    
  
    
    if (url.length>4 && [[url substringToIndex:4] isEqualToString:@"www."]) {
        
        url = [NSString stringWithFormat:@"http://%@",self];
        
    }
    
    NSString *urlRegex = @"(https|http|ftp|rtsp|igmp|file|rtspt|rtspu)://((((25[0-5]|2[0-4]\\d|1?\\d?\\d)\\.){3}(25[0-5]|2[0-4]\\d|1?\\d?\\d))|([0-9a-z_!~*'()-]*\\.?))([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\\.([a-z]{2,6})(:[0-9]{1,4})?([a-zA-Z/?_=]*)\\.\\w{1,5}";
    
    NSPredicate* urlTest = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", urlRegex];
    
    return [urlTest evaluateWithObject:url];
}
@end
