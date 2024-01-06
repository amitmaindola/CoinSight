import React, { useEffect, useState } from 'react'
import CoinListItem from './CoinListItem'
import { Text, ScrollView, FlatList } from 'react-native';
const data = require('../../data/cryptocurrencies.json')

import CryptoCurrencyItem from '../../types/CryptoCurrency';

function CoinList(){
    const [cryptoCurrenciesData, setCryptoCurrenciesData] = useState<CryptoCurrencyItem[] | null>(null);
    
    useEffect(() => {
        // const fetchData = async () => {
        //   try {
        //     const response = await fetch('../../data/cryptocurrencies.json');
        //     const data = await response.json();
        //     setCryptoCurrenciesData(data);
        //   } catch (err) {
        //     console.error('Error reading JSON file:', err);
        //   }
        // };
    
        // fetchData();
        setCryptoCurrenciesData(data)
      }, []);


    return (

            <FlatList
              data={cryptoCurrenciesData}
              renderItem={({item}) => <CoinListItem coinData={item}/>}
              keyExtractor={item => item.id}
            />
            
    )
}

export default CoinList