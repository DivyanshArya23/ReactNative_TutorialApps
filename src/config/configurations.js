import SearchScreen from '../screens/SearchScreen';

export const screens = [
  {
    screenTitle: 'Search',
    component: SearchScreen,
  },
];

export const stackNavigatorRoutes = screens.reduce((prev, curr) => {
  return { ...prev, [curr.screenTitle]: curr.component };
}, {});
