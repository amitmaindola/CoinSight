import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useWatchListContext } from '../../contexts/WatchListContext';


type Nav = {
  navigate: (value: string) => void;
}



function ScreenHeader({HeaderTitle}) {
  const { navigate } = useNavigation<Nav>()

  return (
    
      <View style={styles.header}>
        <Ionicons onPress={()=> navigate("Home")} style={{}} name="chevron-back-sharp" size={32} color="white" />
        <View style={styles.headerData}>
          <Text style={styles.title}>{HeaderTitle}</Text>
          <FontAwesome style={styles.headerIcon} name="star" size={18} color="white" />
        </View>
        <View style={styles.options}>
          <Feather name="search" size={28} color="white" />
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
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title:{
      color: 'white',
      fontSize: 20,
      marginHorizontal: 6
    },
    headerData:{
      flexDirection: 'row',
      fontSize: 30,
      alignItems: 'center'
    },
    headerIcon:{
      marginTop: 3,
      display: 'none'
    }
})

export default ScreenHeader