import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Heading from "../../../Components/Heading"
import Colors from '../../../Utils/Colors';

const BusinessAboutMe = ( {business} ) => {
    const [isReadMore, setisReadMore] = useState(false);

  return (
   <View>
    <Heading text={'About Me'} />
    <Text style={{fontFamily:'outfit', 
                  color:Colors.GRAY,
                  fontSize:16,
                  lineHeight:28
                }}
                  numberOfLines={isReadMore?10:4}
    >
      {business.about}
    </Text>
    
    <TouchableOpacity onPress={() => setisReadMore(!isReadMore)}>
      <Text style={{color:Colors.PRIMARY,fontSize:16,fontFamily:'outfit'}}>
        {isReadMore?'Read Less': 'Read More'}
      </Text>
    </TouchableOpacity>
 </View>
  )
}

export default BusinessAboutMe

const styles = StyleSheet.create({})