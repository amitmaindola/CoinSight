import React, { useEffect, useState } from 'react'
import CoinListItem from './CoinListItem'
import { Text, ScrollView, FlatList, View, Button } from 'react-native';
const data = require('../../data/cryptocurrencies.json')

import CryptoCurrencyItem from '../../types/CryptoCurrency';
import { getAllCoins, getMarketData } from '../../services/requests';
import Loader from '../Loader/Loader';

const fetchData = async (setCryptoCurrenciesData:Function, currentPage:number, setCurrentPage:Function) => {
  if(currentPage < 4){ // Just for saving API request limit
    const newData = await getMarketData(currentPage);
    setCryptoCurrenciesData((cryptoCurrenciesData: CryptoCurrencyItem[]) => [...cryptoCurrenciesData, ...newData]);
    // console.log("Called For Page Number ", currentPage)
    setCurrentPage(currentPage + 1);
  }
}

function CoinList(){
    const [cryptoCurrenciesData, setCryptoCurrenciesData] = useState<CryptoCurrencyItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1)
    useEffect(() => {
        fetchData(setCryptoCurrenciesData, currentPage, setCurrentPage);
      }, []);


    return cryptoCurrenciesData.length ?  (
                  <FlatList
                    data={cryptoCurrenciesData}
                    renderItem={({item}) => <CoinListItem coinData={item}/>}
                    keyExtractor={(item, index) => `${index}-${item.name}`}
                    onEndReached={()=>fetchData(setCryptoCurrenciesData, currentPage, setCurrentPage)}
                    ListFooterComponent={Loader}
                  />
    ) : <View style={{height: '150%'}}></View> 
              
}

export default CoinList