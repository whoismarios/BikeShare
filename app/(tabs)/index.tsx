import { ImageBackground, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';

import { styles } from './../stylesheets/homeStyleSheet';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  return (
    <>
      <View>
        <ImageBackground resizeMode='cover' source={require('./../../assets/images/Light.png')} style={styles.backgroundImage}>

          <View style={styles.greating}>
            <Text style={styles.title}>Hey, Wobin!</Text>
          </View>

          <Text style={styles.whatsNew}>What's new?</Text>

          <ScrollView style={styles.newBikes} horizontal={false}>
          
          </ScrollView>
          
        </ImageBackground>
      </View>
    </>
  );
}


