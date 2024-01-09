import { Image, StatusBar,StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import CoinDetails from './src/screens/CoinDetails';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Home /> */}
        <CoinDetails />
        <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    // paddingHorizontal: 15
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
