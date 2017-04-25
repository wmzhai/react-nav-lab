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
            title="通知"
          />
          <ListItem
            title="个人设置"
          />
          <ListItem
            title="修改密码"
          />
        </List>
        <List>
          <ListItem
            title="退出"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    )
  }
}

export default SettingsScreen
