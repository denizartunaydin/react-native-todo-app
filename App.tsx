import React from 'react';
import {Provider} from 'react-redux';
import UserLayout from './src/layouts/user.layout';
import store from './src/store/appStore';
import 'react-native-get-random-values';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserLayout></UserLayout>
      </Provider>
    </>
  );
};

export default App;
