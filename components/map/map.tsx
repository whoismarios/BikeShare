import React from "react";

import {styles} from './../../app/stylesheets/mapStyleSheet'; 

import MapView from 'react-native-maps';

export default function Map() {
    return(
        <>
            <MapView
                initialRegion={{
                    latitude: 22.78825,
                    longitude: -100.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map}
            />
        </>
    );
}  