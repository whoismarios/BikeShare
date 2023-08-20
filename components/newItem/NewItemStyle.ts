import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles: any = StyleSheet.create({
    newItem:{
        height: '80%',
        width: screenWidth * 0.8,
        marginLeft: screenWidth * 0.06,
        marginRight: screenWidth * 0.06,
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
        marginLeft: '20%',  
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
        height: '25%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        backgroundColor: '#fff',
       
    },
    price:{
        color: 'rgb(45, 156, 219)',
        fontSize: 35,
        display: 'flex',
        textAlign: 'left',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    extras:{
        width: '100%',
        marginLeft: '20%',
    },
    extrasText:{
        marginTop: '2%',
        color: '#fff',
        fontSize: 10,
    },
    button:{
        width: screenWidth * 0.65,
        height: 40,
        marginTop: '5%',
        marginLeft: '21.5%',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    buttonText:{
        color: 'rgb(45, 156, 219)',
        textAlign: 'center',
        fontSize: 30,
    }
});