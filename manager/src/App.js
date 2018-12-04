import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import authInfo from "../googleAuth";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = authInfo;
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
