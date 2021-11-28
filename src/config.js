import SearchScreen from "./SearchScreen";

export const screens = [
  {
    screenTitle: "Search",
    component: SearchScreen,
  },
  {
    screenTitle: "Search2",
    component: "SearchScreen2",
  },
  {
    screenTitle: "Search3",
    component: "SearchScreen3",
  },
  {
    screenTitle: "Search4",
    component: "SearchScreen4",
  },
];

export const stackNavigatorRoutes = screens.reduce((prev, curr) => {
  return { ...prev, [curr.screenTitle]: curr.component };
}, {});
