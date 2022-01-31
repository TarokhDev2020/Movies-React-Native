import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Explore from '../Screens/Explore';
import Favorite from '../Screens/Favorite';
import Detail from '../Screens/Detail';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} options = {{
                headerStyle: {
                    backgroundColor: "#0f0f0f",
                    shadowOpacity: 0,
                },
                headerTitleStyle: {
                    color: "white",
                    
                },
                headerTintColor: "white"
            }} />
            <Stack.Screen name = "Detail" component = {Detail} options = {{
                headerStyle: {
                    backgroundColor: "#0f0f0f",
                    shadowOpacity: 0,
                },
                headerTitleStyle: {
                    color: "white"
                },
                headerTintColor: "white",
                title: "Movies"
            }} />
        </Stack.Navigator>
    )
};

const ExploreStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Explore" component = {Explore} options = {{
                headerStyle: {
                    backgroundColor: "#0f0f0f",
                    shadowOpacity: 0
                },
                headerTitleStyle: {
                    color: "white"
                }
            }} />
        </Stack.Navigator>
    )
};

const FavoriteStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Favorite" component = {Favorite} options = {{
                headerStyle: {
                    backgroundColor: "#0f0f0f",
                    shadowOpacity: 0
                },
                headerTitleStyle: {
                    color: "white"
                }
            }} />
        </Stack.Navigator>
    )
}


export {HomeStackNavigator, ExploreStackNavigator, FavoriteStackNavigator};