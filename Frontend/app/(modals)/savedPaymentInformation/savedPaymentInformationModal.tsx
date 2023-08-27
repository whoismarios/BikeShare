import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function savedPaymentInformationModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Information</Text>

      <View style={styles.paymentMethodsBox}>

        <View style={styles.singlePaymentBox}>
            <Image style={styles.paymentImage} source={require('../../../assets/images/paypal.png')} />
            <Text>Paypal</Text>
        </View>

        <View style={styles.singlePaymentBox}>
            <Image style={styles.paymentImage} source={require('../../../assets/images/mastercard.png')} />
            <Text>Master Card</Text>
        </View>

        <View style={styles.singlePaymentBox}>
            <Image style={styles.paymentImage} source={require('../../../assets/images/visa.png')} />
            <Text>Visa</Text>
        </View>

        <View style={styles.singlePaymentBox}>
            <Image style={styles.paymentImage} source={require('../../../assets/images/bitcoin.png')} />
            <Text>Bitcoin</Text>
        </View>

      </View>


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
    paymentMethodsBox:{
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singlePaymentBox:{
        width: '70%',
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
    },
    paymentImage: {
    
    },
});