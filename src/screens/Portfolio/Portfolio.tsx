import React, { useEffect, useState } from 'react'
import CoinList from '../../components/CoinList/CoinList'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useWatchListContext } from '../../contexts/WatchListContext'
import { CryptoCurrencyItem } from '../../types'
import CoinListItem from '../../components/CoinList/CoinListItem'
import { getDetailedCoinData } from '../../services/requests'
import Loader from '../../components/Loader/Loader'
import WatchListHeader from '../../components/ScreenHeader/ScreenHeader'

async function getCoinListFromIds(watchListCoinIds:string[], watchListCoinList: CryptoCurrencyItem[], setWatchListCoinList: Function) {
  setWatchListCoinList([])
  
  for (const id of watchListCoinIds) {
    const data = await getDetailedCoinData(id);
    if (data) {
        const coinData: CryptoCurrencyItem = {
          id: data.id,
          symbol: data.symbol,
          name: data.name,
          image: data.image.small,
          market_cap: data.market_data.market_cap.usd,
          market_cap_rank: data.market_data.market_cap_rank,
          current_price: data.market_data.current_price.usd,
          price_change_percentage_24h: data.market_data.price_change_percentage_24h,
          fully_diluted_valuation:  null,
          total_volume: null,
          high_24h: null,
          low_24h:  null,
          price_change_24h:  null,
          market_cap_change_24h:  null,
          market_cap_change_percentage_24h:  null,
          circulating_supply:  null,
          total_supply:  null,
          max_supply:  null,
          ath:  null,
          ath_change_percentage:  null,
          ath_date: null,
          atl:  null,
          atl_change_percentage:  null,
          atl_date: null,
          roi:  null,
          last_updated: null
        }
        setWatchListCoinList((prevList:CryptoCurrencyItem[]) => [...prevList, coinData])
    }

}

}

function Portfolio():React.JSX.Element {
  const {watchListCoinIds} = useWatchListContext()
  const [watchListCoinList, setWatchListCoinList] = useState<CryptoCurrencyItem[]>([])
  useEffect(() => {
    getCoinListFromIds(watchListCoinIds, watchListCoinList, setWatchListCoinList)
  }, [watchListCoinIds])



  
  return (
    <View>
      <WatchListHeader HeaderTitle={"Portfolio"}/>
      <FlatList
        data={watchListCoinList}
        renderItem={({item}) => <CoinListItem coinData={item}/>}
        keyExtractor={(item, index) => `${index}-${item.name}`}
      />
      {watchListCoinIds.length != watchListCoinList.length ? <Loader /> : <View></View>}
    </View>
  ) 
  }

const styles = StyleSheet.create({
    text:{
        color: 'white'
    }
})

export default Portfolio