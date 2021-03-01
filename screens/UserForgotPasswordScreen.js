import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class UserForgotPassword extends React.Component {
constructor(){
    super()
    this.state = {
        emailId : ''
    }
}

    userForgotPassword=(emailId)=>{
        return firebase.auth().sendPasswordResetEmail(emailId)
    }

    render(){
        return(
            <View style = {styles.container}>
                <Header 
                containerStyle = {styles.header}
                centerComponent = {{
                    text : 'Forgot Password',
                    style : {alignSelf : 'center', fontSize : RFValue(30), color : '#fff', fontStyle : 'italic', fontWeight: 'bold'}
                }}
                />
                <Text>Please type a functioning E-mail id below</Text>
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
                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.userForgotPassword(this.state.emailId)
                }}>
                    <Text style ={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("SignIn")
                }}>
                    <Text style = {styles.buttonText}>Back to Home</Text>
                    <FontAwesome5 name="home" size={50} color="black" />
                </TouchableOpacity>
            </View>
        )
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
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
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
        width:RFValue(500),
        backgroundColor : "#00adb5",
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