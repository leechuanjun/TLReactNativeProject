/**
 * Course 22
 * React Native 控件之Modal详解-Android/iOS双平台通用
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Switch,
} from 'react-native';

import Util from '../utils';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state={
      active: false,
    };
    this._onHighlight = this.onHighlight.bind(this);
    this._onUnhighlight = this.onUnhighlight.bind(this);
  }

  onHighlight() {
    this.setState({active: true,});
  }

  onUnhighlight() {
    this.setState({active: false,});
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

// animationType enum('none', 'slide', 'fade');

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      animationType: 'none',
      modalVisible: false,
      transparent: false,
    };
    this._toggleTransparent = this.toggleTransparent.bind(this);
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _setAnimationType(type) {
    this.setState({animationType: type});
  }

  toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  }

  render() {
     const modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
     }
     const innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: 'red', padding: 20}
      : null

   return (
      <View style={{paddingTop:70,paddingLeft:10,paddingRight:10}}>
        <Text style={{color:'red'}}>Modal实例演示</Text>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>Modal视图被显示:{this.state.animationType}动画效果.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                  关闭Modal
              </Button>
            </View>
          </View>
        </Modal>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>动画类型</Text>
          <Button onPress={this._setAnimationType.bind(this,'none')} style={this.state.animationType === 'none' ? {backgroundColor:'red'}: {}}>
            无动画
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? {backgroundColor:'yellow'} : {}}>
            slide效果
          </Button>
          <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? {backgroundColor:'blue'} : {}}>
            fade效果
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>透明</Text>
          <Switch value={this.state.transparent} onValueChange={this._toggleTransparent} />
        </View>

        <Button onPress={this._setModalVisible.bind(this, true)}>
            显示Modal
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});
