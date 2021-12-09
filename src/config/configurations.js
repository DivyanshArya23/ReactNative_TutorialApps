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
import TrackAppAccounts from '../screens/TrackApp/Accounts';
import TrackAppSignin from '../screens/TrackApp/Signin';
import TrackAppSignup from '../screens/TrackApp/Signup';
import TrackAppTrackCreate from '../screens/TrackApp/TrackCreate';
import TrackAppTrackDetail from '../screens/TrackApp/TrackDetail';
import TrackAppTrackList from '../screens/TrackApp/TrackList';
import createNavigationRoutes from '../utils/methods/createNavigationRoutes';

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
  //   TrackApp Screens
  {
    screenTitle: 'TrackAppAccounts',
    component: TrackAppAccounts,
  },
  {
    screenTitle: 'TrackAppSignin',
    component: TrackAppSignin,
  },
  {
    screenTitle: 'TrackAppSignup',
    component: TrackAppSignup,
  },
  {
    screenTitle: 'TrackAppTrackCreate',
    component: TrackAppTrackCreate,
  },
  {
    screenTitle: 'TrackAppTrackDetail',
    component: TrackAppTrackDetail,
  },
  {
    screenTitle: 'TrackAppTrackList',
    component: TrackAppTrackList,
  },
];

export const allStackNavigatorRoutes = createNavigationRoutes(screens);

const trackAppLoginScreens = ['TrackAppSignin', 'TrackAppSignup'];
export const trackAppLoginFlowRoutes = createNavigationRoutes(
  screens,
  trackAppLoginScreens
);

const trackAppMainFlowScreens = ['TrackAppAccounts', 'TrackAppTrackCreate'];
export const trackAppMainFlowRoutes = createNavigationRoutes(
  screens,
  trackAppMainFlowScreens
);
const trackAppListScreens = ['TrackAppTrackList', 'TrackAppTrackDetail'];
export const trackAppListRoutes = createNavigationRoutes(
  screens,
  trackAppListScreens
);
