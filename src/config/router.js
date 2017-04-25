import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import FeedScreen from '../screens/feed_screen'
import MeScreen from '../screens/me_screen'

export const Tabs = TabNavigator({
  feed: {
    screen: FeedScreen
  },
  me: {
    screen: MeScreen
  }
})

export default Tabs