import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { styles } from "./offerModalStyleSheet";
import { Bike } from "../../types/types";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function OfferModal(props: { visible: boolean; onClose: () => void; bike: Bike } ) {

    const[selectedDate, setSelectedDate] = useState(new Date());

    function handleDateChange(event: any, selectedDate: any) {
        const currentDate = selectedDate;
        setSelectedDate(currentDate);
    }

    return (
        <Modal transparent= {true} style={styles.modal} animationType="slide" visible={props.visible}>
            
            <View style={styles.smallModal}>
            <Image style={styles.backgroundImage} source={require('../../../assets/images/blur.png')}  />

                <View style={styles.offerModalContent} key={props.bike.id}>
                    <Text style={styles.offerModalTitel}>{props.bike.name}</Text>
                    <Pressable onPress={props.onClose}>
                        <Image source={require('../../../assets/images/close.png')} style={styles.closeIcon} />
                    </Pressable>

                    <View style={styles.underlay}></View>

                    <View style={styles.bikeContainer}>
                        <Image style={styles.bikeImage} source={props.bike.imagePath} />
                    </View>

                    <View style={styles.bikeInfo}>
                        <Text style={styles.bikeTitel}>{props.bike.name}</Text>
                        <Text style={styles.bikePricePerDay}>Price Per Day: {props.bike.pricePerDay}$</Text>
                        <Text style={styles.bikePricePerWeek}>Price Per Wee: {props.bike.pricePerWeek}$</Text>
                        <Text style={styles.bikeDescription}>About the Bike: {props.bike.description}</Text>
                    </View>

                    <View style={styles.datePickerContainer}>
                        <Text style={styles.datePickerText}>From:</Text>
                        <DateTimePicker 
                            style={styles.datePicker}
                            value={selectedDate}
                            mode='date'
                            is24Hour={false}
                            onChange={handleDateChange}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    );
}
