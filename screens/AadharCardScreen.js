import * as React from "react";
import {TouchableOpacity,ActivityIndicator,Text,View,TextInput,StyleSheet,FlatList,Image,Alert,KeyboardAvoidingView} from "react-native";
import { Badge, Icon, Header, ListItem, Input } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from "react-native-material-dropdown";
import { FontAwesome5 } from "@expo/vector-icons";

export default class AadharCardScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      aadharBlogs: [],
      category: "AADHAR Card",
      isLoading : false,
    };
    this.blogRef = null;
  }

  getAllBlogs = () => {
    this.blogRef = db
      .collection("aadhar_card_blogs")
      .where("category", "==", this.state.category)
      .onSnapshot(snapshot => {
        var aadharBlogs = snapshot.docs.map(document => document.data());
        this.setState({
          aadharBlogs: aadharBlogs,
          isLoading : true,
        });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => (
    <TouchableOpacity
    onPress = {()=>{
      this.props.navigation.navigate("AadharData",{data:item})
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
  );

  componentDidMount() {
    this.getAllBlogs();
  }

  render() {
    if(this.state.isLoading){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#00adb5"}
          containerStyle={styles.header}
          centerComponent={{
            text: "AADHAR Card",
            style: {flex: 1,color: "#fff",fontWeight: "bold",fontStyle: "italic",fontSize: RFValue(30)
            }
          }}
        />
        <View style={{ flex: 0.88, borderWidth: 2 }}>
          {
          this.state.aadharBlogs.length === 0 
          ? (
            <View>
              <Text style={styles.buttonText}>No Blogs Available</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.aadharBlogs}
              renderItem={this.renderItem}
            />
          )
          }
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Forum");
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
          <FontAwesome5 name="home" size={50} color="black" />
        </TouchableOpacity>
      </View>
    );
        }
        else{
          return(
            <View style = {{flex:1,backgroundColor:"#222831",alignItems:'center',justifyContent : 'center'}}>
                <ActivityIndicator size =  "large" color = "red"/>
                <Text style = {{fontSize : RFValue(100)}}>Is Loading....</Text>
            </View>
        )
        }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  button: {
    width:RFValue(150),
    alignSelf : 'center',
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
    flex: 0.12,
    width: RFValue(500)
  },
  titleStyle: {
    fontSize: RFValue(25),
    textAlign: "center"
  },
  list : {
    alignSelf : 'center',
    width : RFValue(350),
  }
});