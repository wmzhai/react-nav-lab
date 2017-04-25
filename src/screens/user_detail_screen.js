import React, { Component } from 'react'
import { ScrollView, Platform } from 'react-native'
import { Tile, List, ListItem, Button } from 'react-native-elements'

class UserDetailScreen extends Component {
  static navigationOptions = {
    title: ({state}) => `${state.params.name.last.toUpperCase()} `,
    header: () =>({ style: { marginTop: Platform.OS === 'android'? 24 : 0 } })
  }    

  handleSettingsPress = () => {
    this.props.navigation.navigate('settings')
  }

  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <Button
          title='Settings'
          buttonStyle={{marginTop:20}}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    )
  }
}

export default UserDetailScreen
