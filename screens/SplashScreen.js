import { View, Text, StyleSheet, Image } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('onboarding1');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
        <Text style={styles.text}>FF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C14DD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 56,
    fontFamily: 'Inter',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 67.77,
    color: '#FFFFFF',
    position: 'absolute',
  },
});

export default SplashScreen;
