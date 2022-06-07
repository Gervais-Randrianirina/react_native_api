import * as React from "react"
import {View , Text,Button,TextInput,ScrollView} from "react-native"
import axios from "axios"
import moment from "moment"
const State ={
  pays:null,
  donee:null,
  tmax:null,
  jour:null,
  jours:null,
  tmin:null
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
    State.tmax = State.donee.list[0].temp.day
    State.tmin = State.donee.list[0].temp.morn
    State.jour = State.donee.list[0].dt
    State.jours= moment(State.jour*1000).format('DD/MM')
    console.log(State.jours)
    console.log(State.tmax)
   
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
    onPress={()=> navigation.push("Mode2",{nom:State.pays,j:State.tmax,n:State.tmin,d:State.jours})}
    />
   
  </ScrollView>
   
    
</View>

          )
    
}
export default Input2

    



