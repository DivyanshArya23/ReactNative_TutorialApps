import ResultShowScreen from '../screens/ResultShowScreen';
import SearchScreen from '../screens/SearchScreen';

export const screens = [
  {
    screenTitle: 'Search',
    component: SearchScreen,
  },
  {
    screenTitle: 'SearchResult',
    component: ResultShowScreen,
  },
];

export const stackNavigatorRoutes = screens.reduce((prev, curr) => {
  return { ...prev, [curr.screenTitle]: curr.component };
}, {});
