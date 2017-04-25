import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import FeedScreen from '../screens/feed_screen'
import MeScreen from '../screens/me_screen'
import UserDetailScreen from '../screens/user_detail_screen'

export const FeedStack = StackNavigator({
  feed: {
    screen: FeedScreen
  },
  user_detail: {
    screen: UserDetailScreen
  }
})


export const Tabs = TabNavigator({
  feed: {
    screen: FeedStack
  },
  me: {
    screen: MeScreen
  }
})

export default Tabs