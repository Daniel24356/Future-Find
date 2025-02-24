import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.blurryCircle} /> */}
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
  blurryCircle: {
    width: 136,
    height: 136,
    borderRadius: 68, 
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    position: 'absolute',
    top: 343,
    left: 223,
    transform: [{ rotate: '-180deg' }], 
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.7,
    shadowRadius: 20,
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
