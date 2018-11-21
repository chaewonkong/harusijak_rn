import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(item) {
    return <ListItem library={item} />;
  }
  render() {
    console.log(this.props.libraries);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={library => String(library.id)}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
