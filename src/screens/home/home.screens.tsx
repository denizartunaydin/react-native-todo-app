import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform, RefreshControl, ViewStyle} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {Todo} from '../../dtos/todo';
import {getTodo, selectTodo} from '../todo/store/todo.action';
import {TodoStateModel} from '../todo/store/todo.store';
import Counter from './components/counter.component';
import TodoItem from './components/todo.item.component';

const HomeScreen = (prop: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    prop.getTodo();
  });

  let iosBar: ViewStyle = {};
  if (Platform.OS === 'ios') {
    iosBar = {paddingTop: 50};
  }

  const renderItem = ({item}: {item: Todo}) => {
    return (
      <>
        <TodoItem item={item}></TodoItem>
      </>
    );
  };

  return (
    <>
      <View
        row
        backgroundColor="#ffff"
        paddingH-10
        paddingV-15
        centerV
        style={{...iosBar}}>
        <View>
          <Text text70>To do</Text>
        </View>
        <TouchableOpacity
          flex
          right
          onPress={() => {
            prop.selectTodo(null);
            navigation.navigate('TodoCard' as never, {} as never);
          }}>
          <Text text70>+ Add</Text>
        </TouchableOpacity>
      </View>

      <View padding-10 row spread>
        <Counter title="Active" count={prop.activeCount}></Counter>
        <View style={{flex: 0.1}} />
        <Counter title="Done" count={prop.doneCount}></Counter>
      </View>

      <FlatList
        style={{padding: 10}}
        data={prop.todo}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.desc}
      />
    </>
  );
};

const mapStateToProps = ({todo}: {todo: TodoStateModel}) => ({
  todo: todo.todo,
  activeCount: todo.activeCount,
  doneCount: todo.doneCount,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectTodo: (payload: Todo | null) => dispatch(selectTodo(payload)),
  getTodo: () => dispatch(getTodo()),
});

type Props = {
  todo: Todo[];
  activeCount: number;
  doneCount: number;
  getTodo: () => any;
  selectTodo: (payload: Todo | null) => any;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
