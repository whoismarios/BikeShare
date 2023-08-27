import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    container:{
        width: '100%',
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderTopWidth: 1,
        borderColor: 'black',
    },
    imageContainer:{
        height: '100%',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bikeImage:{
        height: '90%',
        width: '90%',
    },
    name:{
        height: '100%',
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        padding: 10,
    },
    priceBox:{
        height: '100%',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    price:{
        fontSize: 16,
    },
});