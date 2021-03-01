import * as React from "react";
import {TouchableOpacity,Text,View,TextInput,StyleSheet,FlatList,ImageAlert,ScrollView} from "react-native";
import { Badge, Icon, Header, ListItem} from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from "react-native-material-dropdown";
import { FontAwesome } from "@expo/vector-icons";
import PostYourTopicScreen from "./PostYourTopicScreen";

export default class DrivingLicenseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      automobileBlogs: [],
      category: "Automobiles"
    };
    this.blogRef = null;
  }

  getAllBlogs = () => {
    this.blogRef = db
      .collection("automobiles_blogs")
      .where("category", "==", this.state.category)
      .onSnapshot(snapshot => {
        var automobileBlogs = snapshot.docs.map(document => document.data());
        this.setState({
          automobileBlogs: automobileBlogs
        });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem=({item,i})=>{
      <TouchableOpacity 
    onPress={()=>{
      this.props.navigation.navigate("AutomobilesData",{data:item})
    }}>
      <ListItem 
      key={i}
      title={item.topic}
      subtitle={item.matter .split('').splice(0,100).join('') + '.....'} 
      titleStyle={styles.titleStyle}
      containerStyle = {styles.list}
      bottomDivider
      />
      </TouchableOpacity>
    }
  

  componentDidMount() {
    this.getAllBlogs();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#00adb5"}
          containerStyle={styles.header}
          centerComponent={{
            text: "Automobiles",
            style: {
              flex: 1,
              color: "#fff",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: RFValue(30)
            }
          }}
        />
        <View style={{ flex: 0.88, borderWidth:2 }}>
          {this.state.automobileBlogs.length === 0 ? (
            <View>
              <Text style={styles.buttonText}>No Blogs Available</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.automobileBlogs}
              renderItem={this.renderItem}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Forum");
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
          <FontAwesome name="home" size={50} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center"
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
    fontSize: RFValue(20),
    fontStyle: "italic",
    alignItems: "center"
  },
  inputBox: {
    backgroundColor: "#00adb5",
    borderColor: "#eeeeee",
    borderRadius: RFValue(5),
    borderWidth: RFValue(2),
    width: RFValue(300),
    height: RFValue(50),
    marginTop: RFValue(5)
  },
  header: {
    marginTop: -15,
    flex: 0.08,
    width: RFValue(500)
  },
  titleStyle: {
    fontSize: RFValue(20),
    textAlign: "center"
  },
  list : {
    alignSelf : 'center',
    width : RFValue(350),
  }
});
