import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CoinDetailsHeader from '../../components/CoinDetailsHeader/CoinDetailsHeadr';
import Chart from '../../components/Chart/Chart';
import { ChartDataFromAPI, TimeDuration } from '../../types';
import { getCoinMarketChart, getDetailedCoinData } from '../../services/requests';
import styles from './styles';
import Loader from '../../components/Loader/Loader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';

const getDuration = (hours:number):TimeDuration => {
  const currentTime:number = new Date().getTime();
  const prevtime:number = currentTime - hours * 60 * 60 * 1000;
  const duration:TimeDuration = {
    from: Math.floor(prevtime/1000), to: Math.floor(currentTime/1000)
  }

  return duration;
}

const fetchChartData = async (coinId:string, setPriceArray:Function, duration: TimeDuration):Promise<void> =>{
  setPriceArray(await getCoinMarketChart(coinId, duration))
  // console.log(getDuration(24))
  
}

const fetchCoinData = async(coinId:string, setCoinDetails:Function):Promise<void> => {
  const result = await getDetailedCoinData(coinId)
  setCoinDetails(result)
}

function CoinDetails() {

  const [priceArray, setPriceArray ] = useState<ChartDataFromAPI>({prices: [], market_caps:[], total_volumes:[]})
  const [duration, setDuration] = useState<TimeDuration>(
    getDuration(24)
  )
  const [CoinDetails, setCoinDetails] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(()=>{
  //   if(isLoading) setPriceArray({prices: [], market_caps:[], total_volumes:[]})
  // }, [isLoading])

  useEffect(()=>{
    // console.log("Array Length: ", priceArray.prices.length)
    setIsLoading(false);
  }, [priceArray])

  

  // Route
  
  type CoinDetailsRouteProp = RouteProp<RootStackParamList, 'CoinDetails'>;
  const route = useRoute<CoinDetailsRouteProp>()

  useEffect(()=>{
    if(!route.params){
      fetchCoinData('bitcoin', setCoinDetails)
    }
    else{
      fetchCoinData((route.params).coinId, setCoinDetails)
    }
  }, [])

  useEffect(()=>{
    fetchChartData(route.params.coinId, setPriceArray, duration)
  }, [duration])

  return CoinDetails ? <View>
                          <CoinDetailsHeader image={CoinDetails.image.small} symbol={CoinDetails.symbol} name={CoinDetails.name} market_cap_rank={CoinDetails.market_data.market_cap_rank}/>
                          <View style={{padding: 10}}>
                            <Text style={styles.text}>{CoinDetails.name}</Text>
                            <View style={styles.priceContainer}>
                              <Text style={styles.price}>$ {CoinDetails.market_data.current_price.usd}</Text>
                              <View style={[styles.percentageChange, {backgroundColor: CoinDetails.market_data.price_change_percentage_24h > 0 ? "rgb(23, 198, 132)" : "rgb(198, 130, 23)"}]}>
                                <AntDesign style={styles.changeIcon} name={CoinDetails.market_data.price_change_percentage_24h > 0 ? "caretup" : "caretdown"} size={18} color="white" />
                                <Text style={styles.text}>{Math.abs(Number(CoinDetails.market_data.price_change_percentage_24h.toFixed(2)))} %</Text>
                              </View>
                            </View>
                          </View>
                          <View style={styles.buttonsWrapper}>
                            <Button color={'#222'} title='24 Hour' onPress={()=>{setDuration(getDuration(24)); setIsLoading(true); }}/>
                            <Button color={'#222'} title='1 Weak' onPress={()=>{setDuration(getDuration(7*24)); setIsLoading(true); }}/>
                            <Button color={'#222'} title='1 Month' onPress={()=>{setDuration(getDuration(30*24)); setIsLoading(true); }}/>
                            <Button color={'#222'} title='1 Year' onPress={()=>{setDuration(getDuration(24*365)); setIsLoading(true); }}/>
                          </View>
                          {(!isLoading)?<Chart prices={priceArray?priceArray.prices:[]} />:(
                            <View>
                              <Chart prices={[]} />
                              <View style={styles.loaderOverlay}><Loader /></View>
                            </View>
                            )}
                        </View>
                      : <Loader />
}


export default CoinDetails