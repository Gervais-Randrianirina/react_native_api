import * as React from "react"
import {View , Text,Button,TextInput} from "react-native"
import axios from "axios"

const State ={
  symbole:null,
  ville:null,
  tab:null
}
function Stt (text){
State.symbole= text
}
function affiche(){
  fetch('https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/'+State.symbole+'.json')
  .then((reponse)=>reponse.json()).then((data)=>{
    State.tab = data
    console.log(State.tab)

}).catch((err)=>console.log("erreur ao amin'ny :"+err))
alert('Maintenant appuyer sur le boutton resultat ')
alert('Vous avez tapez le code pays : '+State.symbole)

  }



function Input({navigation}){ 
  return(
<View>
    <Text
      style={{
        textAlign:'center',
        fontSize:15
      }}
    >
        Veuillez enter la catégorie code internet du pays (ex : MG pour Madagascar):
    </Text>
    <TextInput
    style={{
      margin:10,
      padding:10,
      backgroundColor:'white'
      
    }}
    placeholder="Symbole (ex : MG)"
    onChangeText={(text)=>Stt(text)}
    />
 <View 
 style={{margin:10}}
 >
 <Button
    title="Valider"
    onPress={affiche}
  
    />
 </View>
 <View
 style={{margin:10}}
 
 >
 <Button
    title="Résultat"
    onPress={()=> navigation.push('resultat',{tab : State.tab})}
    />

   </View>  
<View
style={{margin:10}}
>
<Button
    title="MODE D'EMPLOI"
    onPress={()=>navigation.push('Methode')}
    />
</View> 

</View>
          )
    
}
export default Input

    

