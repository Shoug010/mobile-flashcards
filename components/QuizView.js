import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,submitNewQuestion} from '../utils/API'

class QuizView extends Component {
    state = {
        duck:{},
      };
    
      componentDidMount(){       
        getDeckByKey("JavaScript").then((duck)=>{
            this.setState(()=>({duck}))
            console.log("duck = ", duck);
            })
            console.log("comp did");
    } 
    renderItem = ({item})=>{
        console.log("item= ", item );
    return  <Text key={item.question}>"{item.question}"   answer is     {item.answer}</Text>
    }

    render(){
        const Du =this.state.duck.questions
        console.log("get= ",Du)
        return(
            <View>
                <Text>This is QuizView component</Text>
                {this.state.duck === null ? (<Text>There is no duck !</Text>):(<View><FlatList data= {Du} renderItem={this.renderItem}/></View>)}

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
