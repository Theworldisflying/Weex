//
//  WXCustomVueViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/20.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WXCustomVueViewController.h"
#import <WeexSDK/WXSDKInstance.h>
#import <WeexSDK/WXSDKEngine.h>
#import "WXCustomEventModule.h"

#import "WXActivityDetailsViewController.h"
#import "RPQHUD.h"
@interface WXCustomVueViewController ()
@property (nonatomic, strong) WXSDKInstance *instance;
//URL属性(用于指定加载js的URL,一般声明在接口中,我们为了测试方法写在了类扩展中.)
@property (nonatomic, strong) NSURL *url;
//Weex视图
@property (weak, nonatomic) UIView *weexView;
@end

@implementation WXCustomVueViewController
- (void)viewWillAppear:(BOOL)animated{
    self.navigationController.navigationBar.hidden = NO;
   
}
- (void)viewWillDisappear:(BOOL)animated{
    self.navigationController.navigationBar.hidden = YES;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"back" style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    [self initBaseWX];
    
    // Do any additional setup after loading the view.
}
-(void)back{
    [self dismissViewControllerAnimated:YES completion:nil];
}

-(void)initBaseWX{
    // 创建WXSDKInstance对象
    _instance = [[WXSDKInstance alloc] init];
    // 设置weexInstance所在的控制器
    _instance.viewController = self;
    //设置weexInstance的frame
//    _instance.frame = self.view.frame;
//         NSURL *url = [[NSBundle mainBundle] URLForResource:@"index" withExtension:@"js"];
//        //设置weexInstance用于渲染的`js`的URL路径(后面说明)
//        [_instance renderWithURL:url options:@{@"bundleUrl":[url absoluteString]} data:nil];
    //http://192.168.1.11:8081/dist/components/ActivityController.js
//    活动链接
//    http://192.168.1.18:8082/dist/index.js
//    签到
//    http://192.168.1.18:8082/dist/SignIn/SignInController.js
    
    NSURL *URL = [NSURL URLWithString:@"http://192.168.5.100:8082/dist/index.js"];
    [_instance renderWithURL:URL options:@{@"bundleUrl":URL.absoluteString} data:nil];
    _instance.frame = CGRectMake(0, 88, self.view.bounds.size.width, self.view.bounds.size.height-88-30);
//    _instance.frame = self.view.bounds;
    RPQHUD *hud = [[RPQHUD alloc]initWithFrame:CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height)];
    UIApplication *ap = [UIApplication sharedApplication];
    [ap.keyWindow addSubview: hud];
    //为了避免循环引用声明一个弱指针的`self`
    __weak typeof(self) weakSelf = self;
    //设置weexInstance创建完毕回调
    _instance.onCreate = ^(UIView *view) {
        weakSelf.weexView = view;
        [weakSelf.weexView removeFromSuperview];
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    // 设置`weexInstance`出错的回调
    _instance.onFailed = ^(NSError *error) {
        //process failure
        NSLog(@"处理失败:%@",error);
        [hud setHide];
    };
    //设置渲染完成的回调
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
        NSLog(@"渲染完成");
        [hud setHide];
    };
//    [WXSDKEngine initSDKEnvironment];
//    [WXSDKEngine registerModule:@"cell" withClass:[WXCustomEventModule class]];
}

-(void)cellClick:(NSDictionary*)params{
  
//    WXActivityDetailsViewController * dvc = [[WXActivityDetailsViewController alloc] init];
//    [self.navigationController pushViewController:dvc animated:YES];
//    [[_instance.viewController navigationController]  pushViewController:dvc animated:YES];
}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
