import { createStackNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from '../Containers/SplashScreen'
import Login from '../Containers/Login'

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  }
)

export default createAppContainer(AppNavigator)
