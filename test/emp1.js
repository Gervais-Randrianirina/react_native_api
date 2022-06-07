import * as React from "react"
import {View , Text,Button,TextInput} from "react-native"

function af(){
  alert("ca marche")
}
function Emp1({navigation}){ 
  return(
<View>

    <Text>
       
        Mode d'emlpoi de la recherche de ville
    </Text>
    <Button
    title="affiche"
    onPress={()=>af()}
    /> 
</View>
          )
    
}
export default Emp1

    



