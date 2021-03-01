import * as React from 'react';
import {TouchableOpacity, Text, View, TextInput,KeyboardAvoidingView, StyleSheet, FlatList, Image, ScrollView, SafeAreaView} from 'react-native';
import {Badge, Icon, Header, ListItem, Input} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';

export default class MedicalScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>Hi</Text>
            </View>
        )
    }
}