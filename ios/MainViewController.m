//
//  MainViewController.m
//  TLReactNativeProject
//
//  Created by lichuanjun on 16/6/27.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "RNViewController.h"
#import "OCViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  [super viewDidLoad];
  self.view.backgroundColor=[UIColor whiteColor];
  
  self.title = @"原生界面";
  
  UIButton *button=[UIButton buttonWithType:UIButtonTypeSystem];
  [button setFrame:CGRectMake((375-200)/2, 200, 200, 35)];
  [button setTitle:@"点击打开RN界面" forState:UIControlStateNormal];
  [button addTarget:self action:@selector(buttonAction:) forControlEvents:UIControlEventTouchUpInside];
  
  [self.view addSubview:button];
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

-(void)buttonAction:(UIButton *)button{
  NSLog(@"点击了按钮...");
  [self.navigationController pushViewController:[[RNViewController alloc]init] animated:YES];
}

@end
