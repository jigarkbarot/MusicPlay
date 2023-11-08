import {View, Text} from 'react-native';
import React from 'react';

import {store} from './src/store/store';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigator/AppNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </View>
  );
};

export default App;
