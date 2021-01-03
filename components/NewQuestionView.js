import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,submitNewQuestion} from '../utils/API'
import {CommonActions} from '@react-navigation/native';

class NewQuestionView extends Component {
    state = {
        questions:{
            question: ' ',
            answer: ' '
        }
      };
    
    toHome = () => {
        this.props.navigation.dispatch(
            CommonActions.goBack({
                key: 'DeckView',
            }))
    }
    render(){
        getDecks().then((deck)=>{
            console.log("duckwww = ", deck);
            })
           
        return(
            <View>
                <Text>This is NewQuestionView component</Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChangeText={
                    (text) => this.setState({ questions:{question:text}})
                }/>

                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChangeText={
                    (text) => this.setState({ questions:{answer:text}})

                    }/>

                <Button title="Submit" onPress={()=>{
                    submitNewQuestion(this.props.route.params.title, this.state.questions)
                    this.toHome()
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
