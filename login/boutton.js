import * as React from "react"
import {View , Text,Button} from "react-native"
import Inputs from "./inputs"

function Input({navigation}){   
  return(
<View>
    <Text>
        Salut salut
    </Text>
    <Button
    title="deux"
    onPress={()=> navigation.push('numero2')}
    />
</View>
          )
    
}
export default Input

    



