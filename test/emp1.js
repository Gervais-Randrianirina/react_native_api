import * as React from "react"
import {View , Text,Button,TextInput,FlatList} from "react-native"


function Emp1({route}){ 
  return(
<View>

    <Text
      style={{
        textAlign:'center',
        fontSize:15
      }}
    >
       Voici la division de cette pays
    </Text>
    
    {<FlatList
        data={route.params.tab}
        renderItem={({item}) => <Text 
        style={{
          fontSize:16,
          color:'purple'
        }}
        > - {item}</Text>}
      />
}
</View>
          )
    
}
export default Emp1

    



