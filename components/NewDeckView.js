import React,{Component,useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';
import {submitNewDuck, getDecks,clearAppData} from '../utils/API'
import DeckListView from './DeckListView'
import {CommonActions} from '@react-navigation/native';

class NewDeckView extends Component {
    state = {
        duck:{},
        text: ' '
      }
      toHome = () => {
        this.props.navigation.dispatch(
            CommonActions.goBack({
                key: 'DeckListView',
            }))
    }
    render(){
        return(
            <View>
                <Text>This is NewDeckView component</Text>
                <Text>What is the Title for your new Duck ? </Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}}  placeholder="Type here titel of the duck"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
                <Button title="Submit" onPress={()=>{
                    console.log("new = ", this.state.text)
                    submitNewDuck(this.state.text)
                    this.toHome()
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