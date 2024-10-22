import {} from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from './SplashScreen'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Morning from './Morning'
import Night from './Night'
import Menu from './Menu';
import User from './User';
import Quiz from './Quiz';
import Score from './Score';
import DetailQuiz from './DetailQuiz';
import Yoga from './Yoga';
import Protein from './Protein';
import Notifikasi from './Notifikasi';


const Stack = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='splash'>
        <Stack.Screen name='splash' component={Splash}/>
        <Stack.Screen name='landing' component={Landing}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='dashboard' component={Dashboard}/>
        <Stack.Screen name='morning' component={Morning}/>
        <Stack.Screen name='night' component={Night}/>
        <Stack.Screen name='menu' component={Menu}/>
        <Stack.Screen name='user' component={User}/>
        <Stack.Screen name='quiz' component={Quiz}/>
        <Stack.Screen name='score' component={Score}/>
        <Stack.Screen name='detailquiz' component={DetailQuiz}/>
        <Stack.Screen name='yoga' component={Yoga}/>
        <Stack.Screen name='protein' component={Protein}/>
        <Stack.Screen name='notifikasi' component={Notifikasi}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


