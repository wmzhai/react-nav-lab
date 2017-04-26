import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Platform } from 'react-native'
import { Tile, List, ListItem, Button, Icon } from 'react-native-elements'
import { me } from '../config/data'

class MeScreen extends Component {
  constructor (props) {
    super(props)
    this.handleSettingsPress = this.handleSettingsPress.bind(this)
  }

  handleSettingsPress () {
    this.props.navigation.navigate('settings')
  }

  render () {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button
          title='设置'
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title='邮件'
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title='电话'
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title='用户名'
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title='生日'
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title='城市'
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    )
  }
}

MeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

MeScreen.navigationOptions = {
  tabBar: {
    label: '我的',
    icon: ({ tintColor }) => <Icon name='account-circle' size={35} color={tintColor} />
  },
  header: () => ({ style: { marginTop: Platform.OS === 'android' ? 24 : 0 } })
}

MeScreen.defaultProps = { ...me }

export default MeScreen
