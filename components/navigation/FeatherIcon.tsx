import { Feather } from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';
import { ComponentProps } from 'react';

const FeatherIcon = (props: {
  name: ComponentProps<typeof Feather>['name'];
  color?: string;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <>
      <Feather size={20} {...props} />
    </>
  );
};

export default FeatherIcon