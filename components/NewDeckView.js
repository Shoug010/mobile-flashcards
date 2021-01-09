import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';
import {submitNewDuck, getDeckByKey,clearAppData} from '../utils/API'
import {CommonActions} from '@react-navigation/native';

class NewDeckView extends Component {
    state = {
        deck:{},
        text: ' '
      }
      toHome = () => {
        this.props.navigation.dispatch(
            CommonActions.goBack({
                key: 'DeckListView',
            }))
    }
    navigate=(deck)=>{
        console.log("NewDeckView new nav",deck);
        const navigation = this.props.navigation;
        navigation.navigate("DeckView",{deck:deck})
        console.log("NewDeckView n d = ",deck);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{textAlign: 'center',fontSize: 15}}>What is the Title for your new deck ? </Text>
                <TextInput style={{height : 40 , borderColor: 'gray', borderWidth: 2}}  placeholder="Type here titel of the duck"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button title="Submit" onPress={()=>{
                    console.log("new = ", this.state.text)
                    submitNewDuck(this.state.text)
                    getDeckByKey(this.state.text).then((deck)=>{
                        this.setState({deck})
                        this.navigate(deck)
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
export default NewDeckView;


/*
An option to enter in the title for the new deck
An option to submit the new deck title
*/