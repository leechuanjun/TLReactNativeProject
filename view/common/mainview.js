/**
 * MainView
 * 主视图
 */
import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 Image,
 NavigatorIOS,
 TouchableHighlight,
 ScrollView,
 StatusBar,
} from 'react-native';

import Util from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Course1 from '../component/course1';
import Course2 from '../component/course2';
import Course3 from '../component/course3';
import Course4 from '../component/course4';
import Course5 from '../component/course5';
import Course6 from '../component/course6';
import Course7 from '../component/course7';
import Course8 from '../component/course8';
import Course9 from '../component/course9';
import Course10 from '../component/course10';
import Course11 from '../component/course11';
import Course12 from '../component/course12';
import Course13 from '../component/course13';
import Course14 from '../component/course14';
import Course15 from '../component/course15';
import Course16 from '../component/course16';
import Course17 from '../component/course17';
import Course18 from '../component/course18';
import Course19 from '../component/course19';
import Course20 from '../component/course20';
import Course21 from '../component/course21';
import Course22 from '../component/course22';
import Course23 from '../apimodule/course23';
import Course24 from '../apimodule/course24';
import Course25 from '../apimodule/course25';
import Course26 from '../apimodule/course26';
import Course27 from '../apimodule/course27';
import Course28 from '../apimodule/course28';
import Course29 from '../apimodule/course29';
import Course30 from '../apimodule/course30';
import Course31 from '../apimodule/course31';
import Course32 from '../apimodule/course32';
import Course33 from '../apimodule/course33';
import Course34 from '../apimodule/course34';
import Course35 from '../apimodule/course35';
import Course36 from '../advanced/course36';
import Course37 from '../advanced/course37';
import Course38 from '../advanced/course38';
import Course39 from '../advanced/course39';
import Course40 from '../advanced/course40';

export default class extends Component{
 constructor() {
   super();
   this.state = {
     courses_component:[
       { key:0, title: "View", component: Course1, isFA: false, icon: "ios-paper", size: 50, color: "#ff856c", hideNav: false, }
      ,{ key:1, title: "Text", component: Course2, isFA: false, icon: "ios-text", size: 50, color: "#90bdc1", hideNav: false, }
      ,{ key:2, title: "Image", component: Course3, isFA: false, icon: "ios-images", size: 50, color: "#2aa2ef", hideNav: false, }
      ,{ key:3, title: "InputText", component: Course4, isFA: false, icon: "ios-create", size: 50, color: "#FF9A05", hideNav: true, }
      ,{ key:4, title: "ProgressViewIOS", component: Course5, isFA: false, icon: "ios-fastforward", size: 50, color: "#00D204", hideNav: false, }
      ,{ key:5, title: "ScrollView", component: Course6, isFA: false, icon: "ios-sync", size: 50, color: "#777", hideNav: false, }
      ,{ key:6, title: "Switch&PickerIOS", component: Course7, isFA: false, icon: "ios-switch", size: 50, color: "#5e2a06", hideNav: false, }
      ,{ key:7, title: "Touchable*系列", component: Course8, isFA: false, icon: "ios-hand", size: 50, color: "#4285f4", hideNav: false, }
      ,{ key:8, title: "ListView", component: Course9, isFA: false, icon: "ios-list-box", size: 50, color: "#2aa2ef", hideNav: false, }
      ,{ key:9, title: "RefreshControl", component: Course10, isFA: false, icon: "ios-refresh-circle", size: 50, color: "#37465c", hideNav: false, }
      ,{ key:10, title: "WebView", component: Course11, isFA: false, icon: "logo-html5", size: 50, color: "#fd856c", hideNav: false, }
      ,{ key:11, title: "Navigator", component: Course12, isFA: false, icon: "ios-navigate", size: 50, color: "#fd8f9d", hideNav: false, }
      ,{ key:12, title: "Clipboard", component: Course13, isFA: false, icon: "ios-clipboard", size: 50, color: "#ff6b6b", hideNav: false, }
      ,{ key:13, title: "DatePickerIOS", component: Course14, isFA: false, icon: "ios-stopwatch", size: 50, color: "#ec240e", hideNav: false, }
      ,{ key:14, title: "StatusBar", component: Course15, isFA: false, icon: "ios-stats", size: 50, color: "#32A69B", hideNav: false, }
      ,{ key:15, title: "PickerIOS", component: Course16, isFA: false, icon: "ios-checkmark", size: 50, color: "#69B32A", hideNav: false, }
      ,{ key:16, title: "SegmentedControlIOS", component: Course17, isFA: false, icon: "ios-map", size: 50, color: "#fdbded", hideNav: false, }
      ,{ key:17, title: "SliderIOS", component: Course18, isFA: false, icon: "ios-options", size: 50, color: "#68d746", hideNav: false, }
      ,{ key:18, title: "TabBarIOS", component: Course19, isFA: false, icon: "ios-tablet-portrait", size: 50, color: "#fe952b", hideNav: false, }
      ,{ key:19, title: "ProgressViewIOS", component: Course20, isFA: false, icon: "ios-git-commit", size: 50, color: "#4285f4", hideNav: false, }
      ,{ key:20, title: "ActivityIndicatorIOS", component: Course21, isFA: false, icon: "ios-pricetag", size: 50, color: "#23bfe7", hideNav: false, }
      ,{ key:21, title: "Modal", component: Course22, isFA: false, icon: "logo-steam", size: 50, color: "#e32524", hideNav: false, }
    ],
    courses_api:[
     ,{ key:22, title: "Alert", component: Course23, isFA: false, icon: "ios-alert", size: 50, color: "#00ab6b", hideNav: false, }
     ,{ key:23, title: "AppState", component: Course24, isFA: false, icon: "ios-at", size: 50, color: "#893D54", hideNav: false, }
     ,{ key:24, title: "NetInfo", component: Course25, isFA: false, icon: "ios-planet", size: 50, color: "#248ef5", hideNav: false, }
     ,{ key:25, title: "AsyncStorage", component: Course26, isFA: false, icon: "ios-appstore", size: 50, color: "#f5248e", hideNav: false, }
     ,{ key:26, title: "Dimensions", component: Course27, isFA: false, icon: "ios-expand", size: 50, color: "#48f52e", hideNav: false, }
     ,{ key:27, title: "StyleSheet", component: Course28, isFA: false, icon: "ios-aperture", size: 50, color: "#f27405", hideNav: false, }
     ,{ key:28, title: "PixelRatio", component: Course29, isFA: false, icon: "ios-code-working", size: 50, color: "#f2d405", hideNav: false, }
     ,{ key:29, title: "AlertIOS", component: Course30, isFA: false, icon: "ios-alert-outline", size: 50, color: "#f21105", hideNav: false, }
     ,{ key:30, title: "AppStateIOS", component: Course31, isFA: false, icon: "ios-at-outline", size: 50, color: "#f22205", hideNav: false, }
     ,{ key:31, title: "ActionSheetIOS", component: Course32, isFA: false, icon: "ios-analytics", size: 50, color: "#f23305", hideNav: false, }
     ,{ key:32, title: "Vibration", component: Course33, isFA: false, icon: "ios-archive-outline", size: 50, color: "#f24405", hideNav: false, }
     ,{ key:33, title: "Linking", component: Course34, isFA: false, icon: "logo-designernews", size: 50, color: "#f25505", hideNav: false, }
     ,{ key:34, title: "LayoutAnimation", component: Course35, isFA: false, icon: "ios-beer-outline", size: 50, color: "#f26605", hideNav: false, }
   ],
   courses_advanced:[
    ,{ key:35, title: "LayoutAnimation_Extension", component: Course36, isFA: false, icon: "ios-beer", size: 50, color: "#55ab6b", hideNav: false, }
    ,{ key:36, title: "MoreCustomButton", component: Course37, isFA: false, icon: "ios-radio-button-on", size: 50, color: "#88ab6b", hideNav: false, }
    ,{ key:37, title: "原生模块封装基础篇", component: Course38, isFA: false, icon: "ios-star", size: 50, color: "#ffab6b", hideNav: false, }
    ,{ key:38, title: "原生模块封装特性篇", component: Course39, isFA: false, icon: "ios-star-half", size: 50, color: "#eeab6b", hideNav: false, }
    ,{ key:39, title: "原生混合与数据通信开发", component: Course40, isFA: false, icon: "ios-star-outline", size: 50, color: "#ddab6b", hideNav: false, }
   ]
   }
 }

 componentWillMount() {
 }

 _jumpToCourses_component(index){
   this.props.navigator.push({
     title: this.state.courses_component[index].title,
     component: this.state.courses_component[index].component,
     navigationBarHidden: this.state.courses_component[index].hideNav,
   })
 }

 _jumpToCourses_api(index){
   this.props.navigator.push({
     title: this.state.courses_api[index].title,
     component: this.state.courses_api[index].component,
     navigationBarHidden: this.state.courses_api[index].hideNav,
   })
 }

 _jumpToCourses_advanced(index){
   this.props.navigator.push({
     title: this.state.courses_advanced[index].title,
     component: this.state.courses_advanced[index].component,
     navigationBarHidden: this.state.courses_advanced[index].hideNav,
   })
 }

 render() {
   var onThis = this;
   var boxs_component = this.state.courses_component.map(function(elem, index) {
     return(
       <TouchableHighlight key={elem.key} style={[styles.touchBox, index%4==3?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToCourses_component(index)}>
         <View style={styles.boxContainer}>
           <Text style={styles.boxText}>Course{index+1}</Text>
           {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
         </View>
       </TouchableHighlight>
     );
   })
   var boxs_api = this.state.courses_api.map(function(elem, index) {
     return(
       <TouchableHighlight key={elem.key} style={[styles.touchBox, index%4==0?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToCourses_api(index)}>
         <View style={styles.boxContainer}>
           <Text style={styles.boxText}>Course{index+22}</Text>
           {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
         </View>
       </TouchableHighlight>
     );
   })
   var boxs_advanced = this.state.courses_advanced.map(function(elem, index) {
     return(
       <TouchableHighlight key={elem.key} style={[styles.touchBox, index%4==0?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToCourses_advanced(index)}>
         <View style={styles.boxContainer}>
           <Text style={styles.boxText}>Course{index+35}</Text>
           {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
         </View>
       </TouchableHighlight>
     );
   })
   return(
     <ScrollView>
       <Swiper height={150} showsButtons={false} autoplay={true}
         activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses_component(0)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course1'}}></Image>
             <Text style={styles.slideText}>Course1: View</Text>
           </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses_component(1)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course2'}}></Image>
             <Text style={styles.slideText}>Course2: Text</Text>
           </View>
         </TouchableHighlight>
       </Swiper>
       <View style={styles.titleView}>
         <Text style={styles.titleDesc}>一、组件学习</Text>
       </View>
       <View style={styles.touchBoxContainer}>
         {boxs_component}
       </View>
       <View style={styles.titleView}>
         <Text style={styles.titleDesc}>二、API模块学习</Text>
       </View>
       <View style={styles.touchBoxContainer}>
         {boxs_api}
       </View>
       <View style={styles.titleView}>
         <Text style={styles.titleDesc}>三、进阶学习</Text>
       </View>
       <View style={styles.touchBoxContainer}>
         {boxs_advanced}
       </View>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 touchBox:{
   width: Util.size.width/4-0.33334,//Util.size.width/3-0.33334,
   height:Util.size.width/4-0.25,
   backgroundColor:"#fff",
 },
 touchBoxContainer:{
   flexDirection: "row",
   flexWrap:"wrap",
   width: Util.size.width,
   borderTopWidth: Util.pixel,
   borderTopColor:"#ccc",
   borderLeftWidth: Util.pixel,
   borderLeftColor:"#ccc",
   borderRightWidth: Util.pixel,
   borderRightColor:"#ccc",
 },
 touchBox1:{
   borderBottomWidth: Util.pixel,
   borderBottomColor:"#ccc",
   borderRightWidth: Util.pixel,
   borderRightColor:"#ccc",
 },
 touchBox2:{
   borderBottomWidth: Util.pixel,
   borderBottomColor:"#ccc",
   borderLeftWidth: Util.pixel,
   borderLeftColor:"#ccc",
 },
 boxContainer:{
   alignItems:"center",
   justifyContent:"center",
   width: Util.size.width/4,
   height:Util.size.width/4,
 },
 boxIcon:{
   position:"relative",
   top:-10
 },
 boxText:{
   position:"absolute",
   bottom:10,
   width:Util.size.width/4,
   textAlign:"center",
   left: 0,
   backgroundColor:"transparent"
 },
 slide: {
   flex: 1,
   height: 150,
   justifyContent: 'center',
   alignItems: 'center',
 },
 slideText:{
   position:"absolute",
   bottom: 0,
   paddingTop:5,
   paddingBottom:5,
   backgroundColor:"rgba(255,255,255,0.5)",
   width: Util.size.width,
   textAlign:"center",
   fontSize: 12
 },
 image:{
   width: Util.size.width,
   flex: 1,
   alignSelf: 'stretch',
 },
 titleDesc: {
   fontSize: 20,
   textAlign: 'left',
   margin: 20,
   color:'#fff',
   alignSelf:'center'
 },
 titleView: {
   height:45,
   backgroundColor:'#a5b5c5',
   justifyContent:'center',
 },
});
