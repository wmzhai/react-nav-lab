# react-navigation 使用指南

## Navigators

Navigators用来定义应用程序的导航结构，也用来渲染可配置的header和tabbar。

总共有三种类型：

* StackNavigator - 一次渲染一个screen并提供screen之间的跳转，新建的screen位于栈的顶端。
* TabNavigator - 渲染一个tabbar，让用户在不同tab下的几个screen间做切换
* DrawerNavigator - 从屏幕左边滑出的抽屉


### StackNavigator

一个概念上的栈，每个新Screen都被放到栈顶，返回时则从栈顶弹出一个Screen。


#### 配置 Header 

仅StackNavigator有Header。动态设置如下

```
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  })
  ...
}
```

添加右上角按钮

```
static navigationOptions = {
  headerRight: <Button title="Info" />,
  ...
```


### TabNavigator



## Screen

### navigation属性

Screen的navigation属性允许screen来dispatch跳转action，比如打开另外一个screen


### navigationOptions

Screen的navigationOptions用来定制screen如何在navigator中展现，比如 header title, tab label。



https://reactnavigation.org/docs/navigators/navigation-options

#### 可以直接写成Screen定义里的static变量

```
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return <Text>Hello, Navigation!</Text>
  }
}
```

#### 可以在构建Router时写

```
const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  }
})
```

#### 也可以动态创建

下面的内容就是根据route参数动态生成的

```
static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation
  const isInfo = state.params.mode === 'info'
  const {user} = state.params
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    )
  }
}
```

#### 相关字段

* title
* tabBar
  * visible
  * icon

```
static navigationOptions = {
  title: 'Map',
  tabBar: {
    visible: true,
    icon: ({ tintColor }) => {
      return <Icon name="my-location" size={30} color={tintColor} />
      }
  }
}
```


## 跳转问题



### 获取navigation

通过对象实例获取

```
const { navigate } = this.props.navigation
```

通过类获取

```
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  })
  ...
}
```


### 传递参数

跳转时可以传递进入新路由的参数，下面代码则是传入了一个user参数到新路由里

```
this.props.navigation.navigate('Chat', { user:  'Lucy' })
```

### 获取参数

在被跳转到的类里面，通过`navigation.state.params`获得传入的参数


```
class ChatScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    return <Text>Chat with {params.user}</Text>
  }
}
```
