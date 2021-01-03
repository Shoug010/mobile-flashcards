import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,getScore} from '../utils/API'

class QuizView extends Component {
   
    
    navigate=(question)=>{
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:0,score:0, deck:this.props.route.params.deck})
        console.log("n d = ",question);
    }
    
    render(){
        const Du =this.props.route.params.questions
        console.log("Quizview", Du);
        return(
            <View>
                <Text>This is QuizView component</Text>
                {this.props.route.params.questions.length===0?(<View><Text>there is no card for this deck !</Text></View>):(<View>{this.navigate(Du)}</View>)}
               
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
*/
