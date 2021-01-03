import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { FlatList, Text, View ,Button,StyleSheet} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,clearAppData} from '../utils/API'
import {CommonActions} from '@react-navigation/native';

class DeckListView extends Component {
    state = {
        duck:{},
      };
    
    componentDidMount(){
        submitNewDuck( "user")
        submitNewDuck("user")
        getDecks().then((duck)=>{
        this.setState(()=>({duck}))
        console.log("duck = ", duck);
        })
        console.log("comp did");
    } 
    navigate=(duck)=>{
        const navigation = this.props.navigation;
        navigation.navigate("DeckView",{duck:duck})
        console.log("n d = ",duck);
    }
    renderItem = ({item})=>{
        return (<View style={{flex: 1,height:100, backgroundColor: 'powderblue'}} key={item}> 
        <Button style={{textAlign: 'center',color: 'black',fontWeight: 'bold',fontSize: 25,}} onPress ={()=>{const navigation = this.props.navigation;
        navigation.navigate("DeckView",{duck:this.state.duck[item]})
        console.log("n d = ",this.state.duck[item]);}} title={this.state.duck[item].title}> </Button>
        <Text style={{textAlign: 'center',fontSize: 15}}>{this.state.duck[item].questions.length} cards </Text>
         </View>)
    }
    render(){  
        return(
            <View style={styles.container}>
                <Text>This is DeckListView component </Text>
                {this.state.duck === null ? (<Text>There is no duck !</Text>):(<View><FlatList data= {Object.keys( this.state.duck)} renderItem={this.renderItem}/></View>)}
                <Button title="refresh" onPress={()=>{
                    getDecks().then((duck)=>{
                        this.setState(()=>({duck}))
                        console.log("duck2 = ", duck);
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