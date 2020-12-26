import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DeckView extends Component {
    render(){
        return(
            <View>
                <Text>This is DeckView component</Text>
            </View>
        )
    }
}

export default DeckView;


/*
displays the title of the Deck
displays the number of cards in the deck
displays an option to start a quiz on this specific deck
An option to add a new question to the deck
*/