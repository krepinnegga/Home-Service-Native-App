import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { useEffect, useState } from 'react'
import GlobalApi from '../../../../Utils/GlobalApi'
import Heading from '../../../../Components/Heading'

const Slider = () => {
    const [slider, setSlider] = useState();

    useEffect(() => {  
        getSliders()
    }, [])

    const getSliders = () => {
        GlobalApi.getSlider().then(res => {
        //console.log("response", res)
          setSlider(res?.sliders);
        })
    }
  
  return (
    <View>
       <Heading text={"Offers For You"} />
       
        <FlatList 
           data={slider}
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           renderItem={({item, index})=>(
            <View style={{marginRight:20}}>
                <Image source={{uri:item?.image?.url}}
                  style={styles.sliderImage}
                />
            </View>
           )}
        />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
   
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:'contain',
    }
})