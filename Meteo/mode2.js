import * as React from "react"
import react from "react"
import {View , Text,Image,ScrollView} from "react-native"
// function Resulta1(){ 
//   return(
// <View>
//     <Text>
//         Resultat
//     </Text>
  
// </View>
//           )
    
// }
export default class Resulta2 extends react.Component{

    render(){
return(


<View>
   <Text
   style={{
       fontSize:15
   }}
   >
       Choisir un parmis les noms de pays suivant et inserer le dans le formulaire puis
       appuyer sur le boutton "valider"; ensuite il y aura un petit fenêtre qui
       va afficher et suit les instructions.
       (exemple:Madagascar)
   </Text>
   <ScrollView>
   <Image Style={{width:750}} source={require('../img/num1.png')}/>
   <Image Style={{width:750}} source={require('../img/num2.png')}/>
   <Image Style={{width:750}} source={require('../img/num3.png')}/>
   <Image Style={{width:750}} source={require('../img/num4.png')}/>
   <Image Style={{width:750}} source={require('../img/num5.png')}/>
   <Image Style={{width:750}} source={require('../img/num6.png')}/>
   
   </ScrollView>
   </View>


   
)


    }
}
