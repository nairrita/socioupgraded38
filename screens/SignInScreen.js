import * as React from 'react';
import {Text,ActivityIndicator, View, TouchableOpacity, TextInput, StyleSheet, Alert, Image, requireNativeComponent} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import {Header, Icon, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from "lottie-react-native"; 
var logo = require("../assets/loadingAnimation.json")

export default class SignInScreen extends React.Component {
constructor(){
    super()
    this.state = {
        emailId : " ",
        password : " ",
        isLoading : true,
    }
}

userSignIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(response=>{
        Alert.alert("Successfully Signed In")
        this.props.navigation.navigate("Forum")
    })
    .catch(error=>{
        var error = error.code 
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
}

userForgotPassword=(emailId)=>{
    return firebase.auth().sendPasswordResetEmail(emailId)
}

    render(){
        if(this.state.isLoading){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent={{
                    text : 'LOGIN',
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(30)}
                }}
                />
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"Email-ID"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                leftIcon = {<Zocial name="email" size={30} color="#393e46" />}
                leftIconContainerStyle = {styles.emailIcon}
                keyboardType = {"email-address"}
                allowFontScaling = {true}
                autoCapitalize = {"none"}
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }} />
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"Password"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                allowFontScaling = {true}
                autoCorrect = {false}
                clearTextOnFocus = {true}
                autoCapitalize = {"none"}
                leftIcon = {<FontAwesome name="lock" size={35} color="#393e46" />}
                leftIconContainerStyle = {styles.passwordIcon}
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        password:text
                    })
                }} />
                <TouchableOpacity 
                style = {styles.button2}
                onPress = {()=>{
                    this.userSignIn(this.state.emailId, this.state.password)
                }}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button2}
                onPress={()=>{
                    this.props.navigation.navigate("ForgotPassword")
                }}>
                    <Text style = {styles.buttonText}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate("SignUp")
                }}>
                    <Text style = {styles.buttonText2}>Not Registered?</Text>
                    <Text style = {styles.buttonText2}>Create an account</Text>
                    <AntDesign name="rightcircle" size={40} color="black"/>
                </TouchableOpacity>
            </View>
        )
            }
        else{
            return(
                <View style = {{flex:1,backgroundColor:"#222831",alignItems:'center',justifyContent : 'center'}}>
                     <LottieView
                      source={logo}
                      style={{
                      width: "70%",
                      height: "70%",
                      marginLeft: RFValue(50),
                      marginTop: RFValue(20)
                    }}
                    autoPlay
                    loop
                    />
                    <ActivityIndicator size =  "large" color = "red" logo = {logo}/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#222831",
        alignItems:'center',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
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
    buttonText2:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(25),
        fontStyle:'italic',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        marginTop:RFValue(20),
    },
    header : {
        marginTop:-15,
        flex:0.1,
        width:RFValue(500)
    },
    emailIcon : {
        marginLeft : RFValue(0),
        marginRight : RFValue(5)
    },
    passwordIcon : {
        marginLeft: RFValue(3),
        marginRight : RFValue(5)
    }
})