import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>#어제의 우수 시</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 17,
    width: "100%",
    display: "flex",
    alignItems: "flex-start"
  },
  headline: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 25,
    marginTop: 12,
    marginBottom: 13,
    fontFamily: "JejuMyeongjo-Regular"
  }
});
