import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import {Entypo, AntDesign, FontAwesome} from '@expo/vector-icons'
import WatchList from '../screens/WatchList';
import MyCoins from '../screens/Portfolio/Portfolio';

const Tab = createBottomTabNavigator();

function BottomNavigation():React.JSX.Element {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle:{
            backgroundColor: '#181818',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopColor: 'black'
        },
        tabBarShowLabel: false
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused, color})=> <Entypo name='home' size={focused ? 27 : 25} color={color}/>
      }}/>
      <Tab.Screen name="WatchList" component={WatchList} options={{
        tabBarIcon: ({focused, color})=> <FontAwesome name='star' size={focused ? 27 : 25} color={color}/>
      }}/>

      <Tab.Screen name="My Coins" component={MyCoins} options={{
        tabBarIcon: ({focused, color})=> <AntDesign name='piechart' size={focused ? 27 : 25} color={color}/>
      }}/>

    </Tab.Navigator>
  );
}

export default BottomNavigation