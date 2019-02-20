//
//  WXActivityDetailsViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/25.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WXActivityDetailsViewController.h"
#import <WeexSDK/WXSDKInstance.h>

#import "Navigator.h"

#import "HexStringColor.h"

@interface WXActivityDetailsViewController ()
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;
@property (nonatomic, assign) CGFloat top;

@property (nonatomic, assign) UIView * topView;
@end

@implementation WXActivityDetailsViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];
    if (!self.navigationController.navigationBar.hidden) {
        _top = CGRectGetMaxY(self.navigationController.navigationBar.frame);
    } else{
        _top = CGRectGetMaxY([[UIApplication sharedApplication]statusBarFrame]);
    }
    _weexHeight = self.view.frame.size.height - _top;
    [self render];
    
}
- (void)dealloc
{
    [_instance destroyInstance];
}

- (void)viewWillAppear:(BOOL)animated
{
    [self.navigationController.navigationBar setHidden:NO];
    //状态栏
    [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleDefault;
   
    self.navigationController.navigationBar.barTintColor = [UIColor whiteColor];
    self.navigationController.navigationBar.titleTextAttributes = @{NSForegroundColorAttributeName:[UIColor whiteColor]};
    
    [self.navigationController.navigationBar setBackgroundImage:[[UIImage alloc] init] forBarMetrics:UIBarMetricsDefault];
 
//    if (_navBarStyle[@"left"]) {
//
//       NSDictionary * style =  _navBarStyle[@"left"]; self.navigationItem.leftBarButtonItem.tintColor = [HexStringColor colorwithHexString:style[@"color"]];
//        [self.navigationItem.leftBarButtonItem setTitleTextAttributes:@{NSForegroundColorAttributeName:[HexStringColor colorwithHexString:style[@"color"]]} forState:UIControlStateNormal];
//    }
    
    if (_navBarStyle[@"center"]) {
        NSDictionary * style =  _navBarStyle[@"center"]; self.navigationController.navigationBar.barTintColor = [HexStringColor colorwithHexString:style[@"color"]];
        self.navigationController.navigationBar.titleTextAttributes = @{NSForegroundColorAttributeName:[HexStringColor colorwithHexString:style[@"color"]]};
    }
    
    if (_navBarStyle[@"right"]) {
        NSDictionary * style =  _navBarStyle[@"right"]; self.navigationItem.rightBarButtonItem.tintColor = [HexStringColor colorwithHexString:style[@"color"]];
        [self.navigationItem.rightBarButtonItem setTitleTextAttributes:@{NSForegroundColorAttributeName:[HexStringColor colorwithHexString:style[@"color"]]} forState:UIControlStateNormal];
    }
    if (_navBarStyle[@"bg"]) {
          NSDictionary * style =  _navBarStyle[@"bg"];
        //这里设置背景色，导航栏，状态栏颜色会影响到（大概是因为weex设置导览航，状态栏为透明色）
        self.view.backgroundColor = [HexStringColor colorwithHexString:style[@"color"]];
        //这里更改导航栏的颜色，上一级导航栏的颜色会一同更改，这是因为weex原理是单视图应用
//        self.navigationController.navigationBar.backgroundColor = [HexStringColor colorwithHexString:style[@"color"]];
    }
//    [self.instance fireGlobalEvent:@"callJS" params:@{@"key":@"2222222"}];
}
//- (void)viewDidAppear:(BOOL)animated{
//    [self.navigationController.navigationBar setHidden:YES];
//}
- (void)viewWillDisappear:(BOOL)animated{
    [self.navigationController.navigationBar setHidden:YES];
}

-(void)back{
    
}

- (void)render
{
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    _instance.frame = CGRectMake(0,CGRectGetMaxY(self.navigationController.navigationBar.frame), width, _weexHeight);
    if (_navBarStyle[@"left"]) {
        
        NSDictionary * style =  _navBarStyle[@"left"]; self.navigationItem.leftBarButtonItem.tintColor = [HexStringColor colorwithHexString:style[@"color"]];
         self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"back" style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    }
//    self.navigationItem.leftBarButtonItem = nil;
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
    };
    _instance.onFailed = ^(NSError *error) {
        NSLog(@"failed %@",error);
    };
    
    _instance.renderFinish = ^(UIView *view) {
        NSLog(@"render finish");
    };
    
    _instance.updateFinish = ^(UIView *view) {
        NSLog(@"update Finish");
    };
    NSURL * url = [NSURL URLWithString:_urlStr];
//    优先加载本地
    [_instance renderWithURL:url options:@{@"bundleUrl": [NSString stringWithFormat:@"file://%@/bundlejs/components/",[NSBundle mainBundle].bundlePath]} data:nil];
}



@end
