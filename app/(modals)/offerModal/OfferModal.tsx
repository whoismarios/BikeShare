import React from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { styles } from "./offerModalStyleSheet";

export default function OfferModal(props: { visible: boolean; onClose: () => void; }) {
    return (
        <Modal transparent= {true} style={styles.modal} animationType="slide" visible={props.visible}>
            
            <View style={styles.smallModal}>
            <Image style={styles.backgroundImage} source={require('../../../assets/images/blur.png')}  />

                <View style={styles.offerModalContent}>
                    <Text style={styles.offerModalTitel}>Offer Modal</Text>
                    <Pressable onPress={props.onClose}>
                        <Image source={require('../../../assets/images/close.png')} style={styles.closeIcon} />
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
