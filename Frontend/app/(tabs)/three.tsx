import { ImageBackground, Pressable, TextInput, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import React, { useEffect, useState } from 'react';

import { ScrollView, FlatList } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BikeCompany from '../../components/bikeCompany/bikeCompany';
import { BikeCompanyType } from '../types/types';
import { bikeCompanyData } from '../dummyData/bikeCompanyData';
import { newBikes } from '../dummyData/newBike';
import AllBikes from '../../components/allBikes/allBikes';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
  return <FontAwesome size={30} {...props} />;
}


export default function TabThreeScreen() {

  const [searchTerm, setSearchTerm] = useState('');

  const [filterOptionsVisible, setFilterOptionsVisibility] = useState(false);

  const [chosenSize, setChosenSize] = useState('');

  const [chosenBrand, setChosenBrand] = useState('');

  const [filteredBikes, setFilteredBikes] = useState(newBikes);

  const [filterIsApplied, setFilterIsApplied] = useState(false);

  const toggleFilterOptionsVisibility = () => {
    setFilterOptionsVisibility(!filterOptionsVisible);

    if(filterOptionsVisible) {
      styles.bikeSizeContainer.display = 'none';
      styles.brandFilter.display = 'none';
    }else{
      styles.bikeSizeContainer.display = 'flex';
      styles.brandFilter.display = 'flex';
    }
  }

  function applyFilters(selectedSize: string, selectedBrand: string) {
    const filteredBikes = newBikes.filter((bike) => {
      const sizeCondition = selectedSize === "" || selectedSize === undefined || selectedSize === null || bike.size === selectedSize;
      const brandCondition = selectedBrand === "" || selectedBrand === undefined || selectedBrand === null || bike.brand === selectedBrand;
  
      return sizeCondition && brandCondition;
    });

    if(chosenBrand && chosenSize === "" ){
      setFilterIsApplied(false);
    }else{
      setFilterIsApplied(true);
    }

    setChosenSize(selectedSize);
    setChosenBrand(selectedBrand);
  
    setFilteredBikes(filteredBikes);
  }  

  useEffect(() => {
  }, [chosenSize, chosenBrand]);

  const styles: any = StyleSheet.create({
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
        height: '15%',
        width: '100%',
        display: filterOptionsVisible ? 'flex' : 'none',
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
        marginTop: '2.5%',
        height: '5%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.8)',
        display: filterOptionsVisible ? 'flex' : 'none',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    bikeSizeText:{
        width: 50, 
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 17,
        backgroundColor: 'transparent',
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        textAlign: 'center',
    },
    appliedFilterBox:{
      height: '5%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(255,255,255,0.8)',
      display: filterOptionsVisible ? 'flex' : 'none',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'black',
      marginTop: '2.5%',
    },
    appliedFilterText:{
      width: 'auto', 
      marginLeft: '5%',
      marginRight: '5%',
      fontSize: 17,
      backgroundColor: 'transparent',
      color: 'black',
      textAlign: 'center',
    },
    appliedFilterButton:{
      width: 'auto', 
      marginLeft: '5%',
      marginRight: '5%',
      fontSize: 17,
      backgroundColor: 'transparent',
      color: 'black',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      textAlign: 'center',
      display: filterIsApplied ? 'flex' : 'none',
    },
});


  return (
    <>
    <ImageBackground resizeMode='cover' source={require('./../../assets/images/mtb.webp')} style={styles.backgroundImage}>
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
        <Pressable style={styles.filterButton} onPress={toggleFilterOptionsVisibility}>
          <TabBarIcon name="filter" color="white" />
        </Pressable>
        
      </View>

      <ScrollView style={styles.brandFilter} bounces={false} horizontal={true}>
        {bikeCompanyData.map((bikeCompany: BikeCompanyType) => {
          return (
            <BikeCompany key={bikeCompany.id} BikeCompany={bikeCompany} onPress={() => applyFilters(chosenSize, bikeCompany.name)}/>
          );
        })}
      </ScrollView>

      <View style={styles.bikeSizeContainer}>
  <Pressable onPress={() => applyFilters("S", chosenBrand)}>
    <Text style={styles.bikeSizeText}>S</Text>
  </Pressable>
  
  <Pressable onPress={() => applyFilters("M", chosenBrand)}>
    <Text style={styles.bikeSizeText}>M</Text>
  </Pressable>

  <Pressable onPress={() => applyFilters("L", chosenBrand)}>
    <Text style={styles.bikeSizeText}>L</Text>
  </Pressable>

  <Pressable onPress={() => applyFilters("XL", chosenBrand)}>
    <Text style={styles.bikeSizeText}>XL</Text>
  </Pressable>

  <Pressable onPress={() => applyFilters("", chosenBrand)}>
    <Text style={styles.bikeSizeText}>All</Text>
  </Pressable>
</View>

<View style={styles.appliedFilterBox}>

  <Text style={styles.appliedFilterText}>Applied Filters:</Text>

  {chosenSize !== null && chosenSize !== undefined && (
  <Pressable style={styles.appliedFilterButton} onPress={() => applyFilters("", chosenBrand)}>
    <Text style={styles.appliedFilterText}>{chosenSize}</Text>
  </Pressable>)}
  

  {chosenBrand !== null && chosenBrand !== undefined && (
  <Pressable style={styles.appliedFilterButton} onPress={() => applyFilters(chosenSize, "")}>
    <Text style={styles.appliedFilterText}>{chosenBrand}</Text>
  </Pressable>)}

</View>


      <FlatList
        style={styles.bikeContainer}
        data={filteredBikes}
        keyExtractor={(bike) => bike.id.toString()}
        renderItem={({ item: bike }) => <AllBikes bike={bike} />}
      />

      </ImageBackground>
    </>
  );

}

