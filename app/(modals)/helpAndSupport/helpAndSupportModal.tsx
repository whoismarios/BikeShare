import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function helpAndSupportModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help and Support</Text>

      <ScrollView style={styles.scrollView}>

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    space:{
        height: 30,
    },
    list:{
        width: '100%',
        marginTop: 20,
    },
    scrollView:{
        width: '100%',
        marginTop: 20,
    }
})