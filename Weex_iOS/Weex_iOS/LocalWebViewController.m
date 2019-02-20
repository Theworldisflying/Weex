//
//  LocalWebViewController.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/5.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "LocalWebViewController.h"

@interface LocalWebViewController ()

@end

@implementation LocalWebViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    // Do any additional setup after loading the view.
}
- (void)viewWillAppear:(BOOL)animated{
    self.navigationController.navigationBar.hidden = NO;
}
//url
-(void)setUrlStr:(NSString*)urlStr{
    
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
