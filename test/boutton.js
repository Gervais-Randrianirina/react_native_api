import * as React from "react"
import {View , Text,Button,TextInput} from "react-native"
const State ={
  symbole:null,
  ville:null
}
function Stt (text){
State.symbole= text
}
function affiche(){
alert(State.symbole)
}


function Input({navigation}){ 
  return(
<View>
    <Text>
        Veuillez enter le symbole:
    </Text>
    <TextInput
    placeholder="Symbole"
    onChangeText={(text)=>Stt(text)}
    />
    <Button
    title="Valider"
    onPress={()=>affiche()}
  
    />
    <Button
    title="Mode d'emploi"
    onPress={()=> navigation.push('Mode')}
    />
</View>
          )
    
}
export default Input

    



