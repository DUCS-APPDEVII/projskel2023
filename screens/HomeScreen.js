import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>MyWeather Home Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen