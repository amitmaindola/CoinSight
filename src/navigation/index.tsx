import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CoinDetails from '../screens/CoinDetails';



export type RootStackParamList = {
    Home: undefined;
    CoinDetails: {coinId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName='Home'
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
    )
}

export default Navigation