import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Coin from '../../data/crypto.json'
import CoinDetailsHeader from '../../components/CoinDetailsHeader/CoinDetailsHeadr';
import Chart from '../../components/Chart/Chart';
import { ChartDataFromAPI, TimeDuration } from '../../types';
import { getCoinMarketChart, getDetailedCoinData } from '../../services/requests';
import styles from './styles';
import Loader from '../../components/Loader/Loader';

const {image : {small}, symbol, name, market_data : {market_cap_rank, current_price, price_change_percentage_24h}} = Coin;

const getDuration = (hours:number):TimeDuration => {
  const currentTime:number = new Date().getTime();
  const prevtime:number = currentTime - hours * 60 * 60 * 1000;
  const duration:TimeDuration = {
    from: Math.floor(prevtime/1000), to: Math.floor(currentTime/1000)
  }

  return duration;
}

const fetchChartData = async (setPriceArray:Function, duration: TimeDuration):Promise<void> =>{
  setPriceArray(await getCoinMarketChart('bitcoin', duration))
  // console.log(getDuration(24))
}

const fetchCoinData = async():Promise<void> => {

}

function CoinDetails() {

  const [priceArray, setPriceArray ] = useState<ChartDataFromAPI>({prices: [], market_caps:[], total_volumes:[]})
  const [duration, setDuration] = useState<TimeDuration>(
    getDuration(24)
  )
  const [CoinDetails, setCoinDetails] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    fetchChartData(setPriceArray, duration)
  }, [duration])

  // useEffect(()=>{
  //   if(isLoading) setPriceArray({prices: [], market_caps:[], total_volumes:[]})
  // }, [isLoading])

  useEffect(()=>{
    console.log("Array Length: ", priceArray.prices.length)
    setIsLoading(false);
  }, [priceArray])

  return (
    <View>
      <CoinDetailsHeader image={small} symbol={symbol} name={name} market_cap_rank={market_cap_rank}/>
      <View style={{padding: 10}}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {current_price.usd}</Text>
          <View style={[styles.percentageChange, {backgroundColor: price_change_percentage_24h > 0 ? "rgb(23, 198, 132)" : "rgb(198, 130, 23)"}]}>
            <AntDesign style={styles.changeIcon} name={price_change_percentage_24h > 0 ? "caretup" : "caretdown"} size={18} color="white" />
            <Text style={styles.text}>{Math.abs(Number(price_change_percentage_24h.toFixed(2)))} %</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button color={'#222'} title='24 Hour' onPress={()=>{setDuration(getDuration(24)); setIsLoading(true); console.log("Clicked")}}/>
        <Button color={'#222'} title='1 Weak' onPress={()=>{setDuration(getDuration(7*24)); setIsLoading(true); console.log("Clicked")}}/>
        <Button color={'#222'} title='1 Month' onPress={()=>{setDuration(getDuration(30*24)); setIsLoading(true); console.log("Clicked")}}/>
        <Button color={'#222'} title='1 Year' onPress={()=>{setDuration(getDuration(24*365)); setIsLoading(true); console.log("Clicked")}}/>
      </View>
      {(!isLoading)?<Chart prices={priceArray.prices} />:(
        <View>
          <Chart prices={[]} />
          <View style={styles.loaderOverlay}><Loader /></View>
        </View>
        )}
    </View>
  )
}


export default CoinDetails