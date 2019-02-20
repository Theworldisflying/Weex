//
//  Navigator.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/26.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "Navigator.h"
#import "HexStringColor.h"
#import "RegularExpression.h"
#import <UIImageView+WebCache.h>

@implementation Navigator

+ (instancetype)allocWithZone:(struct _NSZone *)zone{
    return [Navigator sharedInstance];
}
+(Navigator *)sharedInstance{
    static Navigator * date_instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        date_instance = [[super allocWithZone:nil] init];
    });
    return date_instance;
}
-(id)copyWithZone:(NSZone *)zone{
    return [Navigator sharedInstance];
}
-(id)mutableCopyWithZone:(NSZone *)zone{
    return [Navigator sharedInstance];
}

#pragma mark--
#pragma mark--leftBarButton
-(UIView*)setLeftBarButtonItem:(NSDictionary*)styles{

    if (styles&&styles[@"left"]) {
        NSDictionary * leftItemAttr = styles[@"left"];
        CGSize size = [UIApplication sharedApplication].keyWindow.bounds.size;
        
        CGFloat width = size.width/4;
        CGFloat height = 44;
        CGFloat imgW = 20;
        if (styles[@"width"]) {
            NSString * w = styles[@"width"];
            if (w&&w.length>0&&[RegularExpression isNumText:w]) {
                width = [w floatValue];
            }
        }
        if (styles[@"height"]) {
            NSString * h = styles[@"height"];
            if (h&&h.length>0&&[RegularExpression isNumText:h]) {
                height = [h floatValue];
            }
        }
        UIView * itemView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, width, height)];
        UIImageView * imgView = [[UIImageView alloc] initWithFrame:CGRectMake(0, (height-imgW)/2, imgW, imgW)];
        
        NSString * imgName = leftItemAttr[@"img"];
        if (imgName&&imgName.length>0) {
            imgView.image = [UIImage imageNamed:imgName];
            [itemView addSubview:imgView];
        }
        
        UILabel * text = [[UILabel alloc] init];
        if (leftItemAttr[@"title"]) {
            text.text = leftItemAttr[@"title"];
            [itemView addSubview:text];
            if (imgName&&imgName.length>0) {
                text.frame = CGRectMake(CGRectGetMaxX(imgView.frame)+5, 0, CGRectGetWidth(itemView.frame)-CGRectGetMaxX(imgView.frame)-5, height);
            }else{
                text.frame = CGRectMake(10, 0, CGRectGetWidth(itemView.frame)-10, height);
            }
            NSString * color = leftItemAttr[@"color"];
            if (color&&color.length>0) {
                text.textColor = [HexStringColor colorwithHexString:color];
            }
            
        }
        
        
        UITapGestureRecognizer * tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(leftItemClick)];
        [itemView addGestureRecognizer:tap];
        
        return itemView;
    }
    return nil;
}


-(void)leftItemClick{
    !self.leftItem?:self.leftItem();
}
#pragma mark--
#pragma mark--右侧导航栏
//导航栏右侧按钮
-(UIView*)setRightBarButtonItem:(NSDictionary*)styles{
    if (styles&&styles[@"right"]) {
        NSDictionary * leftItemAttr = styles[@"right"];
        CGSize size = [UIApplication sharedApplication].keyWindow.bounds.size;
        
        CGFloat width = size.width/4;
        CGFloat height = 44;
        CGFloat imgW = 20;
        if (styles[@"width"]) {
            NSString * w = styles[@"width"];
            if (w&&w.length>0&&[RegularExpression isNumText:w]) {
                width = [w floatValue];
            }
        }
        if (styles[@"height"]) {
            NSString * h = styles[@"height"];
            if (h&&h.length>0&&[RegularExpression isNumText:h]) {
                height = [h floatValue];
            }
        }
        UIView * itemView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, width, height)];
        UIImageView * imgView = [[UIImageView alloc] initWithFrame:CGRectMake(0, (height-imgW)/2, imgW, imgW)];
        
        NSString * imgName = leftItemAttr[@"img"];
        if (imgName&&imgName.length>0) {
            imgView.image = [UIImage imageNamed:imgName];
            [itemView addSubview:imgView];
        }
        
        UILabel * text = [[UILabel alloc] init];
        if (leftItemAttr[@"title"]) {
            text.text = leftItemAttr[@"title"];
            [itemView addSubview:text];
            if (imgName&&imgName.length>0) {
                text.frame = CGRectMake(CGRectGetMaxX(imgView.frame)+5, 0, CGRectGetWidth(itemView.frame)-CGRectGetMaxX(imgView.frame)-5, height);
            }else{
                text.frame = CGRectMake(10, 0, CGRectGetWidth(itemView.frame)-10, height);
            }
            NSString * color = leftItemAttr[@"color"];
            if (color&&color.length>0) {
                text.textColor = [HexStringColor colorwithHexString:color];
            }
            
        }
        
        
        UITapGestureRecognizer * tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(rightItemClick)];
        [itemView addGestureRecognizer:tap];
        
        return itemView;
    }
    return nil;
}
-(void)rightItemClick{
    !self.rightItem?:self.rightItem();
}
#pragma mark--
#pragma mark--titleView
-(UIView*)setTitleView:(NSDictionary*)styles{
    if (styles&&styles[@"center"]) {
        NSDictionary * titleAttr = styles[@"center"];
        CGSize size = [UIApplication sharedApplication].keyWindow.bounds.size;
        CGFloat width = size.width/3;
        CGFloat height = 44;
        if (styles[@"width"]) {
            NSString * w = styles[@"width"];
            if (w&&w.length>0&&[RegularExpression isNumText:w]) {
                width = [w floatValue];
            }
        }
        if (styles[@"height"]) {
            NSString * h = styles[@"height"];
            if (h&&h.length>0&&[RegularExpression isNumText:h]) {
                height = [h floatValue];
            }
        }
        UIView * itemView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, width, height)];
        
        
        NSString * img = @"";
        NSString * title = @"";
        if (titleAttr[@"img"]) {
            img = titleAttr[@"img"];
        }
        if (titleAttr[@"title"]) {
            title = titleAttr[@"title"];
        }
        CGSize itemtSize = itemView.bounds.size;
//        图片
        if (img&&img.length>0) {
            UIImageView * imgView = [[UIImageView alloc] init];
            if (title.length>0) {
                imgView.frame = CGRectMake(0, 0, itemtSize.width/2, itemtSize.height);
            }else{
                imgView.frame = itemView.bounds;
            }
            [imgView sd_setImageWithURL:[NSURL URLWithString:img] placeholderImage:nil];
            [itemView addSubview:imgView];
        }
        
//        标题
        if (title.length>0) {
            UILabel * text = [[UILabel alloc] init];
            text.text = title;
            if (titleAttr[@"font"]) {
                NSString * font = titleAttr[@"font"];
                if (font&&font.length>0&&[RegularExpression isNumText:font]) {
                    text.font= [UIFont systemFontOfSize:[font floatValue]];
                }
            }
            if (titleAttr[@"weightFont"]) {
                
                NSString * font = titleAttr[@"weightFont"];
                if (font&&font.length>0&&[RegularExpression isNumText:font]) {
                    text.font= [UIFont boldSystemFontOfSize:[font floatValue]];
                }
            }
            
            if (titleAttr[@"textAlign"]) {
                NSString * align = titleAttr[@"textAlign"];
                if ([align isEqualToString:@"center"]) {
                    text.textAlignment = NSTextAlignmentCenter;
                }
                if ([align isEqualToString:@"right"]) {
                    text.textAlignment = NSTextAlignmentRight;
                }
                if ([align isEqualToString:@"left"]) {
                    text.textAlignment = NSTextAlignmentLeft;
                }
            }
            
            [itemView addSubview:text];
            if (img&&img.length>0) {
                text.frame = CGRectMake(itemtSize.width/2, 0, itemtSize.width/2, itemtSize.height);
            }else{
                text.frame = itemView.bounds;
            }
            NSString * color = titleAttr[@"color"];
            if (color&&color.length>0) {
                text.textColor = [HexStringColor colorwithHexString:color];
            }
        }
        
        
        UITapGestureRecognizer * tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(titleViewClick)];
        [itemView addGestureRecognizer:tap];
        
        return itemView;
    }
    return nil;
}
-(void)titleViewClick{
    !self.titleViewBlock?:self.titleViewBlock();
}
@end
