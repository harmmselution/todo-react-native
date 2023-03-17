import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  SectionList,
} from 'react-native';
import { FC, useState, useEffect } from 'react';
const Home: FC = () => {
  const [item, setItem] = useState('');
  const updateText = (text: string) => {
    setItem(text);
  };

  return <View></View>;
};

export default Home;
