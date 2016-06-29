/**
 * Course 2
 * 进行简单Text组件使用实例
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
       <View style={styles.rootViewContainer}>
         <Text style={{color:'red'}}>
            My Text One  红色。
         </Text>
         <Text style={{color:'green',fontSize:20}}> My Text Two 绿色和字体大小。</Text>
         <Text style={{color:'green',fontFamily:'Cochin'}}> My Text Three 绿色和字体名称。</Text>
         <Text style={{color:'pink',fontWeight:'bold'}}> My Text Four 粉色和加粗。</Text>
         <Text style={{color:'gray',fontStyle:'italic'}}> My Text Five 灰色和斜体。</Text>
         <Text style={{textAlign:'center',fontStyle:'italic'}}> My Text Six 居中和斜体。</Text>
         <Text numberOfLines={1} style={{textAlign:'center',fontStyle:'italic'}}>测试行数My Text Six 居中和斜体。My Text Six 居中和斜体。 My Text Six 居中和斜体。</Text>
         <Text style={{marginLeft:50,marginTop:50,textAlign:'center',fontStyle:'italic'}}>设置文本的间距,居左，居顶部50</Text>
         <Text numberOfLines={2} style={{lineHeight:50,textAlign:'center',fontStyle:'italic'}}>
            测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
            测试行高 测试行高 测试行高 测试行高 测试行高 测试行高
         </Text>
      </View>
     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
     marginTop: 70,
    //  alignItems: "center",
   },
 });
