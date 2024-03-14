import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { CryptoCurrencyItem } from '../../types'
import { getDetailedCoinData } from '../../services/requests'
import Loader from '../../components/Loader/Loader'
import WatchListHeader from '../../components/ScreenHeader/ScreenHeader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PortfolioCoinListItem from '../../components/PortfolioCoinList/PortfolioCoinListItem'

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


interface portFolioIdListType{
  id: string,
  buyPrice: number
}


// Function to set data in AsyncStorage
export const setStoredPortfolioData = async (data:portFolioIdListType[]): Promise<void> => {
  try {
    await AsyncStorage.setItem("portfolio-data", JSON.stringify(data));
  } catch (error) {
    console.error('Error setting data in AsyncStorage:', error);
    throw error;
  }
};


// Function to get data from AsyncStorage
export const getStoredPortfolioData = async (): Promise<portFolioIdListType[] | null> => {
  try {
    const value = await AsyncStorage.getItem('portfolio-data');
    const jsonData = value ? JSON.parse(value) : [];
    return jsonData;
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    throw error;
  }
};

async function getPortfolioCoinList(portfolioCoinIdList:portFolioIdListType[], portfolioList: CryptoCurrencyItem[], setPortfolioList: Function) {
  setPortfolioList([])
  
  for (const item of portfolioCoinIdList) {
    const data = await getDetailedCoinData(item.id);
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
        setPortfolioList((prevList:CryptoCurrencyItem[]) => [...prevList, coinData])
    }

}

}





function Portfolio():React.JSX.Element {
  const [portfolioIdList, setPortfolioIdList] = useState<portFolioIdListType[]>([{id: 'bitcoin', buyPrice: 100}, {id: 'dogecoin', buyPrice: 100}, {id: 'shiba-inu', buyPrice: 100}])
  const [portfolioList, setPortfolioList] = useState<CryptoCurrencyItem[]>([])

  useEffect(() => {
    // Function to fetch data from AsyncStorage on first load
    // const fetchData = async () => {
    //   try {
    //     const storedData = await getStoredPortfolioData();

    //     if (storedData) {
    //       setPortfolioIdList(storedData);
    //     } else {
    //       // If no data is found, you can set a default value
    //       setPortfolioIdList([]);
    //     }
    //   } catch (error) {
    //     // Handle error appropriately
    //     console.log("Failed to fetch AsyncStorage at Line: 104.")
    //   }
    // };

    // fetchData();
    getPortfolioCoinList(portfolioIdList, portfolioList, setPortfolioList)
  }, []);


  
  return (
    <View>
      <WatchListHeader HeaderTitle={"Portfolio"}/>

      {portfolioIdList.length==0 ? 
        <View style={styles.notFoundContainer}>
          <Text style={styles.title}>No Coin added!</Text>
        </View>
        :
        <View>
          <View style={styles.portfolioHeader}>
            <View style={styles.portfolioRowContainer}>
              <Text style={styles.portfolioHeaderKey}>Current</Text>
              <Text style={styles.portfolioHeaderKey}>Total returns</Text>
            </View>

            <View style={styles.portfolioRowContainer}>
              <Text style={styles.portfolioHeaderValue}>$7470</Text>
              <Text style={[styles.portfolioHeaderValue, {color:"rgb(23, 223, 148)"}]}>+$70</Text>
            </View>

            <View style={[styles.portfolioRowContainer, {marginTop: 15}]}>
              <Text style={styles.portfolioHeaderKey}>Invested</Text>
              <Text style={styles.portfolioHeaderKey}>24 Hour returns</Text>
            </View>

            <View style={styles.portfolioRowContainer}>
              <Text style={styles.portfolioHeaderValue}>$7400</Text>
              <Text style={[styles.portfolioHeaderValue, {color:"rgb(23, 223, 148)"}]}>+$10</Text>
            </View>
          </View>

          <View style = {styles.lineStyle} />

          <FlatList
            data={portfolioList}
            renderItem={({item}) => <PortfolioCoinListItem coinData={item}/>}
            keyExtractor={(item, index) => `${index}-${item.name}`}
          />
          {portfolioList.length != portfolioList.length ? <Loader /> : <View></View>}
        </View>
      }

      
      
      {portfolioList.length != portfolioList.length ? <Loader /> : 
      <View style={styles.buttonWrapper}>
        <View style = {styles.lineStyle} />

        <Button
          onPress={()=>{}}
          title="Add Coin"
          color="#841584"
          accessibilityLabel="Add Crypto Coin To Your Portfolio"
        />
      </View>
      }
    </View>
  ) 
  }

const styles = StyleSheet.create({
    text:{
      color: 'white'
    },
    buttonWrapper:{
      padding: 10
    },
    lineStyle:{
      borderWidth: 0.3,
      borderColor:'#282828',
      marginVertical:20,
    },
    title:{
      fontSize: 18,
      color: '#eee',
      textAlign: 'center'

    },
    notFoundContainer:{
      marginTop: 40
    },
    portfolioRowContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    portfolioHeaderKey:{
      color: "#ccc",
      fontSize: 16,
    },
    portfolioHeaderValue:{
      color: "#eee",
      fontSize: 20,
    },
    portfolioHeader:{
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderColor: "#282828",
      borderRadius: 3
    }
})

export default Portfolio