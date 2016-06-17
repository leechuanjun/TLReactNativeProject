/**
 * Course 9
 * React Native控件之ListView组件讲解以及详细实例
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ScrollView,
   ListView,
   Image,
   TouchableOpacity,
   TouchableHighlight,
 } from 'react-native';

 import Util from '../utils';
 var THUMB_URLS = [
  require('../resource/img/course9/bee_00_coughing.png'),
  require('../resource/img/course9/bee_01_shower.png'),
  require('../resource/img/course9/bee_02_waiting.png'),
  require('../resource/img/course9/bee_03_freezing.png'),
  require('../resource/img/course9/bee_04_love.png'),
  require('../resource/img/course9/bee_05_cry.png'),
  require('../resource/img/course9/bee_06_showtime.png'),
  require('../resource/img/course9/bee_07_reading.png'),
  require('../resource/img/course9/bee_08_drinking.png'),
  require('../resource/img/course9/bee_09_sick.png'),
  require('../resource/img/course9/bee_10_working.png'),
  require('../resource/img/course9/bee_11_phone.png'),
  require('../resource/img/course9/bee_12_stop.png'),
];

 export default class extends Component{
   constructor() {
     super();
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
      //  dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10','row 11','row 12']),
         dataSource: ds.cloneWithRows(this._genRows({}))
     }
   }

  //  _renderRow(rowData: string, sectionID: number, rowID: number) {
  //   var imgSource = THUMB_URLS[rowID];
  //   return (
  //       <TouchableOpacity>
  //         <View style={styles.row}>
  //           <Image style={styles.thumb} source={imgSource} />
  //           <View style={{flexDirection: 'column'}}>
  //             <Text style={styles.itemTitle}>
  //               {rowData}
  //             </Text>
  //             <Text style={styles.itemContent}>
  //               {'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur.'}
  //             </Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //   );
  //  }

   _renderRow(rowData: string, sectionID: number, rowID: number) {
    var imgSource = THUMB_URLS[rowID];
    return (
      <TouchableHighlight underlayColor="red">
        <View>
          <View style={styles.row3}>
            <Image style={styles.thumb3} source={imgSource} />
            <Text style={styles.text3}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < THUMB_URLS.length; ii++) {
      dataBlob.push('单元格 ' + ii);
    }
    return dataBlob;
  }

   render(){
     return(
       <ScrollView style={styles.rootViewContainer}>
         {/*实例一*/}
         {/*<View style={styles.container}>
          <Text >
            TouchableHighlight实例
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>*/}

        {/*实例二*/}
        {/*<View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
          />
        </View>*/}

        {/*实例三*/}
        <View style={styles.container}>
          <ListView
            initialListSize={12}
            contentContainerStyle={styles.list3}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      </ScrollView>
     )
   }
 }

 const styles = StyleSheet.create({
   rootViewContainer:{
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#F5FCFF',
   },
   row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
    marginTop: 10,
    marginRight: 10,
  },
  itemTitle: {
    flex:1,
    fontSize:25,
    color:'blue'
  },
  itemContent: {
    flex:1,
    width: Util.size.width - 64 - 10 - 10,
    height: 60,
    fontSize:16,
    color:'gray'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  
  list3: {
    marginTop:5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row3: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 85,
    height: 85,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb3: {
    width: 45,
    height: 45
  },
  text3: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
 });
