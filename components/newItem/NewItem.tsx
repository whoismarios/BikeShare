import React, { useState } from 'react';
import { Text, Image, ImageBackground, View, Pressable, Modal } from 'react-native';
import { styles } from './NewItemStyle';
import OfferModal from '../../app/(modals)/offerModal/OfferModal';
import { Bike } from '../../app/types/types';

export default function NewItem({ bike }: {bike: Bike}) {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  }

  const closeModal = () => {
    setVisibility(false);
  }

  return (
    <>
      <ImageBackground
        source={require('../../assets/images/gradient.jpg')} 
        style={[styles.newItem, 
                {borderRadius: 10, 
                 alignItems: 'center', 
                 height: '95%'
                }]}
        resizeMode='stretch'
        borderRadius={10}
        height={80}
        width={100}
      >

        <OfferModal bike={bike} visible={isVisible} onClose={closeModal} />

        <Image
          key={bike.id}
          style={styles.bikeImage}
          source={bike.imagePath}
        />
        <Image style={styles.newIcon} source={require('../../assets/images/new.png')} />

        <View style={styles.diamond}>
          <View style={styles.diamond2}>
            
            <Text style={styles.name}>{bike.name}</Text>

            <View style={styles.priceBox}>
              <Text style={styles.price}>{bike.pricePerDay} $/Day</Text>
              <Text style={styles.price}>{bike.pricePerWeek} $/Week</Text>
            </View>

            <View style={styles.extras}>
              <Text style={styles.extrasText}>{bike.description}</Text>
            </View>

            <Pressable style={styles.button} onPress={toggleVisibility}>
              <Text style={styles.buttonText}>Rent</Text>
            </Pressable>

          </View>
        </View>
      </ImageBackground>
    </>
  );
}
