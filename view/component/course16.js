/**
 * Course 16
 * React Native控件之PickerIOS选择器详解-适配iOS开发
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PickerIOS,
} from 'react-native';

import Util from '../utils';

var PickerItemIOS = PickerIOS.Item;
var COURSE_ITEMS = ['C++','Java','Android','iOS','React Native','Swift','.Net'];

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
        selectedCourse:'Java',
        selectedIndex:1,
    };
  }

  render() {
    return (
      <View style={styles.rootViewContainer}>
        <Text style={styles.title}>
           PickerIOS使用实例
        </Text>
        <PickerIOS
          itemStyle={{fontSize: 25, color: 'red', textAlign: 'center', fontWeight: 'bold'}}
          selectedValue={this.state.selectedCourse}
          onValueChange={(selectedCourse,selectedIndex) => this.setState({selectedCourse, selectedIndex})}>
          {Object.keys(COURSE_ITEMS).map((selectedCourse) => (
            <PickerItemIOS
              key={selectedCourse}
              value={selectedCourse}
              label={COURSE_ITEMS[selectedCourse]}
              />
            )
          )}

          {/*onValueChange={(selectedCourse,selectedIndex)=> this.setState({selectedCourse,selectedIndex})}>
          <PickerItemIOS
            key='0'
            value={COURSE_ITEMS[0]}
            label={COURSE_ITEMS[0]}
          />
          <PickerItemIOS
            key='1'
            value={COURSE_ITEMS[1]}
            label={COURSE_ITEMS[1]}
          />
          <PickerItemIOS
            key='2'
            value={COURSE_ITEMS[2]}
            label={COURSE_ITEMS[2]}
          />
           <PickerItemIOS
            key='3'
            value={COURSE_ITEMS[3]}
            label={COURSE_ITEMS[3]}
          />
           <PickerItemIOS
            key='4'
            value={COURSE_ITEMS[4]}
            label={COURSE_ITEMS[4]}
          />
          <PickerItemIOS
            key='5'
            value={COURSE_ITEMS[5]}
            label={COURSE_ITEMS[5]}
          />
          <PickerItemIOS
            key='6'
            value={COURSE_ITEMS[6]}
            label={COURSE_ITEMS[6]}
          />*/}
        </PickerIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
