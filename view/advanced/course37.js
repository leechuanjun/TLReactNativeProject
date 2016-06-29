/**
 * Course 37
 * React Native控件之组件封装实例(Button按钮)
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Util from '../utils';
import ToastIOS from 'react-native-sk-toast';

class MoreCustomButton extends React.Component {
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
      <View style={styles.rootViewContainer}>
        <MoreCustomButton
          onPress={() => {ToastIOS.bottom('你点击了我了~好疼！')}}
          text="请点击我~"
        />
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});
