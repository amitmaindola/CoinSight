import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CryptoCurrencyItem from '../../types/CryptoCurrency';

function formatNumber(value:number) {
  if (value >= 1000000000000) {
    return (value / 1000000000000).toFixed(2) + ' T';
  } else if (value >= 1000000000) {
      return (value / 1000000000).toFixed(2) + ' Bn';
  } else if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + ' Mn';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(2) + ' K';
  } else {
      return value.toString();
  }
}

interface CoinListItemProps {
  coinData: CryptoCurrencyItem;
}



function CoinListItem({coinData}:CoinListItemProps) {
  return (
    <View style={[styles.coinItem, styles.flexRow, styles.alignCenter, styles.justifyBetween]}>
        <View style={[styles.justifyBetween, styles.flexRow, styles.alignCenter]}>
          <View style={styles.symbolCover}>
            <Image source={{uri:coinData.image}} style={{width:'100%', height:'100%', borderRadius: 100}}/>
          </View>
          <View style={styles.flexColumn}>
            <Text style={styles.title}>{coinData.name}</Text>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Text style={[styles.desc, styles.position]}>{coinData.market_cap_rank}</Text>
              <Text style={[styles.desc, styles.coinName]}>{coinData.symbol.toUpperCase()}</Text>
              {coinData.price_change_percentage_24h && (coinData.price_change_percentage_24h < 0 ? <AntDesign name="caretdown" style={styles.down} size={24}  /> : <AntDesign name="caretup" style={styles.up} size={24}  />)}
              {coinData.price_change_percentage_24h && <Text style={styles.desc}>{Math.abs(Number(coinData.price_change_percentage_24h.toFixed(2)))} %</Text>}
            </View>
          </View>
        </View>
        <View style={[styles.flexColumn, {alignItems: 'flex-end'}]}>
          <Text style={styles.title}>{coinData.current_price}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.desc}>MCap {formatNumber(coinData.market_cap)} Bn</Text>
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
    },
    down:{
      fontSize: 14,
      color:'rgb(223, 100,100)',
      marginRight: 4
    }
});

export default CoinListItem
