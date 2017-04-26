import React, { Component } from 'react'
import { ScrollView, Platform } from 'react-native'
import { Tile, List, ListItem, Button } from 'react-native-elements'

class UserDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.handleSettingsPress = this.handleSettingsPress.bind(this)
  }

  handleSettingsPress () {
    this.props.navigation.navigate('settings')
  }

  render () {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <Button
          title='设置'
          buttonStyle={{marginTop: 20}}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title='邮件'
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title='电话'
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title='用户名'
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title='生日'
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title='城市'
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    )
  }
}

UserDetailScreen.navigationOptions = {
  title: ({state}) => `${state.params.name.last.toUpperCase()} `,
  header: () => ({ style: { marginTop: Platform.OS === 'android' ? 24 : 0 } })
}

export default UserDetailScreen
