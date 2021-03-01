import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import { createSwitchNavigator } from "react-navigation";
import SignUpScreen from "./SignUpScreen";
import { RFValue } from "react-native-responsive-fontsize";
import { Header, Icon, Badge } from "react-native-elements";
import firebase from "firebase";
import db from "../config";

export default class EnterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText2}>Hey There!</Text>
        <Text style={styles.buttonText}>Welcome to</Text>
        <Text
          style={{
            color: "#12ed90",
            fontSize: RFValue(70),
            fontStyle: "italic",
            fontWeight: "bold"
          }}
        >
          SocioHelp
        </Text>
        <Text style={styles.buttonText}>Your One Stop</Text>
        <Text style={styles.buttonText}>Solution To All Your</Text>
        <Text style={styles.buttonText}>problems</Text>
        <Text style={{ fontSize: RFValue(20), color: "#12ed90", fontWeight : 'bold', fontStyle : 'italic' }}>
          Sign In or Create an Account
        </Text>
        <TouchableOpacity
        style = {styles.button}
          onPress={() => {
            this.props.navigation.navigate("SignIn");
          }}
        >
          <Text style = {styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.button}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          <Text style = {styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    marginTop : RFValue(-15),
    width:RFValue(350)
  },
  button: {
    backgroundColor: "#00adb5",
    borderWidth: RFValue(2),
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(20),
    borderRadius: RFValue(5)
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: RFValue(30),
    fontStyle: "italic",
    alignSelf : 'center',
  },
  buttonText2: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: RFValue(30),
    fontStyle: "italic",
    alignSelf : 'center',
    marginTop : RFValue(100)
  },
  inputBox: {
    backgroundColor: "#00adb5",
    borderColor: "#eeeeee",
    borderRadius: RFValue(5),
    borderWidth: RFValue(2),
    width: RFValue(300),
    height: RFValue(50),
    marginTop: RFValue(20)
  },
  header: {
    marginTop: -15,
    flex: 0.1,
    width: RFValue(500)
  }
});
