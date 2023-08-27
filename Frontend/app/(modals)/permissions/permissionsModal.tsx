import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <>
        <View style={styles.container}>

            <Text style={styles.title}>Permissions</Text>

            <View style={styles.permissionBox}>
                <Text>GPS Permission</Text>
                <View style={styles.rightBox}>
                    <Text>{isEnabled ? 'On' : 'Off'}</Text>
                    <Pressable
                        style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
                        onPress={toggleSwitch}
                    >
                        <View style={[styles.toggleIndicator, isEnabled && styles.toggleIndicatorOn]} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.permissionBox}>
                <Text>Notifications</Text>
                <View style={styles.rightBox}>
                    <Text>{isEnabled ? 'On' : 'Off'}</Text>
                    <Pressable
                        style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
                        onPress={toggleSwitch}
                    >
                        <View style={[styles.toggleIndicator, isEnabled && styles.toggleIndicatorOn]} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.permissionBox}>
                <Text>Camera</Text>
                <View style={styles.rightBox}>
                    <Text>{isEnabled ? 'On' : 'Off'}</Text>
                    <Pressable
                        style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
                        onPress={toggleSwitch}
                    >
                        <View style={[styles.toggleIndicator, isEnabled && styles.toggleIndicatorOn]} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.permissionBox}>
                <Text>Storage Permission</Text>
                <View style={styles.rightBox}>
                    <Text>{isEnabled ? 'On' : 'Off'}</Text>
                    <Pressable
                        style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
                        onPress={toggleSwitch}
                    >
                        <View style={[styles.toggleIndicator, isEnabled && styles.toggleIndicatorOn]} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.permissionBox}>
                <Text>Sensor Permission</Text>
                <View style={styles.rightBox}>
                    <Text>{isEnabled ? 'On' : 'Off'}</Text>
                    <Pressable
                        style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
                        onPress={toggleSwitch}
                    >
                        <View style={[styles.toggleIndicator, isEnabled && styles.toggleIndicatorOn]} />
                    </Pressable>
                </View>
            </View>

        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  permissionBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  rightBox:{
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
  toggleButton: {
    width: 60,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 3,
  },
  toggleButtonOn: {
    backgroundColor: 'green',
  },
  toggleIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  toggleIndicatorOn: {
    marginLeft: '55%',
  },
});

export default ToggleSwitch;
