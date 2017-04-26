import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Platform } from 'react-native'
import { List, ListItem, Icon } from 'react-native-elements'
import { users } from '../config/data'

class FeedScreen extends Component {
  constructor (props) {
    super(props)
    this.onLearnMore = this.onLearnMore.bind(this)
  }

  onLearnMore (user) {
    this.props.navigation.navigate('user_detail', { ...user })
  }

  render () {
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
              onPress={() => { this.onLearnMore(user) }}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}

FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

FeedScreen.navigationOptions = {
  title: '列表',
  tabBar: {
    label: '列表',
    icon: ({ tintColor }) => <Icon name='list' size={35} color={tintColor} />
  },
  header: () => ({ style: { marginTop: Platform.OS === 'android' ? 24 : 0 } })
}

export default FeedScreen
