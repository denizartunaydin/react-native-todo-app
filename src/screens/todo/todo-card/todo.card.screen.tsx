import React, {useEffect, useState} from 'react';
import {Button, Colors, Text, TextField, View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Todo} from '../../../dtos/todo';
import {addTodo, deleteTodo, updateTodo} from '../store/todo.action';
import {TodoStateModel} from '../store/todo.store';

import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';

const TodoCardScreen = (prop: Props) => {
  const navigation = useNavigation();

  const [todo, setTodo] = useState<Todo>({
    id: uuidv4(),
    desc: '',
    isChecked: false,
  });

  useEffect(() => {
    if (prop.selectedTodo) {
      setTodo({
        ...todo,
        ...prop.selectedTodo,
      });
    }
  }, []);

  const save = () => {
    if (prop.selectedTodo) {
      prop.updateTodo(todo);
    } else {
      prop.addTodo(todo);
    }

    navigation.goBack();
  };

  const del = () => {
    if (prop.selectedTodo) {
      prop.deleteTodo(prop.selectedTodo.id);
    }

    navigation.goBack();
  };

  return (
    <>
      <View backgroundColor={'#fff'} flex center padding-20>
        <View width={'100%'}>
          <TextField
            text70
            floatingPlaceholder
            placeholder="Description"
            value={todo.desc}
            multiline={true}
            onChange={(input: any) => {
              setTodo({...todo, desc: input.nativeEvent.text});
            }}
          />
        </View>

        <View row>
          <View flex padding-2>
            <Button
              onPress={() => del()}
              label={'Delete'}
              size={Button.sizes.medium}
              backgroundColor={Colors.red30}
            />
          </View>
          <View flex padding-2>
            <Button
              onPress={() => save()}
              label={'Save'}
              size={Button.sizes.medium}
              backgroundColor={Colors.green30}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = ({todo}: {todo: TodoStateModel}) => ({
  selectedTodo: todo.selectedTodo,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (payload: Todo) => dispatch(addTodo(payload)),
  updateTodo: (payload: Todo) => dispatch(updateTodo(payload)),
  deleteTodo: (payload: string) => dispatch(deleteTodo(payload)),
});

type Props = {
  selectedTodo: Todo | null;
  addTodo: (payload: Todo) => any;
  updateTodo: (payload: Todo) => any;
  deleteTodo: (payload: string) => any;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoCardScreen);
