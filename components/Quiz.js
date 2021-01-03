import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,score} from '../utils/API'

class Quiz extends Component {
    state = {
        show:false,
        item:this.props.route.params.item
      };
      navigate=(question)=>{
          let item = this.props.route.params.item +1;
          console.log(item, this.state.item);
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:item})
        console.log("n d = ",question);
    }
    Goback=()=>{

    }
    render(){
        let question= this.props.route.params.question
        let item1 = this.props.route.params.item
        console.log(question);
        return(
            <View>
                <Text>This is Quiz component</Text>
                {question.length === item1?(<View></View>):(<View>
                    <Text>{question[item1].question}</Text>
                    {this.state.show?(<Text>{question[item1].answer}</Text>):(<View></View>)}
                    <Button onPress={()=> {
                        console.log("hi button");
                        this.setState({show:!this.state.show})}
                        } title="show answer "> </Button>
                        <Button title="Correct"/>
                        <Button title="False"/>
                        <Button title="Next" onPress={()=>{
                            this.navigate(question)
                            } 
                            }/>
                </View>)}
               

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
