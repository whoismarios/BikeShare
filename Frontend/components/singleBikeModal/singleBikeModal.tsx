import React from "react";
import { Modal, Text, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Bike } from "../../app/types/types";

interface SingleBikeModalProps {
  visible: boolean;
  onClose: () => void;
  bike: Bike;
}

export default function SingleBikeModal({
  visible,
  onClose,
  bike,
}: SingleBikeModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <ImageBackground
          source={require("../../assets/images/gradient.jpg")}
          style={styles.imageBackground}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Schließen</Text>
            </TouchableOpacity>
            <Text>{bike.name}</Text>
            <Text>Price per Day: {bike.pricePerDay}$</Text>
            <Text>Price per Week: {bike.pricePerWeek}$</Text>
            <Text>Bike Size: {bike.size}</Text> 
            <Text>Description:</Text>
            <Text>{bike.description}</Text>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  modalContent: {
    height: '100%',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 100,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  closeButtonText: {
    color: "blue",
  },
});
