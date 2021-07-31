import React, { Component } from "react";
import { View,TouchableOpacity,Alert, Text, StyleSheet, Button } from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodo from "./containers/VisibleTodo";
import I18n from "../src/I18n/index";
import { t } from "../src/I18n/index";
import { addTodo } from "./actions";

class TodoApp extends Component {
  state = {
    todos: [],
    visiblityFiler: "SHOW_ALL_TODOS",
    changeLanguage: "english",
  };


button = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Language Selection',
            'French, English or arabic',
            [
              {
                text: 'French',
                onPress: () => {
                  I18n.locale = 'fr-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'English',
                onPress: () => {
                  I18n.locale = 'en-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'Arabic',
                onPress: () => {
                  I18n.locale = 'ar-Us';
                  this.setState({changeLanguage: 'arabic'});
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text>Click Change Language</Text>
      </TouchableOpacity>
    );
  };



  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{t("addTodo")}</Text> */}
         <Text style={styles.text}>{I18n.t('title')}</Text>
          {this.button()}

        <AddTodo></AddTodo>
        <View>
          <VisibleTodo></VisibleTodo>
        </View>
      </View>
    );
  }

}
export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
