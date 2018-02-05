import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  List,
  ListItem
} from 'react-native-elements'

export default class ReactNativeJwt extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      jwt: '',
      users: [],
    }
  }

  login(e) {
    //alert(this.state.password);
    var component = this;
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => {
      if (response.headers.map["authorization"] == undefined)
        console.log('not!!');
      else {
        var jwtString = response.headers.map["authorization"];
        component.setState({jwt: jwtString})

        fetch("http://localhost:8080/users", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtString,
          }
        })
        .then((response) => response.json())
        .then((json) => {
          component.setState({users: json});
        });
      }
    })
  }

  render() {
    if (this.state.jwt != '') {
      return (
        <View style={styles.container}>
          <Text style={{textAlign: "center"}}>사용자 목록</Text>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.users.map((user, i) => (
                <ListItem
                  key={i}
                  title={user.firstName + ' ' + user.lastName}
                />
              ))
            }
          </List>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <FormLabel>아이디</FormLabel>
          <FormInput
            onChangeText={text => this.setState({ username: text })}
            autoCapitalize="none"
            value={this.state.username} />
          <FormLabel>비밀번호</FormLabel>
          <FormInput
            onChangeText={text => this.setState({ password: text })}
            autoCapitalize="none"
            value={this.state.password} />
          <View style={{marginTop: 100}}>
            <Button
              raised
              title='로그인'
              onPress={e => this.login(e)}/>
            <Text>{this.state.jwt}</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 100
  },
});
