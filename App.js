import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { RFValue } from "react-native-responsive-fontsize";
import ForumScreen from "./screens/ForumScreen";
import PostYourTopicScreen from "./screens/PostYourTopicScreen";
import DrivingLicenseScreen from "./screens/DrivingLicenseScreen";
import PassportScreen from "./screens/PassportScreen";
import PanCardScreen from "./screens/PanCardScreen";
import AadharCardScreen from "./screens/AadharCardScreen";
import VisaScreen from "./screens/VisaScreen";
import EducationScreen from "./screens/EducationScreen";
import AutomobilesScreen from "./screens/AutomobilesScreen";
import TravelScreen from "./screens/TravelScreen";
import FilmScreen from "./screens/FilmScreen";
import SportsScreen from "./screens/SportsScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import FoodScreen from "./screens/FoodScreen";
import IntroScreen from "./screens/IntroScreen";
import EnterScreen from "./screens/EnterScreen";
import AadharDataScreen from "./screens/AadharDataScreen";
import UserForgotPassword from "./screens/UserForgotPasswordScreen";
import MedicalScreen from './screens/MedicalScreen';
import AutomobilesDataScreen from "./screens/AutomobilesDataScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}></Text>
        <AppContainer />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Intro: { screen: IntroScreen },
  Enter: { screen: EnterScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
  ForgotPassword : {screen : UserForgotPassword},
  Forum: { screen: ForumScreen },
  PostYourTopic: { screen: PostYourTopicScreen },
  DrivingLicense: { screen: DrivingLicenseScreen },
  Medical : {screen : MedicalScreen},
  Passport: { screen: PassportScreen },
  PanCard: { screen: PanCardScreen },
  AadharCard: { screen: AadharCardScreen },
  Visa: { screen: VisaScreen },
  Education: { screen: EducationScreen },
  Automobiles: { screen: AutomobilesScreen },
  Travel: { screen: TravelScreen },
  Film: { screen: FilmScreen },
  Sports: { screen: SportsScreen },
  Electronics: { screen: ElectronicsScreen },
  Food: { screen: FoodScreen },
  AadharData: {screen : AadharDataScreen},
  AutomobilesData : {screen : AutomobilesDataScreen},
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    fontStyle: "italic"
  }
});
