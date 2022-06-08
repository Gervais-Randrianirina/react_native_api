
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Test from "./test/test.js"
import Meteo from "./Meteo/meteo.js";
 const Tab=  createBottomTabNavigator();

class App extends React.Component {   
 render (){

        return(
    
<NavigationContainer>
<Tab.Navigator
screenOptions={{headerShown: false 
}}
>
        <Tab.Screen 
         options={{

                tabBarIcon: () => (<Image source={require("./img/div.png")} style={{width: 40, height: 40}} />)

            }}
        name="DIVISION D'UN PAYS" component={Test} />
        <Tab.Screen
         options={{

                tabBarIcon: () => (<Image source={require("./img/meteo.jpg")} style={{width: 35, height: 30}} />)

            }}
        name="CLIMAT D'UN PAYS" component={Meteo} />
</Tab.Navigator>
    
</NavigationContainer>





        )
    }    
}
export default App;
