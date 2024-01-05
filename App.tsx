import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 10
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: "white"
  },
  desc:{
    fontSize: 14,
    color: 'rgb(160,165,185)',
    marginRight: 4
  },
  symbolCover:{
    backgroundColor: 'white',
    height:35,
    width:35,
    borderRadius: 30,
    marginRight: 10
  },
  coinItem:{
    borderBottomWidth: 0.3,
    borderColor: '#282828',
    paddingVertical: 15
  },
  coinName:{
    marginRight:8
  },
  flexColumn:{
    flexDirection: 'column'
  },
  flexRow:{
    flexDirection: 'row',
  },
  alignCenter:{
    alignItems: 'center'
  },
  justifyBetween:{
    justifyContent: 'space-between'
  },
  position:{
    color: 'white',
    backgroundColor: 'rgb(50,53,68)',
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5
  },
  up:{
    fontSize: 14,
    color:'rgb(23, 223, 148)',
    marginRight: 4
  }
});
