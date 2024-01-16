import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Categories from './components/Categories/Categories'
import BusinessList from './components/BusinessList/BusinessList'

const HomeScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header />

      <View style={{padding: 20}}>
        {/* Slider */}
         <Slider />
     
       
       {/* Categories */}
      <Categories />

      {/* BusinessList */}
      <BusinessList />
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})