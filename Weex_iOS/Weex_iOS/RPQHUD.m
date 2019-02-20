//
//  RPQHUD.m
//  taoCaiPiao
//
//  Created by Mac_mini on 2017/6/8.
//  Copyright © 2017年 Mac_mini. All rights reserved.
//

#import "RPQHUD.h"
#define SCREEN_WIDTH      [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT     [UIScreen mainScreen].bounds.size.height
#define RGBColor(r, g, b) [UIColor colorWithRed:(r)/255.0 green:(g)/255.0 blue:(b)/255.0 alpha:1.0]
#define COLOR_WITH_HEX(hexValue) [UIColor colorWithRed:((float)((hexValue & 0xFF0000) >> 16)) / 255.0 green:((float)((hexValue & 0xFF00) >> 8)) / 255.0 blue:((float)(hexValue & 0xFF)) / 255.0 alpha:1.0f]

@implementation RPQHUD



-(id)initWithFrame:(CGRect)frame{
    
    if (self = [super initWithFrame:frame]) {
        
        self.backgroundColor = [UIColor colorWithWhite:0.5 alpha:0.2];
        
        
        self.testActivityIndicator = [[UIActivityIndicatorView alloc]initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhiteLarge];
        self.testActivityIndicator.center = CGPointMake(SCREEN_WIDTH/2, SCREEN_HEIGHT/2 - 100);
        [self addSubview:self.testActivityIndicator];
        self.testActivityIndicator.color = COLOR_WITH_HEX(0x0099ee); // 改变圈圈的颜色为红色； iOS5引入
        [self.testActivityIndicator startAnimating]; // 开始旋转
        
    }
    return self;
    
}

-(void)setHide{
    
    [self.testActivityIndicator stopAnimating]; // 结束旋转
    [self.testActivityIndicator setHidesWhenStopped:YES];
    
    [self removeFromSuperview];
    
}

@end
