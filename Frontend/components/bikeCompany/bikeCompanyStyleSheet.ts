import { StyleSheet } from "react-native";

export const styles: any = StyleSheet.create({
    bikeCompany:{
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    bikeCompanyLogo:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    bikeCompanyName:{
        marginTop: 5,
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        
    },
    bikeCompanyContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
    }
});