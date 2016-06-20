/**
 * Course
 * React Native控件之WebView组件详解以及实例使用
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  TabBarIOS,
} from 'react-native';

import Util from '../utils';
import Course11_HTML from './course11_html';
import Course11_URL from './course11_url';

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
       selectedTab: 'url',
       notifCount: 0,
       presses: 0,
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.welcome}>
          TabBarIOS使用实例
        </Text>
        <TabBarIOS
          style={{flex:1,alignItems:"flex-end"}}
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="url"
            icon={require('../resource/img/course11/dribbble.png')}
            selected={this.state.selectedTab === 'url'}
            onPress={() => {
              this.setState({
                selectedTab: 'url',
              });
            }}
            >
            <Course11_HTML/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="html"
            icon={require('../resource/img/course11/dropbox.png')}
            selected={this.state.selectedTab === 'html'}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            onPress={() => {
              this.setState({
                selectedTab: 'html',
                notifCount: this.state.notifCount + 1,
              });
            }}
            >
            <Course11_URL/>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
