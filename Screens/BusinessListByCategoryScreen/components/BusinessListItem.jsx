import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const BusinessListItem = ({ business }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={()=> navigation.push('business-details', {
          business: business
        })}
    >
        <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
            <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 15 }}>
                {business.contactPerson}
            </Text>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 19 }}>{business.name}</Text>
            <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16, width: 250 }}>
            <Ionicons name='ios-location-sharp' size={20} color={Colors.PRIMARY} />
                {business.address}
            </Text>
        </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    marginBottom: 15,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  subContainer: {
    display: 'flex',
    gap: 7,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
