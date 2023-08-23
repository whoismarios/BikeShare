import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './bikeCompanyStyleSheet'

import { BikeCompanyType } from '../../app/types/types'

export default function BikeCompany(props: { BikeCompany: BikeCompanyType }) {
  return (
    <>
      <View style={styles.bikeCompanyContainer}>
        <View style={styles.bikeCompany}>
            <Image source={props.BikeCompany.imagePath} style={styles.bikeCompanyLogo} />    
        </View>
        <Text style={styles.bikeCompanyName}>{props.BikeCompany.name}</Text>
      </View>
    </>
  )
}