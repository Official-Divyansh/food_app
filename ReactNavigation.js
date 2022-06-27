import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import { Provider } from 'react-redux'
import configureStore from './redux/Store'

const store = configureStore()


export default function ReactNavigation() {
    const stack = createNativeStackNavigator()

    const screenOption = {
        headerShown: false
    }
  return (
    <Provider store={store}>

    <NavigationContainer>
        <stack.Navigator initialRouteName='Home' screenOptions={screenOption}>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
        </stack.Navigator>
       
    </NavigationContainer>
    </Provider>
  )
}