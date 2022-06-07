import * as React from "react"
import {View , Text,Button,TextInput} from "react-native"


function Emp2({route}){ 
  return(
<View>
    <Text>
    {route.params.nom && <Text> Pour {route.params.nom}</Text>}
     {route.params.d && <Text> Le {route.params.d}</Text>} 
        {route.params.j && <Text>  il va faire une temperature max de {route.params.j}</Text>}
        {route.params.n && <Text> et un temperature minimum de {route.params.n}</Text>}
        
    </Text>
  
</View>
          )
    
}
export default Emp2

    



