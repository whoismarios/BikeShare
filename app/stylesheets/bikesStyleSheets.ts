import React from "react";
import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    searchBar:{
        marginTop: '2.5%',
        marginBottom: '2.5%',
        height: '5%',
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        top: 0,
        zIndex: 1,
    },
    searchField:{
        height: '90%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: '10%',
        marginRight: '5%',
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
    },
    brandFilter:{
        height: '10%',
        width: '100%',
    },
    bikeContainer:{
        height: '67.5%',
        width: '100%',
        marginTop: '5%',
        
    },
    inputField:{
        height: '100%',
        width: '90%',
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 25,
    },
    bikeSizeContainer:{
        height: '5%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    bikeSizeText:{
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 20,
        backgroundColor: 'transparent',
        color: 'black',
    },
});