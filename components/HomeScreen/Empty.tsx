import { StyleSheet } from 'react-native';
import { View, Text } from '../Themed';

const HeaderDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.none}>Nothing here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  none: {
    fontSize: 17,
    color: '#aeaeae',
  },
});

export default HeaderDate;
