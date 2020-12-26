import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { FlatList, Text, View } from 'react-native';
import {submitNewDuck, getDecks,getall} from '../utils/API'

class DeckListView extends Component {
    state = {
        duck:{},
      };
    
    componentDidMount(){
        getall()
        submitNewDuck( "user")
        submitNewDuck("user1")
        getDecks().then((duck)=>{
        this.setState(()=>({duck}))
        console.log("duck = ", duck);
        })
        console.log("comp did");
    }
    renderItem = ({item})=>{
        return  <Text key={item}>"{this.state.duck[item].title}" hava card number  {this.state.duck[item].questions.length}</Text>
    }
    render(){  
        const Du =Object.keys( this.state.duck)
        console.log("get= ",Du)
        return(
            <View>
                <Text>This is DeckListView component </Text>
                {this.state.duck === null ? (<Text>There is no duck !</Text>):(<View><FlatList data= {Du} renderItem={this.renderItem}/></View>)}
            </View>
        )
    }
}
export default DeckListView;
/*
Deck List View (Default View)
displays the title of each Deck
displays the number of cards in each deck

 {g.map((a)=>{
                    <Text>a.key</Text>
                })}
*/