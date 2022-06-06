import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Input from "../login/boutton";
import Inputs from "../login/inputs";
import { Button, View , Text} from "react-native";
const Auth = createNativeStackNavigator();

export default class Test extends React.Component {
    render(){
        return(
<NavigationContainer>
    <Auth.Navigator>
        <Auth.Screen name="numero1" component={Input}/>
        <Auth.Screen name="numero2" component={Inputs}/>

    </Auth.Navigator>
</NavigationContainer>

        )
    }
}