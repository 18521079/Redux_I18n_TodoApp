import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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

  render() {
    return (
      <View style={styles.container}>
        <Text>{t("addTodo")}</Text>

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
