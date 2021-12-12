import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  screens,
  allStackNavigatorRoutes,
  trackAppLoginFlowRoutes,
  trackAppMainFlowRoutes,
  trackAppListRoutes,
} from './src/config/configurations';
import { Provider as BlogProvider } from './src/utils/context/BlogContext';
import { Provider as AuthProvider } from './src/utils/context/AuthContext';
import { setNavigator } from './src/utils/methods/navigationRef';

const switchNavigator = createSwitchNavigator(
  {
    trackApp: createSwitchNavigator({
      trackAppLoginFlow: createStackNavigator(trackAppLoginFlowRoutes),
      trackAppMainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator(trackAppListRoutes),
        ...trackAppMainFlowRoutes,
      }),
    }),
    ...allStackNavigatorRoutes,
  },
  {
    // initialRouteName: 'TrackAppSignin', // screens[0].screenTitle,
    defaultNavigationOptions: {
      title: 'React Native Tutorial',
    },
  }
);
// const navigator = createStackNavigator(allStackNavigatorRoutes, {
//   initialRouteName: screens[0].screenTitle,
//   defaultNavigationOptions: {
//     title: 'React Native Tutorial',
//   },
// });

const App = createAppContainer(switchNavigator);

// eslint-disable-next-line react/function-component-definition
export default function () {
  return (
    <AuthProvider>
      <BlogProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </BlogProvider>
    </AuthProvider>
  );
}
