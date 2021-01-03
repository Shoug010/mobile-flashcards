import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,getScore} from '../utils/API'
import Quiz from './Quiz';

class QuizView extends Component {
    state = {
        show:false,
      };
    
   
    renderItem = ({item})=>{
            return (
                <View>
                    <Text></Text>
                </View>
            )
    }
    
    render(){
        let score = 0
        const Du =this.props.route.params.questions
        return(
            <View>
                <Text>This is QuizView component</Text>
                {this.props.route.params.questions.length===0?(<View><Text>there is no card for this deck !</Text></View>):((<View><FlatList data={Du} renderItem={this.renderItem}/></View>))}
                {Du.map ((D)=>{
                    return(<View>
                        <Text>{D.question}</Text>
                        {this.state.show?(<Text>{D.answer}</Text>):(<View></View>)}
                    <Button onPress={()=> {
                        console.log("hi button");
                        this.setState({show:!this.state.show})}
                        } title="show answer "> </Button>
                        <Button title="Correct" onPress={()=>{score=score+1}}/>
                        <Button title="False"/>

                    </View>)
                })}
                <Text>you score is {score}</Text>
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
