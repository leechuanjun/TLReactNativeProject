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

export default class extends Component{
 constructor() {
   super();
   this.state = {
     courses:[
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
    ]
   }
 }

 componentWillMount() {
 }

 _jumpToCourses(index){
   this.props.navigator.push({
     title: this.state.courses[index].title,
     component: this.state.courses[index].component,
     navigationBarHidden: this.state.courses[index].hideNav,
   })
 }

 render() {
   var onThis = this;
   var boxs = this.state.courses.map(function(elem, index) {
     return(
       <TouchableHighlight key={elem.key} style={[styles.touchBox, index%4==3?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToCourses(index)}>
         <View style={styles.boxContainer}>
           <Text style={styles.boxText}>Course{index+1}</Text>
           {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
         </View>
       </TouchableHighlight>
     );
   })
   return(
     <ScrollView>
       <Swiper height={150} showsButtons={false} autoplay={true}
         activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses(0)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course1'}}></Image>
             <Text style={styles.slideText}>Course1: View</Text>
           </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses(1)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course2'}}></Image>
             <Text style={styles.slideText}>Course2: Text</Text>
           </View>
         </TouchableHighlight>
       </Swiper>
       <View style={styles.touchBoxContainer}>
         {boxs}
       </View>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 touchBox:{
   width: Util.size.width/4-0.33334,//Util.size.width/3-0.33334,
   height:Util.size.width/4-0.2,
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
});
