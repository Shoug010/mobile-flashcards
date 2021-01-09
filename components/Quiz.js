import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {clearLocalNotification, setLocalNotification} from '../utils/API'

class Quiz extends Component {
    state = {
        show:false,
      };
    navigate=(question,score1)=>{
        let S = this.props.route.params.score
        if(score1 ===1){
            S=S+1
        }
        let item = this.props.route.params.item +1;
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:item,score:S,deck:this.props.route.params.deck})
    }
    ReTest=(question)=>{
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:0,score:0,deck:this.props.route.params.deck})
     }
     GoBack=()=>{
        clearLocalNotification()
            .then(setLocalNotification)
            const navigation = this.props.navigation;
            navigation.navigate("DeckView",{deck:this.props.route.params.deck})
        }
    render(){
        let question= this.props.route.params.question
        let item1 = this.props.route.params.item
        let score = 0
        console.log(question,this.props.route.params.score );
        return(
            <View style={styles.container}>
                {question.length === item1?(<View>
                    <Text>Congrats you complete your Quiz !!</Text>
                    <Text>your score is {this.props.route.params.score} out of {question.length}</Text>
                    <Button title="take the Quiz again" onPress={()=>this.ReTest(question)}/>
                    <Button title="Go back" onPress={()=>{this.GoBack()}}/>  
                </View>):(<View>
                    <Text >{item1+1}/{question.length }</Text>
                    <Text style={{textAlign: 'center',fontSize: 15}}>{question[item1].question}</Text>
                    {this.state.show?(<Text>{question[item1].answer}</Text>):(<View></View>)}
                    <Button onPress={()=> {
                        this.setState({show:!this.state.show})}
                        } title="Show Answer "> </Button>
                        <Button title="Correct" onPress={()=>{score = 1}}/>
                        <Button title="False"/>
                        <Button title="Next" onPress={()=>{
                            this.navigate(question, score)
                            } 
                            }/>
                </View>)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 200,
    }});
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
