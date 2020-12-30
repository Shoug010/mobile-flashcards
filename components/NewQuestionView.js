import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,submitNewQuestion} from '../utils/API'

class NewQuestionView extends Component {
    state = {
        questions:{
            question: 'who are you',
            answer: 'shoug'
        },
      };
    componentDidMount(){
        getall()
    }
    render(){
        getDecks().then((duck)=>{
            console.log("duckwww = ", duck);
            })
           
            let questions = {
                question: '',
                answer: ' '
            }
        return(
            <View>
                <Text>This is NewQuestionView component</Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChange={
                    (event)=>{console.log(event.target.value)
                     questions.question=event.target.value}}/>

                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChange={
                    (event)=>{console.log(event.target.value)
                     questions.answer=event.target.value}}/>

                <Button title="Submit" onPress={()=>{
                    console.log("Q = ",questions)
                    submitNewQuestion("JavaScript", questions)
                    
                }}/>

            </View>
        )
    }
}
export default NewQuestionView;


/*
An option to enter in the question
An option to enter in the answer
An option to submit the new question
*/
