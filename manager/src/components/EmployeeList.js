import _ from "lodash";
import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props
    //that component will be rendered with.
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = props => {
  // employees wil be an array containing objects
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: "Monday", name: "Leon", id: "jaskdjflan1"}
  });

  return { employees }; // employees: []
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
