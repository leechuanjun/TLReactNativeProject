/**
 * Course 42
 * 超详细React Native实现微信好友/朋友圈分享功能-Android/iOS双平台通用
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
} from 'react-native';

import Util from '../utils';
import ToastIOS from 'react-native-sk-toast';
var WeChat = require('react-native-wechat');

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class extends Component{
  constructor(props) {
      super(props);
      //应用注册
      WeChat.registerApp('wx2fead6431757a5c2');
  }
  render() {
    return (
      <View style={{margin:20}}>
        <Text style={styles.welcome}>
            微信好友/朋友圈分享实例
        </Text>
        <CustomButton text='微信好友分享-文本'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({type: 'text', description: '测试微信好友分享文本'})
                        .catch((error) => {
                          ToastIOS.bottom(error.message);
                        });
                      } else {
                        ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
        <CustomButton text='微信好友分享-链接'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({
                          title:'微信好友测试链接',
                          description: '分享自:leechuanjun的技术专栏(www.jianshu.com)',
                          thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                          type: 'news',
                          webpageUrl: 'http://www.jianshu.com/p/ce5439dd1f52'
                        })
                        .catch((error) => {
                          ToastIOS.bottom(error.message);
                        });
                      } else {
                        ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
        <CustomButton text='微信朋友圈分享-文本'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({type: 'text', description: '测试微信朋友圈分享文本'})
                        .catch((error) => {
                          ToastIOS.bottom(error.message);
                        });
                      } else {
                        ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
        <CustomButton text='微信朋友圈分享-链接'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({
                          title:'微信朋友圈测试链接',
                          description: '分享自:leechuanjun的技术专栏(www.jianshu.com)',
                          thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                          type: 'news',
                          webpageUrl: 'http://www.jianshu.com/p/ce5439dd1f52'
                        })
                        .catch((error) => {
                          ToastIOS.bottom(error.message);
                        });
                      } else {
                        ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});
