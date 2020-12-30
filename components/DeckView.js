import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Button, StyleSheet, Text, View ,FlatList} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey} from '../utils/API'

class DeckView extends Component {
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
        return  <Text key={item}>"{this.state.duck[item].title}" hava card number  {this.state.duck[item].questions.length}</Text>
    }
    render(){  
        const Du =Object.keys(this.state.duck)
        console.log("get= ",Du)
        return(
            <View>
                <Text>This is DeckListView component </Text>
                {this.state.duck === null ? (<Text>There is no duck !</Text>):(<View><FlatList data= {Du} renderItem={this.renderItem}/></View>)}

                <Button title=" Add Card "/>
                <Button title="Start Quiz"/>
            </View>
        )
    }
}

export default DeckView;


/*
displays the title of the Deck
displays the number of cards in the deck
displays an option to start a quiz on this specific deck
An option to add a new question to the deck
*/