import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CoinDetails from '../screens/CoinDetails';
import BottomNavigation from './BottomNavigation';



export type RootStackParamList = {
    Root: undefined;
    CoinDetails: {coinId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName='Root'
    >
        <Stack.Screen name="Root" component={BottomNavigation} />
        <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
    )
}

export default Navigation