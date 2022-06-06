
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Inputs from "./login/inputs.js";
import Input from "./login/boutton.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "./test/test.js"
/* const Tab=  createBottomTabNavigator();
*/
class App extends React.Component {   
 render (){

        return(
    
/* <NavigationContainer>
<Tab.Navigator>
        <Tab.Screen name="Login" component={Inputs} />
        <Tab.Screen name="Settings" component={Input} />
</Tab.Navigator>
    
</NavigationContainer>
 */
<Test/>



        )
    }    
}
export default App;
