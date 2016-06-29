/**
 * Course 1
 * View
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight
 } from 'react-native';

 import Util from '../utils';

 export default class extends Component{
   constructor() {
     super();
   }

   render(){
     return(
       <View style={styles.first_view}>
         <View style={styles.second_view}>
         </View>
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   first_view:{
     top:70,
     flexDirection:'row',
     height:100,
     padding:20
   },
   second_view: {
     backgroundColor:'red',
     flex:1
   },
 });
