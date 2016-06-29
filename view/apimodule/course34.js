/**
 * Course 34
 * React Native模块之Linking详解以及实例-Android/iOS双平台通用
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableHighlight,
} from 'react-native';

import Util from '../utils';

class CustomButton extends React.Component {
  constructor(props){
    super(props);
  }
  propTypes: {
    url: React.PropTypes.string,
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={()=>Linking.canOpenURL(this.props.url).then(supported => {
           if (supported) {
               Linking.openURL(this.props.url);
           } else {
              console.log('无法打开该URI: ' + this.props.url);
           }
        })}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class extends Component{
  render() {
    return(
      <View style={styles.rootViewContainer}>
        <Text text="iOS平台,Linking演示"/>
         <CustomButton url={'http://www.lcode.org'}  text="点击打开http网页(http://www.lcode.org)"/>
         <CustomButton url={'https://www.baidu.com'} text="点击打开https网页(https://www.baidu.com)"/>
         <CustomButton url={'smsto:18321909068'}  text="点击进行发送短信(smsto:18321909068)"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop : 70,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: '#cdcdcd',
  },
});
