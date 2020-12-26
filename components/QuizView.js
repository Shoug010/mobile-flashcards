import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class QuizView extends Component {
    render(){
        return(
            <View>
                <Text>This is QuizView component</Text>
            </View>
        )
    }
}

export default QuizView;


/*
Quiz View
displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete
*/