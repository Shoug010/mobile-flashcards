import AsyncStorage from '@react-native-community/async-storage'

const Deck = 'Deck'

const data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
let Score = 0
 export function getall (){
      return AsyncStorage.setItem(Deck,JSON.stringify(data))
  }
export function submitNewDuck( key1) {
    console.log("Added")
    return AsyncStorage.mergeItem(Deck,JSON.stringify({
         [key1] : {
            title: key1,
            questions:[]
         }
    })) 
}
export function Addscore (S){
    score= Score+S
}
export function gerScor(){
  return screen
}
export function clearScor (){
  return score=0
}
export const getDecks = async () => {
    let data = await AsyncStorage.getItem(Deck);
    data = JSON.parse(data);
    console.log(data);
    return data;
  }

  export const getDeckByKey= async (key) => {
    let data = await AsyncStorage.getItem(Deck);
    data = JSON.parse(data);
    data=data[key] 
    console.log(data);
    return data;
  }
  
export const clearAppData = async ()=> {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}
export function submitNewQuestion( key1,question) {
     let data 
     getDeckByKey(key1).then((duck)=>{
         data = duck
        console.log("d", duck);
        console.log("data" , data );
        data.questions.push(question)
        console.log(" duck =", data);
        AsyncStorage.mergeItem(Deck,JSON.stringify({
            [key1] : data
       }))
       getDecks().then((duck)=>{
        console.log("after = ", duck);
        })
        })
 
        //data.questions.push({question})
    // console.log(" duck =", data);
}