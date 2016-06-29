/**
 * Course 39
 * React Native进阶之原生模块封装特性篇详解-适配iOS开发
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
var TLCalendarManager = NativeModules.TLCalendarManager;
var subscription;

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
        events_callback:'',
        events_promises:'',
        notice:'',
    }
  }

  componentDidMount(){
    console.log('开始订阅通知...');
    subscription = NativeAppEventEmitter.addListener(
       'EventReminder',
        (reminder) => console.log('通知信息:'+reminder.name)
       );
  }
  componentWillUnmount(){
     subscription.remove();
  }

  //获取Promise对象处理
  async _updateEvents(){
    try{
        var events_promises=await TLCalendarManager.findEventsPromise();
        this.setState({events_promises});
    }catch(e){
        console.error(e);
    }
  }

  render() {
    return(
      <View style={styles.rootViewContainer}>
        <View style={styles.titleView}>
          <Text style={styles.welcome}>
              封装iOS原生模块实例
          </Text>
        </View>
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>TLCalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
        />
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>TLCalendarManager.addEventMoreDate('生日聚会', '江苏南通 中天路',1463987752)}
        />
        <CustomButton text="调用原生模块addEvent方法-传入字段格式"
            onPress={()=>TLCalendarManager.addEventMoreDetails('生日聚会', {
              location:'江苏 南通市 中天路',
              time:1463987752,
              description:'请一定准时来哦~'
            })}
        />
        <View style={styles.titleView}>
          <Text style={styles.welcome}>
              封装iOS原生模块实例2
          </Text>
        </View>
        <Text style={styles.titleValue}>
          'Callback的返回数据为:'+{this.state.events_callback}
        </Text>
        <CustomButton text="点击调用原生模块findEvents方法-Callback"
            onPress={()=>TLCalendarManager.findEvents((error,events_callback)=>{
                if(error){
                  console.error(error);
                }else{
                  this.setState({events_callback:events_callback,});
                }
              }
            )}
        />
        <Text style={styles.titleValue}>
            'Callback的返回数据为:'+{this.state.events_promises}
        </Text>
        <CustomButton text="点击调用原生模块findEventsPromise方法-Callback"
          onPress={()=>TLCalendarManager.findEvents((error,events_promises)=>{
              if(error){
                console.error(error);
              }else{
                this.setState({events_promises:events_promises,});
              }
            }
          )}
        />
        <Text style={styles.titleValue}>
          '静态数据为:'+{TLCalendarManager.firstDayOfTheWeek}
        </Text>
        <Text style={styles.titleValue}>
          '发送通知信息:'+{this.state.notice}
        </Text>
        <CustomButton text="点击调用原生模块sendNotification方法"
            onPress={()=>TLCalendarManager.sendNotification('准备发送通知...')}
        />
      </View>
    )
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
    borderWidth:1,
    borderColor: '#cdcdcd',
  },
  titleView: {
    height:45,
    backgroundColor:'#a5b5c5',
    justifyContent:'center',
  },
  titleValue: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#f26605',
  },
});
