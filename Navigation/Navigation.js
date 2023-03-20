import React from 'react-native';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IcIcon from "react-native-vector-icons/Ionicons";
import SplashScreen from '../Screens/SplashScreen';
import UserScreen from '../Screens/UserScreen';
import SearchScreen from '../Screens/SearchScreen';
import FilterScreen from '../Screens/FilterScreen';
import FavouriteScreen from '../Screens/FavouriteScreen'


const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false }} name="HomeNavigator" component={HomeNavigator} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeNavigator = () => {
    return (
        <Bottom.Navigator
            screenOptions={{ headerShown: false }}>

            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='search' />
                    </View>
                ),
            }}
                name="Search" component={SearchScreen} />
            <Stack.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (


                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='md-filter' />
                    </View>
                )
            }}
                name="Filter" component={FilterScreen} />


            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='heart-sharp' />
                    </View>
                )
            }} name="Favourite" component={FavouriteScreen} />




            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='md-person' />
                    </View>
                )
            }} name="User" component={UserScreen} />






        </Bottom.Navigator>
    )
}
