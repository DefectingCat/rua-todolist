import { Pressable, StyleSheet } from 'react-native';
import { RootTabScreenProps } from 'types';
import FeatherIcon from './FeatherIcon';
import { useAppSelector } from '../../hooks/useStore';
import { selectHeader } from 'features/theme/themeSlice';

const HeaderRight = ({ navigation }: Partial<RootTabScreenProps<'Home'>>) => {
  const headerTheme = useAppSelector(selectHeader);

  return (
    <Pressable
      onPress={() => navigation?.navigate('Modal')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        ...styles.container,
      })}
    >
      <FeatherIcon
        name="search"
        style={{ ...styles.icon, color: headerTheme.color }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingRight: 14,
  },
});

export default HeaderRight;
