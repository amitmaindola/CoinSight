import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function CoinListItem() {
  return (
    <View style={[styles.coinItem, styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
        <View style={[styles.justifyBetween, styles.flexRow, styles.alignCenter]}>
          <View style={styles.symbolCover}>
            <Image source={{uri:'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'}} style={{width:'100%', height:'100%'}}/>
          </View>
          <View style={styles.flexColumn}>
            <Text style={styles.title}>Bitcoin</Text>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Text style={[styles.desc, styles.position]}>1</Text>
              <Text style={[styles.desc, styles.coinName]}>Bitcoin</Text>
              <AntDesign name="caretdown" style={styles.up} size={24}  />
              <Text style={styles.desc}>1.02 %</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexColumn}>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={[styles.desc, styles.position]}>1</Text>
            <Text style={styles.desc}>Bitcoin</Text>
            <Text style={styles.desc}>1.02 %</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
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
      paddingVertical: 15,
      paddingHorizontal: 10
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

export default CoinListItem
