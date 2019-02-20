//
//  WeexCustomViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/20.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "WeexCustomViewController.h"
#import <WeexSDK/WXSDKInstance.h>

@interface WeexCustomViewController ()
@property (nonatomic, strong) WXSDKInstance *instance;
//URL属性(用于指定加载js的URL,一般声明在接口中,我们为了测试方法写在了类扩展中.)
@property (nonatomic, strong) NSURL *url;
//Weex视图
@property (weak, nonatomic) UIView *weexView;
@end

@implementation WeexCustomViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"back" style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    [self initMo];
    // Do any additional setup after loading the view.
}
-(void)back{
    [self dismissViewControllerAnimated:YES completion:nil];
}

-(void)initMo{
    // 创建WXSDKInstance对象
    _instance = [[WXSDKInstance alloc] init];
    NSURL *URL = [NSURL URLWithString:@"http://192.168.1.25:8084/dist/components/Frame/MyCustomVue.js"];
    [_instance renderWithURL:URL options:@{@"bundleUrl":URL.absoluteString} data:nil];
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
