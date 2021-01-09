import React,{Component} from 'react';
import { FlatList, Text, View ,Button,StyleSheet,Animated} from 'react-native';
import {submitNewDuck, getDecks,getall,getDeckByKey,clearAppData} from '../utils/API'

class DeckListView extends Component {
    state = {
        deck:{},
        opacity: new Animated.Value(0)
      };
    componentDidMount(){
        console.log("DeckListView comp did");
        getDecks().then((deck)=>{
        this.setState(()=>({deck}))
        console.log("componentDidMount = ", deck);
        })
    } 
    navigate=(deck)=>{
        const navigation = this.props.navigation;
        navigation.navigate("DeckView",{deck:deck})
        console.log("DeckListView navigate d = ",deck);
    }
 
    renderItem = ({item})=>{
        const {opacity}=this.state.opacity
        return (<View style={[styles.ReView]}> 
        <Animated.Image
        style={[styles.img], opacity}
        source={{uri:'../book.png'}}
        />
        <Button color="#ffffff" style={{textAlign: 'center',
        fontWeight: "bold"}} onPress ={()=>{
            Animated.timing(opacity,{toValue:3,duration: 1000}).start()
            this.navigate(this.state.deck[item])}} title={this.state.deck[item].title}/>
        <Text style={{textAlign: 'center',fontSize: 15}}>{this.state.deck[item].questions.length} cards </Text>
         </View>)
    }
    render(){  
        console.log("DeckListView render");
        return(
            <View style={styles.container}>
                <Text>This is DeckListView component </Text>
                {this.state.deck === null ? (<Text>There is no deck !</Text>):(<View><FlatList data= {Object.keys( this.state.deck)} renderItem={this.renderItem} keyExtractor={(item , index)=>index.toString()}/></View>)}
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
      backgroundColor: "#eaeaea",
    },
    ReView:{
        flex: 1,
        height:100,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "rgb(0, 153, 153)",
       
    }
});
export default DeckListView;
/*
Deck List View (Default View) "done"
displays the title of each Deck "done"
displays the number of cards in each deck "done"


*/