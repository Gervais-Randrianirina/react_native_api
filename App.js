
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Test from "./test/test.js"
import Meteo from "./Meteo/meteo.js";
 const Tab=  createBottomTabNavigator();

class App extends React.Component {   
 render (){

        return(
    
<NavigationContainer>
<Tab.Navigator>
        <Tab.Screen name="MAP" component={Test} />
        <Tab.Screen name="METEO" component={Meteo} />
</Tab.Navigator>
    
</NavigationContainer>





        )
    }    
}
export default App;
