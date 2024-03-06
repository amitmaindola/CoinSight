import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useWatchListContext } from '../../contexts/WatchListContext';


type Nav = {
  navigate: (value: string) => void;
}

interface CoinDetailsHeaderProps {
    id: string,
    image: string,
    symbol: string,
    name: string,
    market_cap_rank: number
}

function CoinDetailsHeader({id, image, symbol, name, market_cap_rank}:CoinDetailsHeaderProps) {
  const { navigate } = useNavigation<Nav>()
  const {watchListCoinIds, setWatchListCoinIds} = useWatchListContext()

  const [addedToWatchList, setAddedToWatchList] = useState<boolean>(watchListCoinIds.includes(id))
  

  const addToWatchList = (coinId: string) => {
    setWatchListCoinIds([...watchListCoinIds, coinId])
    setAddedToWatchList(true)
  }

  const removeFromWatchList = (coinId: string) => {
    setWatchListCoinIds(watchListCoinIds.filter(coinIdElement=> coinIdElement!=coinId))
    setAddedToWatchList(false)
  }

  return (
    
      <View style={styles.header}>
        <Ionicons onPress={()=> navigate("Home")} style={{}} name="chevron-back-sharp" size={32} color="white" />
        <View style={styles.headerData}>
          <Image source={{uri:image}} height={28} width={28}/>
          <Text style={styles.title}>{symbol.toUpperCase()}</Text>
          <Text style={styles.rank}>#{market_cap_rank}</Text>
        </View>
        <View style={styles.options}>
          <Feather name="search" size={28} color="white" />
          {addedToWatchList ? <FontAwesome name="star"  onPress={()=>{removeFromWatchList(id)}} size={28} color="white"  /> : <Feather name="star" onPress={()=>{addToWatchList(id)}} size={28} color="white" />}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color: 'white'
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical:5,
      alignItems: 'center'
    },
    options:{
      width:80,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title:{
      color: 'white',
      fontSize: 20,
      marginHorizontal: 6,
    },
    headerData:{
      flexDirection: 'row',
      fontSize: 30,
      alignItems: 'center'
    },
    rank:{
      color: 'white',
      backgroundColor: 'rgb(50,53,68)',
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 5,
      marginLeft: 2
    }
})

export default CoinDetailsHeader