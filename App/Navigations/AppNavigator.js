import { createStackNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from '../Containers/SplashScreen'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Login: { screen: Login },
    Register: {screen:Register},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
)

export default createAppContainer(AppNavigator)
