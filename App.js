import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screens, stackNavigatorRoutes } from './src/config/configurations';
import { BlogProvider } from './src/utils/context/BlogContext';

const navigator = createStackNavigator(stackNavigatorRoutes, {
  initialRouteName: screens[0].screenTitle,
  defaultNavigationOptions: {
    title: 'React Native Tutorial',
  },
});

const App = createAppContainer(navigator);

// eslint-disable-next-line react/function-component-definition
export default function () {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}
