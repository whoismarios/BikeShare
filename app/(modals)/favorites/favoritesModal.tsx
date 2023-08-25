import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { newBikes } from "../../dummyData/newBike";
import AllBikes from "../../../components/allBikes/allBikes";

export default function FavoritesModal(){
    return(
        <>
            <View style={styles.container}>
                <View style={styles.space}></View>
                <Text style={styles.title}>Favorites</Text>
                {/* TODO: Favorite Bikes Component */}
                <FlatList style={styles.list} data={newBikes} renderItem={({ item: bike }) => <AllBikes bike={bike} />} />
            </View>
        </>
    );
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