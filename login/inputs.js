import React , {Component} from 'react'
import {View , Text, TouchableOpacity, TextInput,StyleSheet,Image, ScrollView} from "react-native"

class Inputs extends Component{
    state = {
        username:'',
        email:'',
        password:''
    }
    handleUsername = (text) => {
        this.setState({username:text})
    }
    handleEmail = (text) => {
        this.setState({email:text})
    }
    handlePassword = (text) => {
        this.setState({password:text})
    }
    login = (email,pass,username)=>{
        alert('Username : '+username+' email: '+ email + ' password : '+ pass)
    }
render(){
        return(
<ScrollView>
<View style={styles.contenu}>

    <Text>
        Voici un exemple de login
    </Text>
    <TextInput
        style={styles.font}
        placeholder='nom_utilisateur'
        onChangeText={this.handleUsername}
    />
    <TextInput
        style={styles.font}
        placeholder='email'
        onChangeText={this.handleEmail}
    />
    <TextInput
        style={styles.font}
        placeholder='passwords'
        onChangeText={this.handlePassword}
    />
    <TouchableOpacity
        onPress = {
            ()=> this.login(this.state.email,this.state.password,this.state.username)
                }
    >
        <Text style={styles.text}>submit</Text>
    </TouchableOpacity>
    <Image Style={styles.image} source={require('../img/images.jpeg')}/>
    <Image Style={styles.image} source={require('../img/images.jpeg')}/>



            </View>
            </ScrollView>
        )
    }
}
export default Inputs
const styles = StyleSheet.create(
    {
        contenu : {
            padding:20,
            marginTop:30,
            backgroundColor:'gray',
            alignItems: 'center',
        },
        text : {
            color:"red",
            fontSize:30,
            backgroundColor:"purple",
            borderRadius:10,
            marginTop:20,
            marginBottom:20,
            padding:15,
            alignItems:"center",
            width:300,
            textAlign:'center',
        },
        font : {
            color:'white',
            margin:10,
            backgroundColor:"pink",
            width:300,
            textAlign:"center",
            
        },
        image : {
            width:300,
            height:40,
        },
    }
)


