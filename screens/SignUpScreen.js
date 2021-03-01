import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView, Modal} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import {Header, Icon, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'

export default class SignUpScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId: ' ',
            password : ' ', 
            confirmPassword : ' ',
            
        }
    }

    userSignUp= (emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return Alert.alert("Passwords don't match")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(response=>{
            db.collection("users").add({
                email_id : this.state.emailId,
            })
            this.props.navigation.navigate("SignIn")
            return Alert.alert("User Added Successfully")
        })
        .catch(error=>{
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }
}

    render(){
        return(
            <View style = {styles.container}>
                    <Header 
                    backgroundColor = {"#00adb5"}
                    containerStyle = {styles.header}
                    centerComponent={{
                        text:'Create an Account',
                       style : {flex:1, color : "#fff", fontWeight:'bold',fontStyle : 'italic', fontSize : RFValue(30)}
                    }}
                    />
                <Input
                containerStyle = {styles.inputBox}
                placeholder = {"Email-ID"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                leftIconContainerStyle = {styles.emailIcon}
                leftIcon = {<Zocial name="email" size={30} color="#393e46" />}
                keyboardType = {"email-address"}
                allowFontScaling = {true}
                autoCapitalize = {"none"}
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}
               />
               <Input
               containerStyle = {styles.inputBox}
               placeholder = {'Enter Password'}
               clearButtonMode = {'while-editing'}
               placeholderTextColor = {'#393e46'}
               autoCorrect = {false}
               secureTextEntry = {true}
               leftIconContainerStyle = {styles.passwordIcon}
               leftIcon = {<FontAwesome name="lock" size={35} color="#393e46" />}
               autoCapitalize = {"none"}
               onChangeText = {(text)=>{
                  this.setState({
                     password:text
               })
               }}
               />
               <Input
               containerStyle = {styles.inputBox}
               placeholder = {'Confirm Password'}
               placeholderTextColor = {'#393e46'}
               autoCapitalize = {"none"}
               autoCorrect = {false}
               clearButtonMode = {"while-editing"}
               secureTextEntry = {true}
               leftIconContainerStyle = {styles.passwordIcon}
               leftIcon = {<FontAwesome name="lock" size={35} color="#393e46" />}
               onChangeText = {(text)=>{
                    this.setState({
                       confirmPassword:text
               })
               }}
               />
                <TouchableOpacity 
                style = {styles.button2}
                onPress={()=>{
                    this.userSignUp(this.state.emailId,this.state.password, this.state.confirmPassword)
                    this.setState({
                        emailId:"",
                        password:'',
                        confirmPassword:'',
                    })
                }}>
                    <Text style = {styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate("SignIn")
                }}>
                    <Text style = {styles.buttonText}>Already Registered? Login</Text>
                    <AntDesign name="leftcircle" size={RFValue(40)} color="#black" />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "#222831",
        alignItems:'center',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#ffffff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    button2 : {
        backgroundColor :'#00adb5',
        borderWidth : RFValue(2),
        borderColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : RFValue(20),
        borderRadius : RFValue(20),
        width : RFValue(250),
        height: RFValue(40),
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
        fontStyle:'italic',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#fff',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        marginTop:RFValue(20),
        alignSelf:'center',
    },
    header:{
        flex:0.1,
        marginTop : -15,
        width : RFValue(500)
    },
    emailIcon : {
        marginLeft : RFValue(0),
        marginRight : RFValue(5)
    },
    passwordIcon : {
        marginLeft: RFValue(3),
        marginRight : RFValue(5)
    },
})