import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { FlatList, Text, View ,Button,StyleSheet} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,clearAppData} from '../utils/API'
import {CommonActions} from '@react-navigation/native';

class DeckListView extends Component {
    state = {
        deck:{},
      };
    
    componentDidMount(){
        submitNewDuck( "user")
        submitNewDuck("user")
        getDecks().then((deck)=>{
        this.setState(()=>({deck}))
        console.log("deck = ", deck);
        })
        console.log("comp did");
    } 
    navigate=(deck)=>{
        const navigation = this.props.navigation;
        navigation.navigate("DeckView",{deck:deck})
        console.log("n d = ",deck);
    }
    renderItem = ({item})=>{
        return (<View style={{flex: 1,height:100, backgroundColor: 'powderblue'}} key={item}> 
        <Button style={{textAlign: 'center',color: 'black',fontWeight: 'bold',fontSize: 25,}} onPress ={()=>{const navigation = this.props.navigation;
        navigation.navigate("DeckView",{deck:this.state.deck[item]})
        console.log("n d = ",this.state.deck[item]);}} title={this.state.deck[item].title}> </Button>
        <Text style={{textAlign: 'center',fontSize: 15}}>{this.state.deck[item].questions.length} cards </Text>
         </View>)
    }
    render(){  
        return(
            <View style={styles.container}>
                <Text>This is DeckListView component </Text>
                {this.state.deck === null ? (<Text>There is no deck !</Text>):(<View><FlatList data= {Object.keys( this.state.deck)} renderItem={this.renderItem}/></View>)}
                <Button title="refresh" onPress={()=>{
                    getDecks().then((deck)=>{
                        this.setState(()=>({deck}))
                        console.log("duck2 = ", deck);
                    })
                }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 200,
    }});
export default DeckListView;
/*
Deck List View (Default View) "done"
displays the title of each Deck "done"
displays the number of cards in each deck "done"


*/