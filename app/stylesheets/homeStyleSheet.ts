import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    greating:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '80%',
        height: '15%',
        borderRadius: 10,
        marginLeft: '10%',
        marginTop: '10%',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        display: 'flex',
        justifyContent: 'center',
    },
    title:{
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
    },
    whatsNew: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: '5%',
    },
    newBikes: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10,
        marginBottom: '5%',
    }
});