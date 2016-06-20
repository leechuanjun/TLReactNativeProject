/**
 * Course 9
 * React Native控件之RefreshControl组件详解
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ScrollView,
   RefreshControl,
   TouchableWithoutFeedback,
 } from 'react-native';

 import Util from '../utils';

 class Row extends Component {
    _onClick() {
      this.props.onClick(this.props.data);
    }

    render() {
      return (
        <TouchableWithoutFeedback onPress={this._onClick} >
          <View style={styles.row}>
            <Text style={styles.text}>
              {/*{this.props.data.text}*/}
              {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

 export default class extends Component{
   statics: {
      title: '<RefreshControl>',
      description: 'Adds pull-to-refresh support to a scrollview.'
   }

   constructor() {
     super();
     this.state = {
       isRefreshing: false,
       loaded: 0,
       rowData: Array.from(new Array(20)).map((val, i) => ({text: '初始行 ' + i, clicks: 0})),
     };
   }

   _onClick(row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }

   _onRefresh() {
      this.setState({
        isRefreshing: true,
      });

      setTimeout(() => {
        // 准备下拉刷新的5条数据
        const rowData = Array.from(new Array(5))
        .map((val, i) => ({
          text: '刷新行 ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

        this.setState({
          loaded: this.state.loaded + 5,
          isRefreshing: false,
          rowData: rowData,
        });
      }, 5000);
   }

   render(){
     const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick}/>;
     });

     return(
      <ScrollView style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
            progressBackgroundColor="#ffffff"
          />
        }>
        {rows}
      </ScrollView>
     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
   },
   row: {
    borderColor: 'red',
    borderWidth: 5,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
 });
