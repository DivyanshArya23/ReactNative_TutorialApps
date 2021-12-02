import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screens, stackNavigatorRoutes } from './src/config/configurations';

const navigator = createStackNavigator(stackNavigatorRoutes, {
  initialRouteName: screens[0].screenTitle,
  defaultNavigationOptions: {
    title: 'Business Search',
  },
});

export default createAppContainer(navigator);
