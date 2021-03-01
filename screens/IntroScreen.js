import * as React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Alert
} from "react-native";
import { Badge, Icon, Header } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from "react-native-material-dropdown";
import LottieView from "lottie-react-native"; 
var logo = require("../assets/animation.json");

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("Enter");
    }, 2800);
  }

  render() {
    return (
      <View style={styles.container}>
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
        <Text style={styles.text}>SocioHelp</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(-15),
    flex: 1,
    backgroundColor: "#222831",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: RFValue(-100),
    fontSize: RFValue(70),
    fontStyle: "italic",
    alignSelf: "center"
  }
});
