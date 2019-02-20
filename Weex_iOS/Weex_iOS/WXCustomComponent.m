//
//  WXCustomComponent.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/20.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WXCustomComponent.h"
#import <WeexSDK/WeexSDK.h>
#import "RPQHUD.h"
#import "WeexCustomViewController.h"
#import "MyView.h"
#import "CustomWebView.h"
@interface WXCustomComponent()
@property(nonatomic,strong) UIViewController * viewController;
@property(nonatomic,strong) UIWindow * window;

@property(nonatomic,strong) CustomWebView * customWebView;

@property(nonatomic,strong) NSDictionary * data;
@property(nonatomic,strong) WXSDKInstance* weexGetInstance;
@property(nonatomic,strong) NSDictionary * barStyle;
@end

@implementation WXCustomComponent
//一个 component 默认对应于一个 view，如果未覆盖 loadView 提供自定义 view，会使用 WXComponent 基类中的 WXView，WXView 是继承自 UIView 的一个派生 view。
- (UIView *)loadView{

//    WeexCustomViewController* cv = [[WeexCustomViewController alloc] init];
//    cv.view.backgroundColor = [UIColor redColor];
//
//    RPQHUD * h = [[RPQHUD alloc] initWithFrame:CGRectMake(100, 100, 400, 400)];
//    h.backgroundColor = [UIColor redColor];
//    return h;
    CGSize size = [UIApplication sharedApplication].keyWindow.bounds.size;
    CGFloat H = 0;
    NSString * height = @"0";
    if (self.data[@"customCss"]) {
        NSDictionary * cssDic = self.data[@"customCss"];
        if (cssDic&&cssDic[@"height"]) {
            height = cssDic[@"height"];
            if (height&&height.length>0) {
                H = [height floatValue];
            }
        }
    }
    
//    self.myView = [[MyView alloc] initWithFrame:CGRectMake(0, 0,size.width, H) data:self.data weexInstance:self.weexGetInstance barStyle:self.barStyle];
    self.customWebView = [[CustomWebView alloc] initWithFrame:CGRectMake(0, 0,size.width, H) data:self.data weexInstance:self.weexGetInstance];
//
//    self.myView = [[MyView alloc] initData:self.data];
    
    return self.customWebView;
}


//对组件 view 需要做一些配置，比如设置 delegate，可以在 viewDidLoad 生命周期做，如果当前 view 没有添加 subview 的话，不要设置 view 的 frame，WeexSDK 会根据 style 设置。
- (void)viewDidLoad{
    self.customWebView = [[CustomWebView alloc] init];
    
    [self.view addSubview:self.customWebView];
}
-(void)back{

}
- (void)updateStyles:(NSDictionary *)styles{
    
}
//更新属性，这里获取绑定的属性：
- (void)updateAttributes:(NSDictionary *)attributes{
    if (attributes&&attributes[@"content"]) {
        NSDictionary * attrDic = attributes[@"content"];
        if (attrDic[@"pushData"]) {
            self.data = @{@"content":attrDic[@"htmldata"],@"customCss":attrDic[@"customCss"],@"pushData":attrDic[@"pushData"]};
        }else{
            self.data = @{@"content":attrDic[@"htmldata"],@"customCss":attrDic[@"customCss"]};
        }
    }
    if (attributes&&attributes[@"barStyle"]) {
        self.barStyle = attributes[@"barStyle"];
    }
}
#pragma mark--
#pragma mark--initWithRef
//TODO
/*attributes目前支持数据类型
 :content="{htmldata: listData.data.content,height:'800',pushData: {url: pushUrl,className: 'links',messageName:'activityClass'}}"
 htmldata：html（字符串类型）
 height: 设置webView的高度
 pushData：点击标签class响应时间
      pushData下属性：
             url：要跳转的js文件路径
       className：添加事件的类名
     messageName：判断响应哪个事件
 */
- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance{
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
//        self.data = @{@"key":@"<h1 style='color:#00B4FF'>dsafasdfasdf</h1>"};
        //转义得到的data
        
        self.weexGetInstance = weexInstance;
        NSString * str = [WXConvert NSString:attributes[@"content"][@"htmldata"]];
        NSLog(@"============%@",str);
        if (str) {
            if (attributes[@"content"]) {
                NSDictionary * attrDic = attributes[@"content"];
                if (attrDic[@"pushData"]) {
                    self.data = @{@"content":attrDic[@"htmldata"],@"customCss":attrDic[@"customCss"],@"pushData":attrDic[@"pushData"]};
                }else{
                    self.data = @{@"content":attrDic[@"htmldata"],@"customCss":attrDic[@"customCss"]};
                }
            }
            
            if (attributes&&attributes[@"barStyle"]) {
                self.barStyle = attributes[@"barStyle"];
            }
            
        }
        
//        self.data =  attributes; NSLog(@"==================%@=====event==%@",attributes,events);
//        //这里str是数组格式的字符串，下面JSON转数组
//        NSArray * infoArray = [NSJSONSerialization JSONObjectWithData:[str dataUsingEncoding:NSUTF8StringEncoding] options:(NSJSONReadingAllowFragments) error:nil];
//        NSLog(@"=======++++++++++====%@",infoArray);

    }
    return self;
    
 
}

- (void)addEvent:(NSString *)eventName{
    if ([eventName isEqualToString:@"onCick"]) {
        NSLog(@"事件添加=====");
    }
}
- (void)removeEvent:(NSString *)eventName{
    if ([eventName isEqualToString:@"onCick"]) {
        NSLog(@"事件移除=====");
    }
}

-(void)showDEBUGUI{
    
}
- (void)show:(NSString *)content{
    NSLog(@"%@",content);
//     self.data = @{@"key":@"sadfasdfad"};
//    UILabel * l = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 0, 0)];
//    [self.view addSubview:l];
//
//    [(MyView*)self.view addSubview:l];
//    [self.myView setContent:content];
}

@end
