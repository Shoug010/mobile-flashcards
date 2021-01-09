import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class QuizView extends Component {
   
    navigate=(question)=>{
        const navigation = this.props.navigation;
        navigation.navigate("Quiz",{question:question,item:0,score:0, deck:this.props.route.params.deck})
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


