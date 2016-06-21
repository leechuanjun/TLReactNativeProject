/**
 * Course 14
 * React Native控件之DatePickerIOS时间日期选择器组件讲解
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  DatePickerIOS,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Util from '../utils';

class WithLabel extends Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

export default class extends Component{
  static defaultProps = {//设置默认属性
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  static propTypes = {//属性校验器
    date: React.PropTypes.Date,
    timeZoneOffsetInHours:React.PropTypes.number,
  };

  constructor(props){
    super(props);
    this.state = {
      date: this.props.date,
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    };
  }

  _onDateChange(date) {
    this.setState({date: date});
  }

  _onTimezoneChange(event) {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  }

  render() {
    return (
      <ScrollView style={styles.rootViewContainer}>
        <WithLabel label="Value:">
          <Text>{
            this.state.date.toLocaleDateString() +
            ' ' +
            this.state.date.toLocaleTimeString()
          }</Text>
        </WithLabel>
        <WithLabel label="Timezone:">
          <TextInput
            onChange={this._onTimezoneChange.bind(this)}
            style={styles.textinput}
            value={this.state.timeZoneOffsetInHours.toString()}
          />
          <Text> hours from UTC</Text>
        </WithLabel>
        <Heading label="Date + time picker" />
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this._onDateChange.bind(this)}
        />
        <Heading label="Date picker" />
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this._onDateChange.bind(this)}
        />
        <Heading label="Time picker, 10-minute interval" />
        <DatePickerIOS
          date={this.state.date}
          mode="time"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this._onDateChange.bind(this)}
          minuteInterval={10}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    // marginTop: 70,
  },
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  },
});
