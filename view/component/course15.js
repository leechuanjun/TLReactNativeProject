/**
 * Course 15
 * React Native控件之StatusBar状态栏详解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import Util from '../utils';

const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
];

const barStyles = [
  'default',
  'light-content',
];

const showHideTransitions = [
  'fade',
  'slide',
];

export default class extends Component{
  constructor() {
    super();
    this.state = {
      animated: true,
      backgroundColor: this._getValue(colors, 0),
      showHideTransition: this._getValue(showHideTransitions, 0),
      hidden: false,
      showHideTransition: 'fade',
      translucent: true,
      barStyle: 'default',
      networkActivityIndicatorVisible: false,
      _colorIndex: 0,
      _barStyleIndex: 0,
      _showHideTransitionIndex: 0,
    };
  }



  _getValue(values: Array<any>, index: number): any {
    return values[index % values.length];
  }

  render() {
    return (
      <View style={styles.rootViewContainer}>
        <StatusBar
          backgroundColor={this.state.backgroundColor}
          translucent={this.state.translucent}
          hidden={this.state.hidden}
          showHideTransition={this.state.showHideTransition}
          animated={this.state.animated}
          barStyle={this.state.barStyle}
          networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
        />
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => this.setState({animated: !this.state.animated})}>
            <View style={styles.button}>
              <Text>animated: {this.state.animated ? 'true' : 'false'}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => this.setState({hidden: !this.state.hidden})}>
            <View style={styles.button}>
              <Text>hidden: {this.state.hidden ? 'true' : 'false'}</Text>
            </View>
          </TouchableHighlight>
        </View>


        <Text style={styles.title}>iOS</Text>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => {
              this.state._barStyleIndex++;
              this.setState({barStyle: this._getValue(barStyles, this.state._barStyleIndex)});
            }}>
            <View style={styles.button}>
              <Text>style: '{this._getValue(barStyles, this.state._barStyleIndex)}'</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => this.setState({
              networkActivityIndicatorVisible: !this.state.networkActivityIndicatorVisible,
            })}>
            <View style={styles.button}>
              <Text>
                networkActivityIndicatorVisible:
                {this.state.networkActivityIndicatorVisible ? 'true' : 'false'}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => {
              this.state._showHideTransitionIndex++;
              this.setState({
                showHideTransition:
                this._getValue(showHideTransitions, this.state._showHideTransitionIndex),
              });
            }}>
            <View style={styles.button}>
              <Text>
                showHideTransition:
                '{this._getValue(showHideTransitions, this.state._showHideTransitionIndex)}'
              </Text>
            </View>
          </TouchableHighlight>
        </View>


        <Text style={styles.title}>Android</Text>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => {
              this.state._colorIndex++;
              this.setState({backgroundColor: this._getValue(colors, this.state._colorIndex)});
            }}>
            <View style={styles.button}>
              <Text>backgroundColor: '{this._getValue(colors, this.state._colorIndex)}'</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.wrapper}
            onPress={() => {
              this.setState({
                translucent: !this.state.translucent,
                backgroundColor: !this.state.translucent ? 'rgba(0, 0, 0, 0.4)' : 'black',
              });
            }}>
            <View style={styles.button}>
              <Text>translucent: {this.state.translucent ? 'true' : 'false'}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  }
});


//简单封装一个按钮组件
// class CustomButton extends React.Component {
//   render() {
//     return (
//       <TouchableHighlight
//         style={styles.button}
//         underlayColor="#a5a5a5"
//         onPress={this.props.onPress}>
//         <Text style={styles.buttonText}>{this.props.text}</Text>
//       </TouchableHighlight>
//     );
//   }
// }
//
// export default class extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//     };
//   }
//
//   render() {
//     return (
//       <View style={styles.rootViewContainer}>
//         <StatusBar
//           backgroundColor='#ff0000'
//           translucent={true}
//           hidden={true}
//           animated={true}
//         />
//         <CustomButton text='状态栏隐藏透明效果'/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   rootViewContainer:{
//     marginTop: 70,
//   },
//   button: {
//     margin:5,
//     backgroundColor: 'white',
//     padding: 15,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderBottomColor: '#cdcdcd',
//   }
// });
