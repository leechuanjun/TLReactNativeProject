/**
 * Course 5
 * React Native控件之ProgressBarAndroid进度条讲解
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   ProgressViewIOS
 } from 'react-native';

 import Util from '../utils';

 class ProgressViewExample extends Component{

  constructor() {
    super()
    this.state = {
      progress: 0,
    }
  }

  componentDidMount() {
    this.updateProgress();
  }

  updateProgress() {
    var progress = this.state.progress + 0.01;
    this.setState({ progress });
  }

  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" trackTintColor="green" progress={this.getProgress(0.2)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>
      </View>
    );
  }
};

 export default class extends Component{
   constructor() {
     super();
   }

   render(){
     return(
       <View style={styles.rootViewContainer}>
        <Text style={styles.titleText}>
            ProgressBarAndroid控件实例
        </Text>
        <ProgressViewExample/>
      </View>

     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
     marginTop: 70,
     marginLeft:5,
     marginRight:5
   },
   titleText:{
     alignSelf:'center',
   },
   container: {
    marginTop: 30,
    backgroundColor: 'transparent',
    marginLeft:20,
    marginRight:20
  },
  progressView: {
    marginTop: 30,
  }
 });
