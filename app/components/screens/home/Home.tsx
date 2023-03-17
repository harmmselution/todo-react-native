import { View } from 'react-native';
import { FC } from 'react';
import Todos from './todos/Todos';
const Home: FC = () => {
  return (
    <View>
      <Todos />
    </View>
  );
};

export default Home;
