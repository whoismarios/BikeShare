import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';

import { styles } from '../stylesheets/bikesStyleSheets';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BikeCompany from '../../components/bikeCompany/bikeCompany';
import { BikeCompanyType } from '../types/types';
import { bikeCompanyData } from '../dummyData/bikeCompanyData';
import { newBikes } from '../dummyData/newBike';
import NewItem from '../../components/newItem/NewItem';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
  return <FontAwesome size={45} {...props} />;
}


export default function TabThreeScreen() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <View style={styles.searchBar}>
        <View style={styles.searchField}>
           <TabBarIcon name="search" color="black" />
           <TextInput placeholder='Search for Bikes' 
                      placeholderTextColor='grey' 
                      style={styles.inputField} 
                      value={searchTerm} 
                      onChangeText={setSearchTerm} 
            />
        </View>
      </View>

      <ScrollView style={styles.brandFilter} bounces={true} horizontal={true}>
        {bikeCompanyData.map((bikeCompany: BikeCompanyType) => {
          return (
            <BikeCompany key={bikeCompany.id} BikeCompany={bikeCompany} />
          );
        })}
      </ScrollView>

      <ScrollView style={styles.bikeContainer} bounces={true} horizontal={true}>
        {newBikes.map((bike) => {
          return (
            <NewItem key={bike.id} bike={bike}  />
          );
        })}
      </ScrollView>
    </>
  );
}