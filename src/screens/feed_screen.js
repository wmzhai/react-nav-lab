import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import { List, ListItem, Icon } from 'react-native-elements'
import { users } from '../config/data'

class FeedScreen extends Component {
  static navigationOptions = {
    title: '列表',
    tabBar: {
      label: '列表',
      icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  }

  onLearnMore = (user) => {
    this.props.navigation.navigate('user_detail', { ...user })
  }

  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}

export default FeedScreen
