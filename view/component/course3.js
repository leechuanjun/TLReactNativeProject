/**
 * Course 3
 * React Native控件之Image组件讲解与美团首页顶部效果实例
 * 模仿美团首页顶部分类效果
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableHighlight
 } from 'react-native';

 import Util from '../utils';
 import Icon from 'react-native-vector-icons/Ionicons';

 export default class extends Component{
   constructor() {
     super();
   }

   render(){
     var onThat = this;
     return(
       <View style={styles.rootViewContainer}>

         <View style={{flexDirection:'row'}}>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/one.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>美食</Text>
             </View>
              <View style={styles.item}>
                 <Image source={require('../resource/img/course3/two.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>电影</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/three.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>酒店</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/four.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>KTV</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/five.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>外卖</Text>
             </View>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/six.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>优惠买单</Text>
             </View>
              <View style={styles.item}>
                 <Image source={require('../resource/img/course3/seven.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>周边游</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/eight.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>休闲娱乐</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/nine.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>今日新单</Text>
             </View>
             <View style={styles.item}>
                 <Image source={require('../resource/img/course3/ten.png')} style={styles.itemImage} />
                 <Text style={styles.itemText}>丽人</Text>
             </View>
          </View>
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
   item:{
     width:70
   },
   itemImage:{
     alignSelf:'center',
     width:45,
     height:45
   },
   itemText:{
     marginTop:5,
     alignSelf:'center',
     fontSize:11,
     color:'#555555',
     textAlign:'center'
   }
 });
