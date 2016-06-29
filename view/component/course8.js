/**
 * Course 8
 * React Native控件之Touchable*系列组件详解
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ScrollView,
   TouchableHighlight,
   TouchableOpacity,
 } from 'react-native';

 import Util from '../utils';

 export default class extends Component{
   constructor() {
     super();
     this.state = {
       eventLog: [],
     }
   }

   _appendEvent(eventName) {
    var limit = 6;
    var eventLog = this.state.eventLog.slice(0, limit - 1);
    eventLog.unshift(eventName);
    this.setState({eventLog});
  }

   render(){
     return(
       <ScrollView style={styles.rootViewContainer}>
         <View style={styles.container}>
          <Text >
            TouchableHighlight实例
          </Text>
          <TouchableHighlight
            underlayColor="rgb(210, 230, 255)"
            activeOpacity={0.5}
            style={{ borderRadius: 8,padding: 6,marginTop:5}}
            >
               <Text style={{fontSize:16, marginTop:20}}>点击我</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.container}>
          <Text>
             TouchableOpacity实例
          </Text>
          <TouchableOpacity style={{marginTop:20,padding:6}}>
             <Text style={{fontSize:16, marginTop:10}}>点击改变透明度</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text>
             onPress,onPressIn,onPressOut,onLongPress实例
          </Text>
          <View style={[styles.row, {justifyContent: 'center'}]}>
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => this._appendEvent('press')}
              onPressIn={() => this._appendEvent('pressIn')}
              onPressOut={() => this._appendEvent('pressOut')}
              onLongPress={() => this._appendEvent('longPress')}>
              <Text style={styles.button}>
                Press Me
              </Text>
            </TouchableOpacity>
          </View>
          <View  style={styles.eventLogBox}>
            {this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}
          </View>
        </View>

      </ScrollView>
     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
    //  marginTop: 70,
   },
   container: {
     flex: 1,
     marginTop: 20,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   button: {
    color: '#007AFF',
  },
  wrapper: {
    borderRadius: 8,
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
 });
