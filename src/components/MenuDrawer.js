import React from 'react';
import {View, Text} from 'react-native';

export default class MenuDrawer extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={this.props.closeDrawer()}>Hi boy</Text>
      </View>
    );
  }
}
