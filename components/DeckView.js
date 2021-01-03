import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Button, StyleSheet, Text, View ,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey} from '../utils/API'

class DeckView extends Component {
   
    navigateToAdd=()=>{
        const navigation = this.props.navigation;
        navigation.navigate("NewQuestionView",{title:this.props.route.params.deck.title})
    }
    navigateToQuiz=()=>{
        const navigation = this.props.navigation;
        navigation.navigate("QuizView",{questions: this.props.route.params.deck.questions,deck:this.props.route.params.deck})
    }
        
    render(){  
        console.log("bbb=",this.props.route.params.deck);
        let deck = this.props.route.params.deck
        return(
            <View style={styles.container}>
                <Text>This is View component </Text>
                {deck === null ? (<Text>There is no deck !</Text>):(<View >
                <Text style={{textAlign: 'center',color: 'black',fontWeight: 'bold',fontSize: 25,}}>{deck.title}</Text>
                <Text style={{textAlign: 'center',fontSize: 15}}> {deck.questions.length} card</Text>
                <Button title=" Add Card " onPress={this.navigateToAdd}/>
                <Button title="Start Quiz" onPress={this.navigateToQuiz}/></View>)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 200,
    }});

export default DeckView;


/*
displays the title of the Deck
displays the number of cards in the deck
displays an option to start a quiz on this specific deck
An option to add a new question to the deck
*/