/**
 * Course 30
 * React Native API模块之AlertIOS弹框详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight,
} from 'react-native';

import Util from '../utils';

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
  render() {
    return(
      <View style={{backgroundColor:'#b9b9b9',flex:1,marginTop : 70,}}>
        <View style={{marginTop:20,height:45,backgroundColor:'#a5b5c5',justifyContent:'center'}}>
          <Text style={styles.welcome}>
           AlertIOS使用实例
          </Text></View>
        <Text style={{color:'white',height:20,marginTop:5,marginLeft:5}}>Alert方法实例:</Text>
        <CustomButton text='弹出一个带有标题和信息默认弹出框' onPress={()=>AlertIOS.alert('标题','我是提醒Message')}/>
        <CustomButton text='弹出两个按钮的弹出框' onPress={()=>AlertIOS.alert('标题','我是提醒Message',[
           {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
           {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
          ])}/>
        <Text style={{color:'white',height:20,marginTop:10,marginLeft:5}}>Prompt方法实例:</Text>
        <CustomButton text='弹出默认提醒框' onPress={()=>AlertIOS.prompt('温馨提醒','请输入相关信息')}/>
        <CustomButton text='弹出两个按钮的弹出框-密码输入框' onPress={()=>AlertIOS.prompt('温馨提醒','请输入密码',[
           {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
           {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
          ],'secure-text')}/>
        <CustomButton text='弹出两个按钮的弹出框-输入框存在默认信息' onPress={()=>AlertIOS.prompt('温馨提醒','请输入相关信息',[
           {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
           {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
          ],'plain-text','我是默认信息')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  welcome: {
    fontSize: 14,
    textAlign: 'left',
    margin: 20,
    color:'#fff',
    alignSelf:'center'
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});
