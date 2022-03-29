import React from 'react';
import {Colors, Text, View} from 'react-native-ui-lib';

const Counter = (prop: Props) => {
  return (
    <>
      <View flex center backgroundColor={Colors.white} br20 height={100}>
        <Text text30>{prop.count}</Text>
        <Text>{prop.title}</Text>
      </View>
    </>
  );
};

type Props = {
  count: number;
  title: string;
};

export default Counter;
