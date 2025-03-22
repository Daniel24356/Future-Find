import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Custom2Button = ({ title, onPress, backgroundColor = '#007BFF', textColor = '#fff', textFont = 17, borderRadius = 21, height = 65, opacity = 0 }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }, { borderRadius }, { height }, {opacity}]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize: textFont }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Custom2Button;
