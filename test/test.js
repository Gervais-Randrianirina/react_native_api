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
        <Auth.Screen name="Division d'un pays" component={Input}/>
        <Auth.Screen name="resultat" component={Emp1}/>
        <Auth.Screen name="Methode" component={Resulta1}/>

    </Auth.Navigator>


        )
    }
}
