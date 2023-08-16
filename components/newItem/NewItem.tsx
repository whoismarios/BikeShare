import React, { useState } from 'react';
import { Text, Image, ImageBackground, View, Pressable, Modal } from 'react-native';
import { styles } from './NewItemStyle';
import OfferModal from '../../app/(modals)/offerModal/OfferModal';


function openOfferModal(): any {
    console.log('open modal');
}



export default function NewItem() {

    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!isVisible);
    }

    return(
        <>
            <ImageBackground 
                source={require('../../assets/images/gradient.jpg')} 
                style={[styles.newItem, {borderRadius: 10, alignItems: 'center', height: '95%'}]}
                resizeMode='stretch'
                borderRadius={10}
                height={80}
                width={100}
            >

                <OfferModal visible={isVisible} />

                <Image style={styles.bikeImage} source={require('../../assets/images/cube.png')} />
                <Image style={styles.newIcon} source={require('../../assets/images/new.png')} />

                <View style={styles.diamond}>
                    <View style={styles.diamond2}>
                        <Text style={styles.name}>Cube Stereo Hybrid 120 Pro 625 grau</Text>

                        <View style={styles.priceBox}>
                            <Text style={styles.price}>49 $/Day</Text>
                            <Text style={styles.price}>299 $/Week</Text>
                        </View>

                        <View style={styles.extras}>
                            <Text style={styles.extrasText}>- Full Suspension</Text>
                            <Text style={styles.extrasText}>- {`<`}100km Range</Text>
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