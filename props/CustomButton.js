import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, width, height, borderRadius, padding, onPress, backgroundColor = '#007BFF', textColor = '#fff' }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }, {width}, {height}, {borderRadius}, {padding}]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
