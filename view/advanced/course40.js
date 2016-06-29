/**
 * Course 40
 * React Native 进阶之原生混合与数据通信开发详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeAppEventEmitter,
} from 'react-native';

import Util from '../utils';
var TLRNBridgeModule = NativeModules.TLRNBridgeModule;
var subscription; //订阅者

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
  constructor(props){
    super(props);
    this.state={
        events:'',
        msg:'',
    }
  }
  //获取Promise对象处理
  async _updateEvents(){
    try{
        var events=await TLRNBridgeModule.RNInvokeOCPromise({'name':'jiangqqlmj'});
        this.setState({events});
    }catch(e){
        this.setState({events:e.message});
    }
  }
  componentDidMount(){
    console.log('开始订阅通知...');
    subscription = NativeAppEventEmitter.addListener(
         'EventReminder',
          (reminder) => {
            let errorCode=reminder.errorCode;
            if(errorCode===0){
               this.setState({msg:reminder.name});
            }else{
               this.setState({msg:reminder.msg});
            }

          }
         );
  }
  componentWillUnmount(){
     subscription.remove();
  }

  render() {
    return (
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
           混合与RN,iOS通信实例讲解
        </Text>
        <Text style={{margin:5}}>'返回数据为:'+{this.state.events}</Text>
        <CustomButton text='RN调用iOS原生方法_CallBack回调'
          onPress={()=>{TLRNBridgeModule.RNInvokeOCCallBack(
            {'name':'jiangqq','description':'http://www.lcode.org'},
            (error,events)=>{
                if(error){
                  console.error(error);
                }else{
                  this.setState({events:events});
                }
          })}}
        />
        <CustomButton text='RN调用iOS原生方法_Promise回调'
           onPress={()=>this._updateEvents()}
        />
        <Text style={{margin:20}}>
          '返回数据为:'+{this.state.msg}
        </Text>
        <CustomButton text='iOS调用访问React Native'
            onPress={()=>TLRNBridgeModule.VCOpenRN({'name':'jiangqqlmj'})}
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
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#facece',
  },
});
