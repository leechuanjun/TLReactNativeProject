/**
 * Course 25
 * React Native API模块之NetInfo(网络信息)使用详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NetInfo,
} from 'react-native';

import Util from '../utils';
import ToastIOS from 'react-native-sk-toast';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
       isConnected: null,
       connectionInfo:null,
   };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'change',
       this._handleConnectivityChange
    );
    //检测网络是否连接
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({isConnected}); }
    );
    //检测网络连接信息
     NetInfo.fetch().done(
      (connectionInfo) => { this.setState({connectionInfo}); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  }

  _handleConnectivityChange(isConnected) {
     ToastIOS.bottom((isConnected ? 'online' : 'offline'));
  }

  render() {
    return (
      <View style={styles.rootViewContainer}>
        <Text style={styles.title}>
            当前的网络状态
        </Text>
        <Text style={styles.value}>
           {this.state.isConnected ? '网络在线' : '离线'}
        </Text>
        <Text style={styles.title}>
            当前网络连接类型
        </Text>
        <Text style={styles.value}>
            {this.state.connectionInfo}
        </Text>
        {/* 只适合Android平台，用来判断当前连接的网络是否需要收费 */}
        <Text style={styles.title}>
            当前连接网络是否计费
        </Text>
        <Text style={styles.value}>
          {NetInfo.isConnectionExpensive === true ? '需要计费' : '不要'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    backgroundColor: '#F5FCFF',
  },
  value: {
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    color: '#FF33FF',
  },
});
