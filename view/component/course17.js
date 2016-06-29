/**
 * Course 17
 * React Native 控件之SegmentedControlIOS分段组件详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
          SegmentedControlIOS使用实例
        </Text>
        <View >
         <SegmentedControlIOS
           values={['全国', '上海']}
           tintColor='red'
           style={{margin:10,height:30,width:200,alignSelf:'center'}}/>

          <SegmentedControlIOS
           values={['Android', 'iOS','Java','React']}
           tintColor='green'
           selectedIndex={1}
           onValueChange={(value)=> console.log('选中了'+value)}
           style={{marginTop:20,margin:10,height:30,width:300,alignSelf:'center'}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
