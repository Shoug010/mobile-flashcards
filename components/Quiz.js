import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,score} from '../utils/API'

class Quiz extends Component {
    state = {
        show:false,
      };
      navigate=(question)=>{
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:2})
        console.log("n d = ",question);
    }
    render(){
        let question= this.props.route.params.question
        let item = this.props.route.params.item
        console.log(question);
        return(
            <View>
                <Text>This is Quiz component</Text>
                <Text>{question[item].question}</Text>
                    {this.state.show?(<Text>{question[item].answer}</Text>):(<View></View>)}
                    <Button onPress={()=> {
                        console.log("hi button");
                        this.setState({show:!this.state.show})}
                        } title="show answer "> </Button>
                        <Button title="Correct"/>
                        <Button title="False"/>
                        <Button title="Next" onPress={()=>{this.navigate(question)}}/>

            </View>
        )
    }
}

export default Quiz;


/*
Quiz View
displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete
 - import { Permissions } from 'expo' -> import * as Permissions from 'expo-permissions'

*/
