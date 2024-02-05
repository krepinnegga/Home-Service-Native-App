import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './components/BusinessListItem';
import Colors from '../../Utils/Colors';

const BusinessListByCategoryScreen = () => {
  const param = useRoute().params;
  const navigation = useNavigation()
 
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    param&&getBusinessListByCategory()
  }, [param])


  //fetching business list by category
  const getBusinessListByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category)
    .then((res) => {
     setBusinessList(res.businessLists)
    })
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{display:'flex', 
               flexDirection:'row', 
               gap:10,
               alignItems:'center',
              }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons 
           name='arrow-back-outline' 
           size={30} 
           color="black" 
        />
        <Text 
           style={{fontSize: 25, 
             fontFamily:'outfit-medium'}}
        >
          {param?.category}
        </Text>
      </TouchableOpacity>

   {businessList?.length > 0 ? 
     <FlatList 
        data={businessList}
        style={{marginTop:15}}
        renderItem={({item, index}) => (
          <BusinessListItem business={item} />
        )}
      /> : 
      <Text 
        style={{fontFamily:'outfit-medium', 
                color:Colors.GRAY, 
                fontSize:20,
                textAlign:'center',
                marginTop:50
              }}>
        No Data in Category
      </Text>
    }
    </View>
  )
}

export default BusinessListByCategoryScreen

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingTop: 50,
},
})