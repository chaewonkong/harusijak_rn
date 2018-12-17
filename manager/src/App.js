import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import authInfo from "../googleAuth";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = authInfo;
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  container: {
    marginTop: 20
  }
};
export default App;
