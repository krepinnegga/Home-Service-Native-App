import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useEffect, useState} from 'react'
import Heading from '../../../../Components/Heading';
import GlobalApi from '../../../../Utils/GlobalApi'
import BusinessListItem from '../BusinessListItem/BusinessListItem';

const BusinessList = () => {
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        getBusinessList();
    }, [])
    
    const getBusinessList = () => {
        GlobalApi.getBusinessList().then((res) => {
           setBusinessList(res.businessLists)
        })
    }
 
  return (
    <View style={{marginTop:20}}>
       <Heading text={'Latest Business'} isViewAll={true}/>

       <FlatList 
         data={businessList}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
            <View style={{marginRight:10}}>
                <BusinessListItem business={item} />
            </View>
         )}
       />
    </View>
  )
}

export default BusinessList

const styles = StyleSheet.create({})