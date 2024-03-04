import React from 'react'
import CoinList from '../../components/CoinList/CoinList'
import { View, Text, StyleSheet } from 'react-native'
import { useWatchListContext } from '../../contexts/WatchListContext'

function WatchList():React.JSX.Element {
  const {watchListCoinIds} = useWatchListContext()
//   alert(value)
  return (
    // <WatchListContext.Consumer>
        <Text style={styles.text}>Hello</Text>
    // </WatchListContext.Consumer>
  )
}


const styles = StyleSheet.create({
    text:{
        color: 'white'
    }
})

export default WatchList