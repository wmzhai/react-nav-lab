import React, { Component } from 'react'
import { ScrollView, Platform } from 'react-native'
import { List, ListItem } from 'react-native-elements'

class SettingsScreen extends Component {
  static navigationOptions = {
    title: '设置',
    header: () =>({ style: { marginTop: Platform.OS === 'android'? 24 : 0 } })
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    )
  }
}

export default SettingsScreen
