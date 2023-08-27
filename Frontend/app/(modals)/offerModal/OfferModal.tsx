import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image, FlatList, ScrollView } from "react-native";
import { styles } from "./offerModalStyleSheet";
import { Bike } from "../../types/types";
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function OfferModal(props: { visible: boolean; onClose: () => void; bike: Bike } ) {

    const [isChecked, setChecked] = useState(false);
    const[selectedDate, setSelectedDate] = useState(new Date());

    function TabBarIcon(props: {
        name: React.ComponentProps<typeof FontAwesome>['name'];
        color: string;
      }) {
        return <FontAwesome size={28} style={{ marginBottom: -3, borderRadius: 20, }} {...props} />;
      }

   

    function handleDateChange(event: any, selectedDate: any) {
        const currentDate = selectedDate;
        setSelectedDate(currentDate);
    }

    interface CheckboxProps {
        label: string;
        checked: boolean;
        onChange: () => void;
      }
      
      const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
        return (
          <Pressable style={styles.checkboxContainer} onPress={onChange}>
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
              {checked && <TabBarIcon name="check" color="green" />}
            </View>
            <Text>{label}</Text>
          </Pressable>
        );
      };

      const handleCheckboxChange = () => {
        setChecked(!isChecked);
      };

      const [showModal, setShowModal] = useState(false);

      const handleLikePress = () => {
        setShowModal(true);
      };

      const closeModal = () => {
        setShowModal(false);
      };


    return (
        <Modal transparent= {true} style={styles.modal} animationType="slide" visible={props.visible}>
            
            <View style={styles.smallModal}>
            <Image style={styles.backgroundImage} source={require('../../../assets/images/blur.png')}  />

                <View style={styles.offerModalContent} key={props.bike.id}>
                    <Text style={styles.offerModalTitel}>{props.bike.name}</Text>
                    <Pressable onPress={props.onClose}>
                        <Image source={require('../../../assets/images/close.png')} style={styles.closeIcon} />
                    </Pressable>

                    <Pressable onPress={handleLikePress}>
                        <Image source={require('../../../assets/images/like.png')} style={styles.likeIcon} />
                    </Pressable>

                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={showModal}
                      onRequestClose={closeModal}
                    >
                      <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>
                          Bike added to your wishlist!
                        </Text>
                        <Image source={require('../../../assets/images/checkmark.gif')} style={styles.checkmark} />
                        <Pressable onPress={closeModal}>
                          <Text style={styles.closeButtonText}>Close</Text>
                        </Pressable>
                      </View>
                    </Modal>

                    <View style={styles.underlay}></View>

                    <View style={styles.bikeContainer}>
                        <Image style={styles.bikeImage} source={props.bike.imagePath} />
                    </View>

                    <ScrollView style={styles.bikeInfo} bounces={true}>

                        <Text style={styles.bikeTitel}>{props.bike.name}</Text>

                        <View style={styles.bikeCompanyDurationSelection}>

                          <View style={styles.priceBox}>
                            <TabBarIcon name="dollar" color="black"/> 
                              <Text>{"\n"}</Text>
                            <Text style={styles.innerText}>Price Per Day</Text>
                              <Text>{"\n"}</Text>
                            <Text style={styles.bikePricePerDay}>{props.bike.pricePerDay}$</Text>
                          </View>

                          <View style={styles.priceBox}>
                            <TabBarIcon name="dollar" color="black"/> 
                              <Text>{"\n"}</Text>
                            <Text style={styles.innerText}>Price Per Week</Text>
                              <Text>{"\n"}</Text>
                              <Text style={styles.bikePricePerDay}>{props.bike.pricePerWeek}$</Text>
                          </View>

                        </View>
                        <Text style={styles.bikeDescription}>About the Bike:</Text>
                        <Text style={styles.bikePricePerWeek}>{props.bike.description}</Text>
                        <Text style={styles.bikeDescription}>Pickup Location:</Text>
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            style={styles.map}
                        />
                        <Text style={styles.bikeDescription}>Pickup Date:</Text>
                        <View style={styles.datePickerContainer}>
                            <Text style={styles.bikePricePerWeek}>From:</Text>
                            <DateTimePicker 
                                themeVariant="light"
                                display="spinner"
                                style={styles.datePicker}
                                value={selectedDate}
                                mode='date'
                                //is24Hour={true}
                                onChange={handleDateChange}
                            />
                        </View>

                        <View style={styles.datePickerContainer}>
                            <Text style={styles.bikePricePerWeek}>To:</Text>
                            <DateTimePicker 
                                themeVariant="light"
                                display="spinner"
                                style={styles.datePicker}
                                value={selectedDate}
                                mode='date'
                                //is24Hour={false}
                                onChange={handleDateChange}
                            />
                        </View>

                        <View style={styles.priceContainer}>
                            <Text style={styles.bikePricePerWeek}><TabBarIcon name="dollar" color="gold"/> Total Price:</Text>
                            <Text style={styles.price}>{props.bike.pricePerDay}$</Text>
                            <Text style={styles.bikePricePerWeek}>inkl 19% Tax</Text>
                            <Text style={styles.bikePricePerWeek}>{((props.bike.pricePerDay/100)*19).toFixed(2)}$</Text>
                        </View>

                        <View style={styles.container}>
                          <Checkbox label="I accept the terms of use" checked={isChecked} onChange={handleCheckboxChange} />
                        </View>

                        <Pressable style={styles.button} onPress={props.onClose}>
                            <Text style={styles.buttonText}>Checkout</Text>
                        </Pressable>

                    </ScrollView>


                </View>
            </View>
        </Modal>
    );
}
