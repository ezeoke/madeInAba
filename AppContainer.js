import {createAppContainer, createStackNavigator} from 'react-navigation';
import MenuDrawer from './src/components/MenuDrawer';
import Home from './src/components/Home';

const AppNavigator = createStackNavigator(
  {MenuDrawer, Home},
  {initialRouteName: 'Home'},
);

AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
