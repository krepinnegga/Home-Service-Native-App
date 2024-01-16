import { StyleSheet, Text, View, FlatList, Image  } from 'react-native'
import React,{useEffect, useState} from 'react'
import GlobalApi from '../../../../Utils/GlobalApi'
import Heading from '../../../../Components/Heading'
import Colors from '../../../../Utils/Colors'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories()
    }, [])

    const getCategories = () => {
        GlobalApi.getCategories().then(res => {
           setCategories(res.categories);
        })
    }
    
  return (
    <View style={{marginTop:10}}>
       <Heading text={"Categories"} isViewAll={true}/>

       <FlatList 
           data={categories}
           numColumns={4}
           renderItem={({item, index})=>index<=3&&(
            <View style={styles.container}>
              <View style={styles.iconContainer}>
                <Image source={{uri:item?.icon?.url}}
                  style={{width:30, height:30}}
                />
              </View>
              
              <Text style={{fontFamily:'outfit-medium', marginTop:5}}>
                {item.name}
              </Text>
            </View>
           )}
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:17,
        borderRadius:99,
    },
    container:{
        flex:1,
        alignItems:'center'
    }
})