import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { newBikes } from '../../dummyData/newBike';
import { FlatList } from 'react-native-gesture-handler';
import AllBikes from '../../../components/allBikes/allBikes';

export default function RentalHistoryContent(){
    return(
        <>
            <View style={styles.container}>
                <View style={styles.space}></View>
                <Text style={styles.title}>Rental History</Text>
                {/* TODO: Rental Item Component */}
                <FlatList style={styles.list} data={newBikes} renderItem={({ item: bike }) => <AllBikes bike={bike} />} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    space:{
        height: 30,
    },
    list:{
        width: '100%',
        marginTop: 20,
    }
});