import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import BusinessPhotos from './components/BusinessPhotos';
import BusinessAboutMe from './components/BusinessAboutMe';
import Colors from '../../Utils/Colors';

const BusinessDetailsScreen = () => {
  const param = useRoute().params;
  const navigation = useNavigation()

  const [business, setBusiness] = useState(param.business);

  return business&&(
   <View>
    <ScrollView style={{height:'91%'}}>
      <TouchableOpacity 
          style={{position:'absolute', 
                  zIndex:10,
                  padding:20,
                  paddingVertical:50
                }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons 
            name='arrow-back-outline' 
            size={30} 
            color="white" 
          />
          <Text 
            style={{fontSize: 25, 
              fontFamily:'outfit-medium'}}
          >
            {param?.category}
          </Text>
        </TouchableOpacity>

        <Image 
         source={{uri: business?.images[0]?.url}} 
         style={{width:'100%', height:300}}
       />

       <View style={styles.infoContainer}>
          <Text style={{fontFamily:'outfit-bold', fontSize:25}}>
            {business?.name}
          </Text>
          <View style={styles.subContainer}>
            <Text style={{fontFamily:'outfit-bold',
                          color:Colors.PRIMARY,
                          fontSize:18
                        }}>
              {business?.contactPerson}
            </Text>
            <Text style={{color:Colors.PRIMARY,
                          backgroundColor:Colors.PRIMARY_LIGHT,
                          padding:5,
                          borderRadius:5,
                          fontSize:14
                        }}>
              {business?.category.name}
            </Text>
          </View>
          <Text style={{fontSize:17,fontFamily:'outfit',color:Colors.GRAY,}}>
          <Ionicons name='ios-location-sharp' size={25} color={Colors.PRIMARY} />
            {business?.address}
          </Text>

          {/* Horizontal Line */}
           <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}></View>
            
            <BusinessAboutMe business={business} />

          {/* Horizontal Line */}
          <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}>
          </View>

          <BusinessPhotos business={business} />
       </View>
    </ScrollView>

    <View style={{
      display:'flex',
      flexDirection:'row',
      margin:8,
      gap:8
    }}>
       <TouchableOpacity style={styles.messageBtn}>
         <Text
          style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color: Colors.PRIMARY,
            fontSize:18
          }}
         >Message</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.bookingBtn}>
         <Text
          style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color: Colors.WHITE,
            fontSize:18
          }}
         >Booking</Text>
       </TouchableOpacity>
    </View>
   </View> 
  )
}

export default BusinessDetailsScreen

const styles = StyleSheet.create({
    infoContainer:{
      padding:20,
      display:'flex',
      gap:7
    },
    subContainer:{
      display: 'flex',
      flexDirection:'row',
      gap:5,
      alignItems:'center'
    },
    messageBtn:{
      padding:15,
      backgroundColor:Colors.WHITE,
      borderWidth:1,
      borderColor:Colors.PRIMARY,
      borderRadius:99,
      flex:1,
    },
    bookingBtn:{
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderWidth:1,
      borderColor:Colors.PRIMARY,
      borderRadius:99,
      flex:1,
    }
})