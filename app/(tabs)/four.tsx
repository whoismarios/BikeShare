import React, { useState } from 'react';
import { Image, ImageBackground, Text, View, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../stylesheets/profileStyleSheet';
import RentalHistoryContent from '../(modals)/rentalHistory/rentalHistoryModal';
import FavoritesListContent from '../(modals)/favorites/favoritesModal';
import ImprintAndDataProtectionContent from '../(modals)/imprintAndDataProtectionContent/imprintAndDataProtectionContentModal';
import SavedPaymentInformationModal from '../(modals)/savedPaymentInformation/savedPaymentInformationModal';

const PointRewardsContent = () => <Text>Point Rewards Content</Text>;
const HelpAndSupportContent = () => <Text>Help and Support Content</Text>;
const PermissionsContent = () => <Text>Permissions Content</Text>;

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

  const getContentComponent = (content: string) => {
    switch (content) {
      case 'Rental History':
        return <RentalHistoryContent />;
      case 'Favorites List':
        return <FavoritesListContent />;
      case 'Saved Payment Information':
        return <SavedPaymentInformationModal />;
      case 'Point Rewards':
        return <PointRewardsContent />;
      case 'Help and Support':
        return <HelpAndSupportContent />;
      case 'Permissions':
        return <PermissionsContent />;
      case 'Imprint and Data Protection':
        return <ImprintAndDataProtectionContent />;
      default:
        return null;
    }
  };

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
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text>Close</Text>
            </Pressable>
            {getContentComponent(selectedContent)}
          </View>
        </View>
      </Modal>
    </>
  );
}
