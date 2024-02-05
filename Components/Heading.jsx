import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({text, isViewAll}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
         {text}
        </Text>
      {isViewAll && <Text>View all</Text>}
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    header:{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10,
       },
    container:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    }
})