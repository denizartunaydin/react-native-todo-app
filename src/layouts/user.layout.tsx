import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home.screens';
import TodoCardScreen from '../screens/todo/todo-card/todo.card.screen';

const Stack = createNativeStackNavigator();

function UserLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoCard" component={TodoCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default UserLayout;
