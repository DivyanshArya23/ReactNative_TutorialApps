import AppHomeScreen from '../screens/AppHomeScreen';
import DemoAppHome from '../screens/DemoApp/HomeScreen';
import DempAppComponentScreen from '../screens/DemoApp/ComponentScreen';
import DempAppListScreen from '../screens/DemoApp/ListScreen';
import DempAppImageScreen from '../screens/DemoApp/ImageScreen';
import DemoAppCounterScreen from '../screens/DemoApp/CounterScreen';
import DemoAppColorScreen from '../screens/DemoApp/ColorScreen';
import DemoAppSquareScreen from '../screens/DemoApp/SquareScreen';
import DemoAppSquareScreen2 from '../screens/DemoApp/SquareScreen2';
import DemoAppTextScreen from '../screens/DemoApp/TextScreen';
import DemoAppBoxScreen from '../screens/DemoApp/BoxScreen';
import FoodAppHome from '../screens/FoodApp/FoodAppHome';
import FoodAppBusinessShowScreen from '../screens/FoodApp/BusinessShowScreen';
import BlogAppHome from '../screens/BlogApp/BlogAppHome';
import ShowBlogScreen from '../screens/BlogApp/ShowBlogScreen';
import CreateBlogScreen from '../screens/BlogApp/CreateBlog';
import EditBlogScreen from '../screens/BlogApp/EditBlogScreen';

export const screens = [
  // App Home Screen must be at top
  {
    screenTitle: 'AppHome',
    component: AppHomeScreen,
  },

  // DemoApp Screens
  {
    screenTitle: 'DemoApp-Home',
    component: DemoAppHome,
  },
  {
    screenTitle: 'DemoApp-ComponentScreen',
    component: DempAppComponentScreen,
  },
  {
    screenTitle: 'DemoApp-ListScreen',
    component: DempAppListScreen,
  },
  {
    screenTitle: 'DemoApp-ImageScreen',
    component: DempAppImageScreen,
  },
  {
    screenTitle: 'DemoApp-CounterScreen',
    component: DemoAppCounterScreen,
  },
  {
    screenTitle: 'DemoApp-ColorScreen',
    component: DemoAppColorScreen,
  },
  {
    screenTitle: 'DemoApp-SquareScreen',
    component: DemoAppSquareScreen,
  },
  {
    screenTitle: 'DemoApp-SquareScreen2',
    component: DemoAppSquareScreen2,
  },
  {
    screenTitle: 'DemoApp-TextScreen',
    component: DemoAppTextScreen,
  },
  {
    screenTitle: 'DemoApp-BoxScreen',
    component: DemoAppBoxScreen,
  },

  //   FoodApp Screens
  {
    screenTitle: 'FoodApp-Home',
    component: FoodAppHome,
  },
  {
    screenTitle: 'FoodAppBusinessResult',
    component: FoodAppBusinessShowScreen,
  },
  //   BlogApp Screens
  {
    screenTitle: 'BlogApp-Home',
    component: BlogAppHome,
  },
  {
    screenTitle: 'BlogApp-ShowBlogScreen',
    component: ShowBlogScreen,
  },
  {
    screenTitle: 'BlogApp-CreateBlogScreen',
    component: CreateBlogScreen,
  },
  {
    screenTitle: 'BlogApp-EditBlog',
    component: EditBlogScreen,
  },
];

export const stackNavigatorRoutes = screens.reduce((prev, curr) => {
  return { ...prev, [curr.screenTitle]: curr.component };
}, {});
