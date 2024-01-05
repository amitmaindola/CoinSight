import React, { useEffect, useState } from 'react'
import CoinListItem from './CoinListItem'
import { Text, ScrollView } from 'react-native';

function CoinList(){

    return (
        <ScrollView>
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            <CoinListItem />
            {/* <Text style={{color: 'white'}}>{JSON.stringify(cryptoCurrenciesData)}</Text>
            <Text style={{color: 'white'}}>{JSON.stringify(error)}</Text> */}
        </ScrollView>
            
    )
}

export default CoinList