import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component{
    componentWillMount() {
        firebase.initializeApp({
          apiKey: 'AIzaSyD6a23en0qebNnMjEimrZ6el1aaiVULN-M',
          authDomain: 'auth-bc80e.firebaseapp.com',
          databaseURL: 'https://auth-bc80e.firebaseio.com',
          projectId: 'auth-bc80e',
          storageBucket: 'auth-bc80e.appspot.com',
          messagingSenderId: '661189301752'
        });
}

    render(){
      return(
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
        );
    }

}

export default App;
