import { ImageBackground, Linking, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';

import { styles } from './../stylesheets/homeStyleSheet';
import { ScrollView } from 'react-native-gesture-handler';

import NewItem from '../../components/newItem/NewItem';

import { newBikes } from '../../app/dummyData/newBike'

async function Ricky() {
  // open a browser with youtube
  const link: String = await Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

export default function TabOneScreen() {

  return (
    <>
      <View>
        <ImageBackground resizeMode='cover' source={require('./../../assets/images/mtb.webp')} style={styles.backgroundImage}>

          <Pressable onPress={Ricky} style={styles.greating}>
            <Text style={styles.title}>Hey, Wobin!</Text>
          </Pressable>

          <Text style={styles.whatsNew}>What's new?</Text>

          <ScrollView style={styles.newBikes} horizontal={true} bounces={true} >

            {newBikes.map((bike) => {
              return (
                <NewItem key={bike.id} bike={bike}  />
              );
            })}
            
          </ScrollView>
          
        </ImageBackground>
      </View>
    </>
  );
}


