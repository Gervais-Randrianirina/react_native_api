import * as React from "react"
import {View , Text,Button,TextInput,ScrollView} from "react-native"
import axios from "axios"
const State ={
  pays:'',
  donee:null,
  moi:12.1
}
function Stt (text){
State.pays= text
}
function affiche(){
alert(State.pays)
}
function met(){
  axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+State.pays+'&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf')
  .then( (response)=>{
    console.log(State.pays)
    State.donee = response.data
    State.moi=State.donee.list[0].temp.day
    console.log(typeof(State.donee.list[0].temp.day))
    console.log(State.moi)
  })
  
  
}
function Input2({navigation}){ 
  return(

<View>
  <ScrollView>
  <Text>
        Veuillez enter le nom de la ville:
    </Text>

    <TextInput
    placeholder="Symbole"
    onChangeText={(text)=>Stt(text)}
    />
    <Button
    title="Valider"
    onPress={met}
  
    />
    <Button
    title="Mode d'emploi"
    onPress={()=> navigation.push("Mode2")}
    />
    <Text>
      Voici la météo:
    </Text>
    <Text>
je suis {affiche()}
     
    </Text>
  </ScrollView>
   
    
</View>

          )
    
}
export default Input2

    



