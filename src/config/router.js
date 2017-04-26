import { TabNavigator, StackNavigator } from 'react-navigation'

import FeedScreen from '../screens/feed_screen'
import MeScreen from '../screens/me_screen'
import UserDetailScreen from '../screens/user_detail_screen'
import SettingsScreen from '../screens/settings_screen'

export default StackNavigator({
  tabs: {
    screen: TabNavigator({
      feed: {
        screen: StackNavigator({
          feed: {
            screen: FeedScreen
          },
          user_detail: {
            screen: UserDetailScreen
          }
        })
      },
      me: {
        screen: MeScreen
      }
    }, {
      tabBarPosition: 'bottom'
    })
  },
  settings: {
    screen: StackNavigator({
      settings: {
        screen: SettingsScreen
      }
    })
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})
