/**
 * Course 18
 * React Native控件之SliderIOS滑块组件详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
} from 'react-native';

import Util from '../utils';

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text style={styles.welcome}>
          SliderIOS使用实例
        </Text>
        <Text style={{marginLeft:10}}>默认的SliderIOS</Text>
        <Slider style={{margin:10}}
          onSlidingComplete={()=>console.log('当前的值为'+this.state.value)}
          onValueChange={(value)=>this.setState({value:value})}
        />
        <Text style={{marginLeft:10}}>设置SliderIOS无法滑动</Text>
        <Slider style={{margin:10}}
          disabled={true}
        />
        <Text style={{marginLeft:10}}>定制SliderIOS</Text>
        <Slider style={{margin:10}}
          value={0.4}
          thumbImage={require('../resource/img/course18/slider.png')}
          minimumTrackImage={require('../resource/img/course18/slider-left.png')}
          maximumTrackImage={require('../resource/img/course18/slider-left.png')}
          onSlidingComplete={()=>console.log('当前的值为'+this.state.value)}
          onValueChange={(value)=>this.setState({value:value})}
        />
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
    margin: 20,
  },
});
