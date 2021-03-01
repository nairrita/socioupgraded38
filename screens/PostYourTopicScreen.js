import * as React from 'react';
import {TouchableOpacity, Text, View, TextInput, StyleSheet, FlatList, Image, Alert} from 'react-native';
import {Badge, Icon, Header, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import { Dropdown } from 'react-native-material-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default class PostYourTopicScreen extends React.Component {
constructor(){
    super()
    this.state = {
        userName : '',
        topic : '',
        matter : '',
        category : ' ',
    }
}

submitIntoSeparateCollection = (userName,topic,matter,category)=>{
    if(userName===''||topic===''||matter===''||category===''){
        return Alert.alert("Please fill out all the fields.")
    }
    else{
    if(this.state.category==="Driving License"){
        db.collection("license_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="PAN Card"){
        db.collection("pan_card_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="AADHAR Card"){
        db.collection("aadhar_card_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Passport"){
        db.collection("passport_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Education"){
        db.collection("education_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Electronics"){
        db.collection("e_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Automobiles"){
        db.collection("automobiles_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Travel & Tourism"){
        db.collection("travel_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Film & Entertainment"){
        db.collection("film_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Medical"){
        db.collection("medical_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Sports"){
        db.collection("sports_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Food & Dine-out"){
        db.collection("food_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
    else if(this.state.category==="Others"){
        db.collection("others_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        db.collection("all_blogs").add({
            user_name : this.state.userName,
            category : this.state.category,
            topic : this.state.topic,
            matter : this.state.matter,
        })
        return Alert.alert("Your matter has been submitted. Stay tuned for replies")
    }
}
}

    render(){
        let data = [{
            value : 'AADHAR Card'
        }, {
            value : 'Automobiles'
        }, {
            value : 'Driving License',
        }, {
            value : 'Education'
        }, {
            value : 'Electronics'
        }, {
            value : 'Film & Entertainment'
        }, {
            value : 'Food & Dine-out'
        }, {
            value : 'Medical'
        }, {
            value : 'PAN Card'
        }, {
            value : 'Passport'
        }, {
            value : 'Sports'
        }, {
            value : 'Travel & Tourism'
        }, {
            value : 'Others'
        }]
        return(
            <View style = {styles.container}>
                 <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent = {{
                    text:"Post your Topic",
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(30)}
                }}
                />
                <Text style = {styles.text}>Name</Text>
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"Your Name*"}
                placeholderTextColor = {'#323232'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                autoCapitalize = {'words'}
                onChangeText={(text)=>{
                    this.setState({
                        userName:text
                    })
                }}
                />
                <Text style = {styles.text}>Topic</Text>
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"Topic*"}
                placeholderTextColor = {'#323232'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {true}
                autoCapitalize = {'sentences'}
                onChangeText={(text)=>{
                    this.setState({
                        topic:text
                    })
                }}
                />
                <Text style = {styles.text}>Matter</Text>
                <Input 
                containerStyle = {styles.inputBox2}
                placeholder = {"Matter*"}
                placeholderTextColor = {'#323232'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {true}
                multiline = {true}
                autoCapitalize = {'sentences'}
                onChangeText={(text)=>{
                    this.setState({
                        matter:text
                    })
                }}
                />
                <Text style = {styles.text2}>Please select the best category which </Text>
                <Text style = {styles.text3}> describes your topic</Text>
                <Dropdown
                containerStyle = {styles.dropdown}
                label='Category*'
                animationDuration = {200}
                data={data}
                fontSize = {RFValue(20)}
                textcolor = {'#fff'}
                rippleOpacity = {1}
                shadeOpacity = {0.12}
                itemColor = {'red'}
                itemCount = {6}
                selectedItemColor = {'green'}
                onChangeText={(text)=>{
                    this.setState({
                        category : text
                    })
                }}
                />
                <TouchableOpacity 
                style = {styles.button}
                onPress={()=>{
                    this.submitIntoSeparateCollection(this.state.category,this.state.matter,this.state.topic, this.state.userName)
                }}>
                    <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("Forum")
                }}>
                    <Text style ={styles.buttonText}>Back to Home</Text>
                    <FontAwesome name="home" size={50} color="black" />
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
        alignItems:'center',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        marginTop:RFValue(5),
    },
    inputBox2:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        height:RFValue(150),
        marginTop:RFValue(5),
    },
    header : {
        marginTop:-15,
        flex:0.5,
        width:RFValue(500)
    },
    dropdown : {
        marginTop:RFValue(5),
        width:RFValue(300),
        backgroundColor : '#00adb5',
        borderColor : '#fff',
        borderRadius:RFValue(5)
    },
    text:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(15),
        fontStyle:'italic',
        marginLeft : RFValue(-250),
        marginTop : RFValue(10),
    },
    text2:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(15),
        fontStyle:'italic',
        marginLeft : RFValue(0),
        marginTop : RFValue(10),
    },
    text3:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(15),
        fontStyle:'italic',
        marginLeft : RFValue(-130),
        marginTop : RFValue(0),
    },
})