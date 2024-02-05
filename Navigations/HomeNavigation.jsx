import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';

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

         <stack.Screen 
           name='business-details' 
           component={BusinessDetailsScreen} 
        />
     </stack.Navigator>
  )
}

export default HomeNavigation

