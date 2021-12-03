import BusinessShowScreen from '../screens/BusinessShowScreen';
import SearchScreen from '../screens/SearchScreen';

export const screens = [
  {
    screenTitle: 'Search',
    component: SearchScreen,
  },
  {
    screenTitle: 'BusinessResult',
    component: BusinessShowScreen,
  },
];

export const stackNavigatorRoutes = screens.reduce((prev, curr) => {
  return { ...prev, [curr.screenTitle]: curr.component };
}, {});
