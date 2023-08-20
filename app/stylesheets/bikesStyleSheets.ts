import React from "react";
import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    searchBar:{
        marginTop: '2.5%',
        marginBottom: '2.5%',
        height: '7.5%',
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        top: 0,
        zIndex: 1,
    },
    searchField:{
        height: '90%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: '10%',
        marginRight: '10%',
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
        marginTop: '10%',
        
    },
    inputField:{
        height: '100%',
        width: '90%',
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 25,
    },
});