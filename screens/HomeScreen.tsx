import { StyleSheet } from 'react-native';
import { Text, View } from 'components/Themed';
import { RootTabScreenProps } from '../types';
import EditScreenInfo from 'components/EditScreenInfo';
import Empty from 'components/HomeScreen/Empty';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Empty />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
