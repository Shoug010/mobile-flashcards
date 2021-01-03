import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import DeckListView from './components/DeckListView'
import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import Constants from "expo-constants";
import Quiz from './components/Quiz'


function MobileFlashcardsStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  )
}
const Tabs = createBottomTabNavigator()
        
const MyTabs= ()=> {
    return (
      <Tabs.Navigator
      initialRouteName="AddEntry"
      >
        <Tabs.Screen name="DeckListView" component={DeckListView}/>
        <Tabs.Screen name="NewDeckView" component={NewDeckView} />
      </Tabs.Navigator>
    );
  }
  const Stack = createStackNavigator();
  const MainNav = () => (
    <Stack.Navigator initialRouteName="DeckListView"
    headerMode="screen">
      <Stack.Screen
          name="DeckListView"
          component={MyTabs}
          options={{headerShown: false}}/>
      <Stack.Screen
          name="NewDeckView"
          component={NewDeckView}
          options={{
              headerTintColor: "white",
              headerStyle: {
                  backgroundColor: "purple",
              },
              headerTitleStyle: {width: Dimensions.get("window").width}
          }}/>
          <Stack.Screen
          name="NewQuestionView"
          component={NewQuestionView}
          />
          <Stack.Screen
          name="DeckView"
          component={DeckView}
          />
          <Stack.Screen
          name="QuizView"
          component={QuizView}
          />
          <Stack.Screen
          name="Quiz"
          component={QuizView}
          />

    </Stack.Navigator>
);

export default function App() {
  return (
    <View style={{flex: 1}} >
      <NavigationContainer>
        <MobileFlashcardsStatusBar/>
        <MainNav/>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
