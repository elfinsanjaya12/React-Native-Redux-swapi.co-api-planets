import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import SecondScreen from './screens/Second';
import { Provider } from 'react-redux';
import store from './store';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  }
}, {
  initialRootName: 'Home'
});

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
    );
  }
};

export default App