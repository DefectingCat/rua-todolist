import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';

const weekMap = [
  'Err',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const HeaderDate = () => {
  const day = new Date().getDay();

  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.day}>{weekMap[day].toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6a6a6a',
  },
});

export default HeaderDate;
