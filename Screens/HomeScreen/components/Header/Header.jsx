import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../../Utils/Colors';


const Header = () => {
     const {user, isLoading} = useUser();

 return user && (
    <View style={styles.container}>
       <View>
           <Image source={{uri:user?.imageUrl}}
             style={styles.userImage}
           />

           <View style={{}}>
               <Text>Welcome</Text>
               <Text>{user?.firstName}</Text>
           </View>
       </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY
    },
    userImage:{
        width: 50,
        height: 45,
        borderRadius: 99,   
    },
})