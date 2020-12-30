import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';
import {submitNewDuck, getDecks,clearAppData} from '../utils/API'
import DeckListView from './DeckListView'
class NewDeckView extends Component {
    state = {
        duck:{},
      };
    render(){
        let x= " "
        return(
            <View>
                <Text>This is NewDeckView component</Text>
                <Text>What is the Title for your new Duck ? </Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChange={
                    (event)=>{console.log(event.target.value)
                     x=event.target.value}}/>
                <Button title="Submit" onPress={()=>{
                    console.log("new = ", x)
                    submitNewDuck(x)
                    getDecks().then((duck)=>{
                        this.setState(()=>({duck}))
                        console.log("duck = ", duck);
                        <DeckListView/>

                    })
                }}/>
            </View>
        )
    }
}

export default NewDeckView;


/*
An option to enter in the title for the new deck
An option to submit the new deck title
*/