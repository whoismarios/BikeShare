import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get('window').height;

export const styles: any = StyleSheet.create({
    smallModal:{
        flex: 4,  
        height: windowHeight - 150,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
    },
    offerModalTitel:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
    closeIcon:{
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        right: 30
    },
    modalContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 30,
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
    },
    backgroundImage:{
        zIndex: -1,
        resizeMode: 'stretch',
        position: 'absolute',
        width: '100%',
        height: windowHeight-150,
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 30,
    },
    offerModalContent:{
        height: '100%',
        flex: 1,
    }
});