import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./s/screens/HomeScreen";
import ListFunction from "./s/components/FlatList";
import ImageComponents from "./s/components/ImageComponents";
import ImageScreen from "./s/screens/ImageScreen";
import CounterScreen from "./s/screens/Counter";
import ColorScreen from "./s/screens/ColorScreen2";
import ColorAdjustmentScreen from "./s/screens/ColorAdjustmentScreen";
import ColorAdjustmentScreen1 from "./s/screens/ColorAdjustmentScreen2";
import CounterUseReduce from "./s/screens/CounterUseReduce";

//react-navigation & navigation-stack are v4 of navigation library
//@react-navigation-stack is v5
const navigator= createStackNavigator(
    {
        Home:HomeScreen,
        Flat: ListFunction,
        Image:ImageScreen,
        Count: CounterScreen,
        Color:ColorScreen,
        Coloradscreen:ColorAdjustmentScreen,
        Coloradscreen1:ColorAdjustmentScreen1,
        Counterred:CounterUseReduce



    },
    {
        initialRouteName:"Counterred",
        defaultNavigationOptions:{
            title:"App"
        }
    }
);
 export default createAppContainer(navigator);