import { Text, View } from './Themed';
import { StyleSheet } from 'react-native';
import { useAppSelector } from '../hooks/useStore';
import { selectHeader } from '../features/theme/themeSlice';

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
  const headerTheme = useAppSelector(selectHeader);
  const day = new Date().getDay();

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.day, color: headerTheme.color }}>
        {weekMap[day].toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  day: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HeaderDate;
