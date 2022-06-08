import * as React from "react"
import {View , Text,Button,TextInput} from "react-native"


function Emp2({route}){ 
  return(
<View>
    <Text>
    {route.params.nom && <Text
    style={{
      fontSize:20
    }}
    > Pour {route.params.nom}</Text>}
     {route.params.d && <Text
     
     style={{
       fontSize:20,
       color:'red'
     }}
     > Le {route.params.d}</Text>} 
        {route.params.j && <Text
        style={{
          fontSize:17,
          color:'blue'
        }}
        >  il va faire une temperature max de {route.params.j} °C</Text>}
        {route.params.n && <Text
        style={{
          fontSize:17,
          color:'green'
        }}
        > et un temperature minimum de {route.params.n} °C</Text>}
        
    </Text>
  
</View>
          )
    
}
export default Emp2

    



