import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import Exercise from "./src/screens/Excercise";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ScreenCounter from "./src/screens/ScreenCounter";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreen: ListScreen,
    Exercise: Exercise,
    ImageScreen: ImageScreen,
    ScreenCounter: ScreenCounter,
    ColorScreen : ColorScreen,
    SquareScreen : SquareScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
