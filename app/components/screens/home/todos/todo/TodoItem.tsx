import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FC } from 'react';
import { ITodo } from '../../../../../../interfaces/todo.interface';

export interface ITodoItem {
  item: ITodo;
  toggleTodo: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = ({ item, toggleTodo }) => {
  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={item.isCompleted}
        onValueChange={() => toggleTodo(item._id)}
        color={item.isCompleted ? '#FEB94A' : undefined}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
  },
  checkbox: {
    marginRight: 8,
  },
});
export default TodoItem;
