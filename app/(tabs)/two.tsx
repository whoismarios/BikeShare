import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';
import {styles} from './../stylesheets/mapStyleSheet';

import Map from '../../components/map/map';

export default function TabTwoScreen() {
  return (
    <>
      <Map />
    </>
  );
}


