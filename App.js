import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import  Videoplayer from './Components/Videoplayer';
export default class App extends React.Component<{}> {

  render() {

    return (
    <Videoplayer/>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
