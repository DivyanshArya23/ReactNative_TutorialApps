import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  screens,
  allStackNavigatorRoutes,
  trackAppLoginFlowRoutes,
  trackAppMainFlowRoutes,
  trackAppListRoutes,
} from './src/config/configurations';
import { Provider as BlogProvider } from './src/utils/context/BlogContext';
import { Provider as AuthProvider } from './src/utils/context/AuthContext';
import { Provider as LocationProvider } from './src/utils/context/locationContext';
import { Provider as TrackProvider } from './src/utils/context/TrackContext';
import { setNavigator } from './src/utils/methods/navigationRef';

const trackListFlow = createStackNavigator(trackAppListRoutes);
trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <Ionicons name="list" size={24} color="black" />,
};

const switchNavigator = createSwitchNavigator(
  {
    trackApp: createSwitchNavigator({
      trackAppLoginFlow: createStackNavigator(trackAppLoginFlowRoutes),
      trackAppMainFlow: createBottomTabNavigator({
        trackListFlow,
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <BlogProvider>
            <App
              ref={(navigator) => {
                setNavigator(navigator);
              }}
            />
          </BlogProvider>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
