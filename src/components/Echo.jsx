import React, {Component} from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import $ from 'jquery'

//import nidhogg from 'nidhogg-jquery';
var echo_service = require('nidhogg-jquery/gen-js/TEchoService.js') 

//import Nidhogg from 'nidhogg-jquery';

class Echo extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'echo this text' , echo: 'echoed'};
//    this.testThrift = this.testThrift.bind(this);
  }

 testThrift(text) {
 	var transport = new Thrift.TXHRTransport("http://hraesvelgr.frank0631.com:9000/thrift/echo");
    var protocol  = new Thrift.TJSONProtocol(transport);
    var client    = new TEchoServiceClient(protocol);
    
    client.echo(this.state.text, function(result) {
    	this.setState({echo : result});
    	}.bind(this));
  }

  render() {
    return (
      <View >
        <Text>Echo</Text>
        
        <TextInput style={{padding: 10, fontSize: 42}}
	        onChangeText={(text) => this.setState({text})}
	        value={this.state.text} />
	        
        <Button style={{padding: 10, fontSize: 42}}
        	title="test echo" onPress={() => this.testThrift(this.state.text)} />
        
        <Text style={{padding: 10, fontSize: 42}}>
        	{this.state.echo}
        </Text>
      
      </View>
    );
  }
}

export default Echo;

