import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Coin from '../../data/crypto.json'
import CoinDetailsHeader from '../../components/CoinDetailsHeader/CoinDetailsHeadr';
import Chart from '../../components/Chart/Chart';

const {image : {small}, symbol, name, prices, market_data : {market_cap_rank, current_price, price_change_percentage_24h}} = Coin;

function CoinDetails() {
  return (
    <View>
      <CoinDetailsHeader image={small} symbol={symbol} name={name} market_cap_rank={market_cap_rank}/>
      <View style={{padding: 10}}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {current_price.usd}</Text>
          <View style={styles.percentageChange}>
            <AntDesign style={styles.changeIcon} name={price_change_percentage_24h > 0 ? "caretup" : "caretdown"} size={18} color="white" />
            <Text style={styles.text}>{Math.abs(Number(price_change_percentage_24h.toFixed(2)))} %</Text>
          </View>
        </View>
      </View>



      <Chart prices={prices} />
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize:18
    },
    priceContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    price:{
      color: "white",
      fontSize: 32,
      fontWeight: 'bold'
    },
    percentageChange:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 8,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: price_change_percentage_24h > 0 ? "rgb(23, 198, 132)" : "rgb(198, 130, 23)",
      borderRadius: 8
    },
    changeIcon:{
      marginRight: 5
    }
})

export default CoinDetails