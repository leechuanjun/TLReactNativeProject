/**
 * Course 7
 * React Native控件之Switch与Picker组件讲解以及使用
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Switch,
   PickerIOS,
   ScrollView
 } from 'react-native';

 import Util from '../utils';

 var CAR_MAKES_AND_MODELS = {
   amc: {
     name: 'AMC',
     models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
   },
   alfa: {
     name: 'Alfa-Romeo',
     models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
   },
   aston: {
     name: 'Aston Martin',
     models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
   },
   audi: {
     name: 'Audi',
     models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
   },
   austin: {
     name: 'Austin',
     models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
   },
   borgward: {
     name: 'Borgward',
     models: ['Hansa', 'Isabella', 'P100'],
   },
   buick: {
     name: 'Buick',
     models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
              'Roadmaster', 'Skylark'],
   },
   cadillac: {
     name: 'Cadillac',
     models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
   },
   chevrolet: {
     name: 'Chevrolet',
     models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
              'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
   },
 };

 export default class extends Component{
   constructor() {
     super();
     this.state = {
       trueSwitchIsOn: true,
       falseSwitchIsOn: false,
      //  language:'java',
       carMake: 'cadillac',
       modelIndex: 3,
     }
   }

   render(){
     var make = CAR_MAKES_AND_MODELS[this.state.carMake];
     var selectionString = make.name + ' ' + make.models[this.state.modelIndex];

     return(
       <ScrollView>
       <View style={styles.rootViewContainer}>
         <View style={styles.containerSwitch}>
          <Text>
             Swtich实例
          </Text>
          <Switch
            disabled={true}
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom:10,marginTop:10}}
            value={this.state.falseSwitchIsOn} />
            <Text>当前选择状态是:{this.state.falseSwitchIsOn===true?'开':'关'}</Text>
          <Switch
            disabled={false}
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
            <Text>当前选择状态是:{this.state.trueSwitchIsOn===true?'开':'关'}</Text>
         </View>

         {/*<View style={styles.containerPickerIOS}>
           <Text >
             PickerIOS选择器实例一
           </Text>
           <PickerIOS
             style={{width:200}}
             selectedValue={this.state.language}
             onValueChange={(value) => this.setState({language: value})}>
             <PickerIOS.Item label="Java" value="java" />
             <PickerIOS.Item label="JavaScript" value="javaScript" />
           </PickerIOS>
           <Text>当前选择的是:{this.state.language}</Text>
         </View>*/}

         <View style={styles.containerPickerIOS}>
           <Text >Picker选择器实例二</Text>
           <Text>Please choose a make for your car:</Text>
           <PickerIOS
             style={{width:100}}
             selectedValue={this.state.carMake}
             onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
             {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
               <PickerIOS.Item
                 key={carMake}
                 value={carMake}
                 label={CAR_MAKES_AND_MODELS[carMake].name}
                 />
               )
             )}
           </PickerIOS>
           <Text>Please choose a model of {make.name}:</Text>
           <PickerIOS
             style={{width:100}}
             selectedValue={this.state.modelIndex}
             key={this.state.carMake}
             onValueChange={(modelIndex) => this.setState({modelIndex})}>
             {CAR_MAKES_AND_MODELS[this.state.carMake].models.map(
               (modelName, modelIndex) => (
                 <PickerIOS.Item
                   key={this.state.carmake + '_' + modelIndex}
                   value={modelIndex}
                   label={modelName}
                 />
               )
             )}
           </PickerIOS>
          </View>
       </View>
       </ScrollView>
     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
    //  marginTop: 70,
    //  marginLeft:5,
    //  marginRight:5
   },
   containerSwitch: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
  },
   containerPickerIOS: {
    flex: 1,
    marginTop:30,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 });
