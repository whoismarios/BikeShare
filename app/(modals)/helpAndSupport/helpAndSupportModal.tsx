import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function helpAndSupportModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help and Support</Text>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Welcome to the Help and Support Section of the BikeRental App</Text>
        <Text>At BikeRental, we are dedicated to providing you with the best experience possible. We understand that questions and concerns may arise while using our app, 
            and we are here to assist you every step of the way. 
            Whether you're a seasoned cyclist or a first-time user, our Help and Support resources are designed to make your journey smooth and enjoyable.
        </Text>

        <Text style={styles.title}>Frequently Asked Questions (FAQs)</Text>
        <Text>Browse through our comprehensive list of frequently asked questions to find quick answers to common inquiries. From how to rent a bike to understanding our pricing structure, the FAQs cover a wide range of topics to help you navigate the app effortlessly.</Text>

        <Text style={styles.title}>Getting Started Guide</Text>
        <Text>New to BikeRental? Our Getting Started Guide is tailored for beginners. Learn how to create an account, explore available bikes, make reservations, and more. We walk you through the process step by step, ensuring you're up and riding in no time.</Text>

        <Text style={styles.title}>Contact Us</Text>
        <Text>Sometimes, you may encounter unique situations that require personalized assistance. Our support team is available to help. You can reach out to us via the Contact Us section. Whether you prefer email or phone, we're here to address your concerns promptly.</Text>

        <Text style={styles.title}>App Updates and Notifications</Text>
        <Text>Stay up to date with the latest app updates and enhancements. We continuously strive to improve your experience, and any new features or improvements will be communicated through notifications.</Text>

        <Text style={styles.title}>Safety and Security</Text>
        <Text>our safety is our priority. Find tips on safe biking practices, secure locking methods, and guidelines for riding in your area. We want you to enjoy your ride while feeling confident about your security.</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.thanks}>Thank you for choosing BikeRental. We're here to make your bike rental experience convenient, enjoyable, and hassle-free. If you have any suggestions or feedback, feel free to share them with us. Happy riding!</Text>

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
    },
    thanks:{
        marginBottom: 20,
        fontStyle: 'italic',
        fontWeight: '300',
        fontSize: 16,
    },
})