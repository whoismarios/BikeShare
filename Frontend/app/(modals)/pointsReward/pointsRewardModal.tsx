import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PointRewardsContent() {

    const color = 'gold';

    function TabBarIcon(props: {
        name: React.ComponentProps<typeof FontAwesome>['name'];
        color: string;
      }) {
        return <FontAwesome size={35} style={{ marginBottom: -3 }} {...props} />;
      }

  return (
        <>
        <ImageBackground resizeMode='cover' source={require('./../../../assets/images/mtb.webp')} style={styles.backgroundImage}>
            <View style={styles.container}>

                <View style={styles.nameBox}>
                    <Image style={styles.image} source={require('../../../assets/images/avatar.png')} />
                    <Text style={styles.title}>John Doe</Text>
                </View>

                <View style={styles.pointBox}>

                    <View style={styles.boxLeft}>

                        <View style={styles.upperBox}>
                            <TabBarIcon name="trophy" color={color} />
                            <Text style={styles.points}>385</Text>
                        </View>

                        <View style={styles.bottomBox}>
                            <Text style={styles.bikePointBalance}>BikePoint-Balance</Text>
                        </View>

                    </View>

                    <View style={styles.boxRight}>
                        <Pressable><Text style={styles.pointsHistory}>{'>'}</Text></Pressable>
                    </View>

                </View>

                <View style={styles.nameBox2}>
                    <Text style={styles.name}>Challenges</Text>
                </View>

                <ScrollView style={styles.list} horizontal>
                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/cyclist.png')} />
                        <Text style={styles.name}>Bikes rented</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/rent.png')} />
                        <Text style={styles.name}>Bikes 4 Rent</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/mountain-bike.png')} />
                        <Text style={styles.name}>Rentals</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/feedback.png')} />
                        <Text style={styles.name}>Feedback</Text>
                    </View>
                </ScrollView>

                <View style={styles.nameBox2}>
                    <Text style={styles.name}>Achievements</Text>
                </View>
                
                <ScrollView style={styles.list} horizontal>
                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/trophy-star.png')} />
                        <Text style={styles.name}>Welcome!</Text>
                    </View>

                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/trophy-star.png')} />
                        <Text style={styles.name}>First Rent</Text>
                    </View>

                    <View style={styles.scoreBox}>
                        <Image style={styles.image2} source={require('../../../assets/images/trophy-star.png')} />
                        <Text style={styles.name}>First Rental</Text>
                    </View>
                </ScrollView>

            </View>
            </ImageBackground>
        </>
  );

}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        height: '100%',
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    space:{
        height: 30,
    },
    list:{
        width: '100%',
        marginTop: 20,
        overflow: 'visible',
    },
    nameBox:{
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    nameBox2:{
        width: '100%',
        marginTop: -40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    name:{ 
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
        marginTop: 70,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    image2:{
        marginTop: 50,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    pointBox:{
        width: 'auto',
        height: 150,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    boxLeft:{
        width: '50%',
        height: '100%',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    boxRight:{
        width: '50%',
        height: '100%',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    pointsHistory:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        color: 'rgba(45,156,219,0.9)',
    },
    upperBox:{
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    bottomBox:{
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    points:{
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        paddingLeft: 10,
        color: 'rgba(45,156,219,0.9)',
    },
    bikePointBalance:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        paddingLeft: 10,
        color: 'black',
        textAlign: 'center',
    },
    scoreBox:{
        width: 150,
        height: 150,
        borderRadius: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(45,156,219,0.6)',
        marginLeft: 10,
    }
});