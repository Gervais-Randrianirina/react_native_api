import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input2 from "./Input2";
import Emp2 from "./emp2";
const Auth2 = createNativeStackNavigator();

export default class Meteo extends React.Component {
    render(){
        return(

    <Auth2.Navigator>
        <Auth2.Screen name="Méteo d'une ville" component={Input2}/>
        <Auth2.Screen name="Mode2" component={Emp2}/>
        

    </Auth2.Navigator>


        )
    }
}