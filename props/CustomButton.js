import { TouchableOpacity, Text, StyleSheet } from 'react-native';

<<<<<<< HEAD
const CustomButton = ({ title, width, height, borderRadius, padding, onPress, backgroundColor = '#007BFF', textColor = '#fff' }) => {
=======
const CustomButton = ({ title, onPress, backgroundColor, textColor = '#fff' }) => {
>>>>>>> 337aa36b92bec2645246c317f061c398a9572358
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
<<<<<<< HEAD
=======
    width: '100%',
    padding: 15,
    borderRadius: 16,
>>>>>>> 337aa36b92bec2645246c317f061c398a9572358
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
