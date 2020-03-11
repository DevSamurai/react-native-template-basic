import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Colors from '~/styles/colors';

const Main = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://devsamurai-materials.s3.amazonaws.com/templates/dev-samurai-white.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Fala Samurai!</Text>
      <Text style={styles.message}>
        Esse é o template básico da DevSamurai para React Native.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.devSamurai,
  },
  logo: {
    width: 280,
    height: 210,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
  },
  message: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default Main;
