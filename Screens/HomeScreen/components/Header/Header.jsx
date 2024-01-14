import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../../Utils/Colors';
import { Feather } from '@expo/vector-icons';



const Header = () => {
     const {user, isLoading} = useUser();

 return user && (
    <View style={styles.container}>
      {/* Profile Section */}
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                    style={styles.userImage}
                />

                <View>
                    <Text style={{color:Colors.WHITE, fontFamily:"outfit"}}>
                        Welcome,
                    </Text>
                    <Text style={{color:Colors.WHITE, fontSize:20, fontFamily:"outfit-medium"}}>
                        {user?.firstName}
                    </Text>
                </View>
            </View>
           <Feather name="bookmark" size={24} color="white" />
       </View>
      {/* Profile Section */}

      {/* Search Bar Section */}
         <View style={styles.searchContainer}>
            <TextInput placeholder='search'
             style={styles.textInput}
             />
             <Feather 
                name="search" 
                size={24} 
                color={Colors.PRIMARY} 
                style={styles.searchBtn}
             />
         </View>
      {/* Search Bar Section */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileMainContainer:{
        display:"flex",
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"
    },
    profileContainer:{
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       gap:10
    },
    userImage:{
        width: 50,
        height: 50,
        borderRadius: 100,   
    },
    textInput:{
        padding:7,
        paddingHorizontal:15,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width: "85%",
        fontSize: 16,
        fontFamily: "outfit"
    },
    searchContainer:{
        marginTop: 15,
        display:'flex',
        flexDirection:"row",
        gap: 10,
        marginBottom:10
    },
    searchBtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8,
    }
})