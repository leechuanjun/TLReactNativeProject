//
//  RNViewController.m
//  TLReactNativeProject
//
//  Created by lichuanjun on 16/6/27.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNViewController.h"
#import "RCTRootView.h"
#import "OCViewController.h"

@interface RNViewController ()

@end

@implementation RNViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  [super viewDidLoad];
  self.title=@"RN界面";
  NSURL *jsCodeLocation=[NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"TLReactNativeProject"
                                               initialProperties:nil
                                                   launchOptions:nil];
  self.view=rootView;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
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
