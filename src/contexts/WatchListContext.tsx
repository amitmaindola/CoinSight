import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface contextValueType{
    watchListCoinIds: string[]
}

interface WatchListProviderProps {
    children: React.ReactNode;
}
  

const WatchListContext = createContext({watchListCoinIds: []} as contextValueType)

export const useWatchListContext = () => useContext(WatchListContext)

export default function WatchListProvider({children}:WatchListProviderProps):React.JSX.Element {
  
  const [watchListCoinIds, setWatchListCoinIds] = useState<string[]>([])
  const getWatchListData = async () => {
    try{
        const jsonValue = await AsyncStorage.getItem("@watchlist_coins")
        setWatchListCoinIds(jsonValue!=null ? JSON.parse(jsonValue) : [])
    } catch (e){
        alert(e)
    }
  }
  const storeWatchListData = async (coinId:string) => {
    try{
        const newWatchListCoinIds = [...watchListCoinIds, coinId]
        const jsonValue = JSON.stringify(newWatchListCoinIds)
        await AsyncStorage.setItem("@watchlist_coins", jsonValue)
    } catch (e){
        alert(e)
    }
  }

  return (
    <WatchListContext.Provider value={{watchListCoinIds: watchListCoinIds}}>
        {children}
    </WatchListContext.Provider>
  )
}
