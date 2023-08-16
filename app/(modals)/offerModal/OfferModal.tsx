import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import { styles } from "./offerModalStyleSheet";

export default function OfferModal(props: { visible: boolean | undefined; }){
    return (
        <>
           <Modal animationType="fade" visible={props.visible}>
            
            <View>
                <Text style={styles.offerModalTitel}>Offer Modal</Text>
            </View>

           </Modal>
        </>
    );
}