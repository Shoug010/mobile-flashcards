import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
const Deck = 'Deck'
const NOTIFICATION_KEY = 'MobileFlashcard:notifications'

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
    console.log("getDecks",data);
    return data;
  }

  export const getDeckByKey= async (key) => {
    let data = await AsyncStorage.getItem(Deck);
    data = JSON.parse(data);
    data=data[key] 
    console.log("getDeckByKey",data);
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

}
export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Do not forgot to test your self!',
    body: "!",
    ios: {
      sound: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(23)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}