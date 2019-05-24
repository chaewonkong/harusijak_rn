import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>하루시작</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    top: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  headerText: {
    fontFamily: "JejuMyeongjo-Regular",
    fontSize: 20
  }
});
