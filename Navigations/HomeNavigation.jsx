import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';

const stack = createStackNavigator();

const HomeNavigation = () => {
  return (
     <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen 
          name='home' 
          component={HomeScreen} 
        />

        <stack.Screen 
           name='business-list' 
           component={BusinessListByCategoryScreen} 
        />
     </stack.Navigator>
  )
}

export default HomeNavigation

