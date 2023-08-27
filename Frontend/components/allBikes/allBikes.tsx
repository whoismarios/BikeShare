import React, { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './allBikesStyleSheet';
import { Bike } from '../../app/types/types';
import OfferModal from '../../app/(modals)/offerModal/OfferModal';

export default function AllBikes({ bike }: { bike: Bike }) {
  const [isVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  return (
    <Pressable onPress={openModal}>
      <View style={styles.container}>
        <Text style={styles.name}>{bike.name}</Text>
        <View style={styles.imageContainer}>
          <Image key={bike.id} style={styles.bikeImage} source={bike.imagePath} />
        </View>

        <OfferModal bike={bike} visible={isVisible} onClose={closeModal} />

        <View style={styles.priceBox}>
          <Text style={styles.price}>{bike.pricePerDay} $/Day</Text>
          <Text style={styles.price}>{bike.pricePerWeek} $/Week</Text>
        </View>
      </View>
    </Pressable>
  );
}
