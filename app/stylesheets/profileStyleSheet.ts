import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer:{
        paddingTop: 5,
        height: 250,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    image:{
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
    },
    email:{
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
    },
    contentContainer:{
        width: '100%',
        height: 700,
    },
    content:{
        height: 50,
        width: '70%',
        marginLeft: '15%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 40,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        color: 'black',
    },
    contentText:{

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 255, 0.8)',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
});