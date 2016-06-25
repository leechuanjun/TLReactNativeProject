/**
 * Course 32
 * React Native API模块之ActionSheetIOS可点击弹框详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActionSheetIOS,
} from 'react-native';

import Util from '../utils';

var BUTTONS = [
  'ITEM 0',
  'ITEM 1',
  'ITEM 2',
  '删除',
  '取消',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class CustomButton extends React.Component {
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
  constructor(props){
    super(props);
    this.state={
      clicked: 'none',
    };
    this._showActionSheet = this.showActionSheet.bind(this);
    this._showShareActionSheet = this.showShareActionSheet.bind(this);
  }
  //显示ActionSheet
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: 'green',
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
  //显示ShareActionSheet
  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://www.lcode.org',
      message: '转入江清清的技术专栏',
      subject: '江清清的技术专栏Email主题',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  }
  render() {
    return (
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
           ActionSheetIOS实例
        </Text>
        <CustomButton text="弹出基本Action"
            onPress={this._showActionSheet}
        />
        <Text style={{margin:10}}>
           基本Action点击选择的项目为: {this.state.clicked}
        </Text>

        <CustomButton text="弹出ShareAction"
            onPress={this._showShareActionSheet}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});
