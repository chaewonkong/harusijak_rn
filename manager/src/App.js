import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDcCu1FNx58-W8tAVW7t3wS-yKi9Z-X2Wg",
      authDomain: "manager-8fd2d.firebaseapp.com",
      databaseURL: "https://manager-8fd2d.firebaseio.com",
      projectId: "manager-8fd2d",
      storageBucket: "manager-8fd2d.appspot.com",
      messagingSenderId: "1010511734365"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
