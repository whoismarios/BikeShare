import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { LatLng, Region } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map() {

    const [userLocation, setUserLocation] = useState<LatLng | null>(null);

    useEffect(() => {
        async function getUserLocation() {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }

        getUserLocation();
        
    }, []);

    const initialRegion: Region = {
        latitude: userLocation?.latitude || 0,
        longitude: userLocation?.longitude || 0,
        latitudeDelta: 0.0822,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={{ flex: 1 }}>
            {userLocation && (
                <MapView
                    initialRegion={initialRegion}
                    showsCompass={true}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsScale={true}
                    toolbarEnabled={true}
                    style={{ flex: 1 }}
                />
            )}
        </View>
    );
}
