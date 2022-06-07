import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input from "./boutton";
import Emp1 from "./emp1";
import Resulta1 from "./resultat1";
const Auth = createNativeStackNavigator();

export default class Test extends React.Component {
    render(){
        return(

    <Auth.Navigator>
        <Auth.Screen name="Ville d'un Etat" component={Input}/>
        <Auth.Screen name="Mode" component={Emp1}/>
        <Auth.Screen name="resultat" component={Resulta1}/>

    </Auth.Navigator>


        )
    }
}