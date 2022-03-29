import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ViewStyle} from 'react-native';
import {Checkbox, Text, View, TouchableOpacity} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Todo} from '../../../dtos/todo';
import {selectTodo, updateTodo} from '../../todo/store/todo.action';

const TodoItem = (prop: Props) => {
  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate('TodoCard' as never, {} as never);
    prop.selectTodo(prop.item);
  };

  return (
    <>
      <View row backgroundColor="white" marginB-15 br20 padding-10 centerV>
        <TouchableOpacity flex row onPress={() => goDetail()}>
          <Checkbox
            marginR-10
            value={prop.item.isChecked}
            onValueChange={() =>
              prop.updateTodo({...prop.item, isChecked: !prop.item.isChecked})
            }
          />

          <View flex row width={'95%'}>
            <Text
              style={{
                textDecorationLine: prop.item.isChecked
                  ? 'line-through'
                  : 'none',
              }}>
              {prop.item.desc}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = ({}: {}) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  selectTodo: (payload: Todo) => dispatch(selectTodo(payload)),
  updateTodo: (payload: Todo) => dispatch(updateTodo(payload)),
});

type Props = {
  item: Todo;
  selectTodo: (payload: Todo) => any;
  updateTodo: (payload: Todo) => any;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
