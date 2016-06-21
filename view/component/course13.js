/**
 * Course 13
 * React Native 控件之Cilpboard粘贴板使用详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Clipboard,
  AlertIOS,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
        content:'需要保存的内容...',
    };
  }

  async _setClipboardContent(){
    Clipboard.setString('Hello World');
    try {
      var content = await Clipboard.getString();
      AlertIOS.alert(
        '粘贴板的内容',
        content
      );
    } catch (e) {
      AlertIOS.alert(e.message);
    }
  }

  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
            ClipBoard粘贴板演示setSting,getString方法
        </Text>
        <Text onPress={this._setClipboardContent} style={{color: 'blue',marginLeft:10}}>
           点击我把'Hello World'信息添加到粘贴板,并且弹出来内容.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70
  },
  welcome: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft:10,
    margin: 10,
  },
});
