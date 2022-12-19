import { Button, StyleSheet } from 'react-native';
import { View } from 'components/Themed';
import { RootTabScreenProps } from '../types';
import Empty from 'components/HomeScreen/Empty';
import { useAppDispatch } from '../hooks/useStore';
import { changeHeader, changeMainColor } from '../features/theme/themeSlice';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Empty />
      <View>
        <Button
          title={'test'}
          onPress={() => {
            dispatch(changeMainColor('blue'));
            dispatch(
              changeHeader({
                color: '#fff',
              })
            );
          }}
        />
      </View>
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
