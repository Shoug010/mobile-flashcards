import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { getDecks,submitNewQuestion} from '../utils/API'

class NewQuestionView extends Component {
    state = {
        deck:{},
      };
    
    navigateToQuiz=()=>{
        const navigation = this.props.navigation;
        navigation.navigate("DeckView",{deck:this.state.deck})
    }
    render(){
            let questions={
                question: ' ',
                answer: ' '
            } 
        return(
            <View>
                <Text>This is NewQuestionView component</Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChangeText={
                    (text) => {questions.question=text}
                }/>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}} onChangeText={
                    (text) => {questions.answer=text}
                    }/>
                <Button title="Submit" onPress={()=>{
                    submitNewQuestion(this.props.route.params.deck.title,questions)
                    getDecks().then((deck)=>{
                        this.setState(()=>({deck:deck[this.props.route.params.deck.title]}))
                        console.log("duck2 = ", deck);
                        this.navigateToQuiz()
                    })
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
