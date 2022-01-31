import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, FavoriteStackNavigator, ExploreStackNavigator} from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions = {{style: {backgroundColor : "#0f0f0f", borderTopWidth: 0, shadowOpacity: 0, elevation: 0}, activeTintColor: "white"}} screenOptions = {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === "Home") {
                    iconName = focused ? "home-outline" : 'home-outline'
                }
                else if (route.name === "Explore") {
                    iconName = focused ? "images-outline" : "images-outline"
                }
                else if (route.name === 'Favorite') {
                    iconName = focused ? "heart-outline" : "heart-outline"
                }
                return <Ionicons name = {iconName} size = {size} color = {color} />
            },
        })}>
            <Tab.Screen name = "Home" component = {HomeStackNavigator} />
            <Tab.Screen name = "Explore" component = {ExploreStackNavigator} />
            <Tab.Screen name = "Favorite" component = {FavoriteStackNavigator} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;