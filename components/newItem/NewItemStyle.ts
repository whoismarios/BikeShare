import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles: any = StyleSheet.create({
    newItem:{
        height: '80%',
        width: screenWidth * 0.65,
        marginLeft: screenWidth * 0.08,
        borderRadius: 10,
        marginTop: '0.5%',
        overflow: 'hidden',
    },
    bikeImage:{
        height: '50%',
        width: '100%',
        zIndex: 1,
        //transform: [{ scaleX: -1 }],
    },
    name:{
        color: '#fff',
        marginLeft: '15%',  
    },
    diamond: {
        width: '250%',
        height: '200%',
        backgroundColor: 'rgb(45, 156, 219)',
        transform: [{ rotate: '20deg' }],
        zIndex: 0,
        marginTop: '-10%',
    },
    diamond2:{
        transform: [{ rotate: '-20deg' }],
    },
    newIcon:{
        position: 'absolute',
        left: '1%',
        top: '1%',
    },
    priceBox:{
        marginTop: 10,
       
        marginLeft: '20%',
        marginRight: '15%',
        position: 'relative',
        height: '30%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        backgroundColor: '#fff',
       
    },
    price:{
        color: 'rgb(45, 156, 219)',
        fontSize: 30,
        display: 'flex',
        textAlign: 'left',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    extras:{
        width: '100%',
        marginLeft: '16%',
    },
    extrasText:{
        color: '#fff',
    },
    button:{
        width: screenWidth * 0.45,
        height: 40,
        marginTop: '2%',
        marginLeft: '22.5%',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    buttonText:{
        color: 'rgb(45, 156, 219)',
        textAlign: 'center',
        fontSize: 30,
    }
});