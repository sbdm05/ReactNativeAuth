import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
  state ={ email:'', password:'', error:'', loading:false};


  onButtonPress(){
    const{email, password}=this.state;

    this.setState({error:'', loading:true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() =>{
            this.setState({error:'Denied'});
          });
        });
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner size="small" />;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
                  Login
            </Button >
      );
  }

  render(){
    return(
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeHolder="Your email here"
              value={this.state.email}
              onChangeText={text=>this.setState ({email:text})}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeHolder="Your password here"
              value={this.state.password}
              onChangeText={password=>this.setState ({password})}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>

            {this.renderButton()}
          </CardSection>
         </Card>
      );
  }
}

const styles={
  errorTextStyle:{
    height: 100,
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
