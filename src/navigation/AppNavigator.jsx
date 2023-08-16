import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import App from '../../App'
import QrCode from '../screen/QrCode'

const stack = createStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='App' component={App} />
            <stack.Screen name='QrCode' component={QrCode} />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator