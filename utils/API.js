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

export const getDecks = async () => {
    let data = await AsyncStorage.getItem(Deck);
    data = JSON.parse(data);
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