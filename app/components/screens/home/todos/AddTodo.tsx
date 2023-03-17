import { View, Text, Pressable, TextInput } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { useState, FC } from 'react';
import { ITodo } from '../../../../../interfaces/todo.interface';

interface IAddTodo {
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const AddTodo: FC<IAddTodo> = ({ setTodos }) => {
  const [todoName, setTodoName] = useState('');
  const addTodo = () => {
    if (todoName !== '') {
      setTodos((prev) => [...prev, { _id: prev.length, isCompleted: false, name: todoName }]);
    }
  };
  return (
    <View>
      <TextInput value={todoName} onChangeText={setTodoName} placeholder="What needs to be done?" />
      <Pressable onPress={() => addTodo()}>
        <Text> Add Todo </Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;
