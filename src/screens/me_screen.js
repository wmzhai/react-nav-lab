import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Tile, List, ListItem, Button, Icon } from 'react-native-elements'
import { me } from '../config/data'

class MeScreen extends Component {
  static navigationOptions = {
    tabBar: {
      label: '我的',
      icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('settings')
  }

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    )
  }
}

MeScreen.defaultProps = { ...me }

export default MeScreen
