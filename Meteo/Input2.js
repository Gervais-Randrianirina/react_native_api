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
  alert('Maintenant appuyer sur le boutton résultat')
  alert('Vous avez choisi le pays de: '+State.pays)
  
  
}
function Input2({navigation}){ 
  return(

<View>
  
  <Text
  style={{
    textAlign:'center',
    fontSize:15
  }}
  >
        Veuillez enter le nom d'un pays pour savoir son climat (ex : Madagascar):
    </Text>

    <TextInput
    style={{
      padding:10,
      margin:10,
      backgroundColor:'white'
    }}
    placeholder="nom pays (ex: Madagascar)"
    onChangeText={(text)=>Stt(text)}
    />
    <View
    style={{margin:10}}
    >
    <Button
    title="Valider"
    onPress={met}
  
    />
    </View>
    <View
    style={{margin:10}}
    >
    <Button
    title="RESULTAT"
    onPress={()=> navigation.push("resultat",{nom:State.pays,j:State.tmax,n:State.tmin,d:State.jours})}
    />
    </View>
   <View
   style={{margin:10}}
   >
   <Button
    title="Mode d'emploi"
    onPress={()=>navigation.push('Methode')}
    
    />
   </View>
   
   
  
   
    
</View>

          )
    
}
export default Input2

    



