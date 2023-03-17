import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FC, useState } from 'react';
import { ITodo } from '../../../../../interfaces/todo.interface';
import TodoItem from './todo/TodoItem';

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo._id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    );
  };

  return (
    <View>
      <Text> Todos </Text>
      {todos.map((todo) => (
        <TodoItem item={todo} key={todo._id} toggleTodo={toggleTodo} />
      ))}
    </View>
  );
};

export default Todos;
