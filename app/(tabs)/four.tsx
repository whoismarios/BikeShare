import React, { useState } from 'react';
import { Image, ImageBackground, Text, View, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../stylesheets/profileStyleSheet';

export default function TabFourScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const openModal = (content: React.SetStateAction<string>) => {
    setSelectedContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedContent('');
  };

  const contentItems = [
    'Rental History',
    'Favorites List',
    'Saved Payment Information',
    'Point Rewards',
    'Help and Support',
    'Permissions',
    'Imprint and Data Protection'
  ];

  return (
    <>
      <ImageBackground resizeMode='cover' source={require('./../../assets/images/mtb.webp')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/avatar.png')} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>example@example.com</Text>
          </View>

          <ScrollView style={styles.contentContainer}>
            {contentItems.map((content, index) => (
              <Pressable
                key={index}
                style={styles.content}
                onPress={() => openModal(content)}
              >
                <Text style={styles.contentText}>{content}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>{selectedContent}</Text>
            <Pressable onPress={closeModal}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
