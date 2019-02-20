//
//  WXOthersViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2019/1/8.
//  Copyright © 2019 miu_wen. All rights reserved.
//

#import "WXOthersViewController.h"
#import <WeexSDK/WXSDKInstance.h>
#import "HexStringColor.h"
#import "Navigator.h"
@interface WXOthersViewController ()
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;
@property (nonatomic, assign) CGFloat top;
@property (nonatomic, assign) UIView * topView;
@end

@implementation WXOthersViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];
    if (!self.navigationController.navigationBar.hidden) {
        _top = CGRectGetMaxY(self.navigationController.navigationBar.frame);
    } else{
        _top = CGRectGetMaxY([[UIApplication sharedApplication]statusBarFrame]);
    }
    _weexHeight = self.view.frame.size.height - _top;
    
    [self setBarStyle];
    [self render];
    
}
- (void)dealloc
{
    [_instance destroyInstance];
}

- (void)viewWillAppear:(BOOL)animated
{
    [self.navigationController.navigationBar setHidden:NO];
}
- (void)viewDidAppear:(BOOL)animated{
//    [self.navigationController.navigationBar setHidden:NO];
}
- (void)viewWillDisappear:(BOOL)animated{
//    页面消失的时候隐藏
    [self.navigationController.navigationBar setHidden:YES];
}
#pragma mark--
#pragma mark--url
-(void)setUrl:(NSString*)urlStr{
    self.urlStr = urlStr;
}
#pragma mark--
#pragma mark--navstyles
-(void)setNavStyles:(NSDictionary*)navBarStyle{
    self.navBarStyle = navBarStyle;
}

- (void)render
{
    
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    _instance.frame = CGRectMake(0,CGRectGetMaxY(self.navigationController.navigationBar.frame), width, _weexHeight);
 
    //为了避免循环引用声明一个弱指针的`self`
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
//    [_instance renderWithURL:url options:@{@"bundleUrl":url.absoluteString} data:nil];
    [_instance renderWithURL:url options:@{@"bundleUrl": [NSString stringWithFormat:@"file://%@/bundlejs/components/",[NSBundle mainBundle].bundlePath]} data:nil];
    

}
-(void)back{
    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark--
#pragma mark--设置导航栏
-(void)setBarStyle{
//    view背景色
    if (_navBarStyle&&_navBarStyle[@"viewBgColor"]) {
        NSDictionary * dic = _navBarStyle[@"viewBgColor"];
        if (dic&&dic[@"color"]) {
            self.view.backgroundColor = [HexStringColor colorwithHexString:dic[@"color"]];
        }
    }
    //    设置导航栏背景色
    if (_navBarStyle&&_navBarStyle[@"bg"]) {
        NSDictionary * dic = _navBarStyle[@"bg"];
        if (dic&&dic[@"color"]) {
            self.navigationController.navigationBar.barTintColor =  [HexStringColor colorwithHexString:dic[@"color"]];
        }
        
    }
    Navigator* navigator = [[Navigator alloc] init];
/*    leftItem
 */
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:[navigator setLeftBarButtonItem:_navBarStyle]];
    //为了避免循环引用声明一个弱指针的`self`
    __weak typeof(self) weakSelf = self;
    [Navigator sharedInstance].leftItem = ^{
        [weakSelf.navigationController popViewControllerAnimated:YES];
    };
    
    /*    titleView
     */
    self.navigationItem.titleView = [[Navigator sharedInstance] setTitleView:_navBarStyle];
    /*    rightItem
     */
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithCustomView:[navigator setRightBarButtonItem:_navBarStyle]];
    navigator.rightItem = ^{
        [weakSelf.navigationController popViewControllerAnimated:YES];
    };
}

@end
