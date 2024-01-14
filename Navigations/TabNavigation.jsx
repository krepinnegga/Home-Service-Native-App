import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../Utils/Colors';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}
    >
      <Tab.Screen 
         name="Home" 
         component={HomeScreen} 
         options={{
            tabBarLabel:({color}) => (
                <Text style={{color:color, fontSize:12, marginTop:-7}}>
                    Home
                </Text>
            ),
            tabBarIcon:({color, size}) => (
                <Feather name="home" size={size} color={color} />
            ),
            headerShown: false
          }}
       />
      <Tab.Screen 
           name="booking" 
           component={BookingScreen} 
           options={{
            tabBarLabel:({color}) => (
                <Text style={{color:color, fontSize:12, marginTop:-7}}>
                    booking
                </Text>
            ),
            tabBarIcon:({color, size}) => (
                <Feather name="bookmark" size={size} color={color} />
            ),
            headerShown: false
          }}
       />
      <Tab.Screen 
         name="profile" 
         component={ProfileScreen} 
         options={{
            tabBarLabel:({color}) => (
                <Text style={{color:color, fontSize:12, marginTop:-7}}>
                    profile
                </Text>
            ),
            tabBarIcon:({color, size}) => (
                <Feather name="user" size={size} color={color} />
            ),
            headerShown: false
          }}
      />
    </Tab.Navigator>
  )
}


export default TabNavigation

