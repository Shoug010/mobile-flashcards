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


function MobileFlashcardsStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  )
}
const Tabs = createBottomTabNavigator()
        
function MyTabs() {
    return (
      <Tabs.Navigator
      tabBarOptions={{
        header: null,
        activeTintColor: "purple",
        style: {
            height: 80 ,
            backgroundColor:"white",
            shadowColor: "rgba(0, 0, 0, 0.24)",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }}
      >
        <Tabs.Screen name="DeckListView" component={NewDeckView} />
        <Tabs.Screen name="NewDeckView" component={NewDeckView} />
      </Tabs.Navigator>
    );
  }

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <NavigationContainer>
        <MobileFlashcardsStatusBar/>
        <MyTabs/>
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
