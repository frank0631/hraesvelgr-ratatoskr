import React, {Component} from 'react';
import { Text, TextInput, View, Button } from 'react-native';

var echo_service = require('nidhogg-jquery/gen-js/TEchoService.js') 

class Echo extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'echo this text' , echo: 'echoed'};
  }

 echo() {
	var endpoint = HRAESVELGR_API_HOST +":"+ HRAESVELGR_API_PORT;
 	var transport = new Thrift.TXHRTransport(endpoint+"/thrift/echo");
    var protocol  = new Thrift.TJSONProtocol(transport);
    var client    = new TEchoServiceClient(protocol);
    
    client.echo(this.state.text, function(result) {
    	this.setState({echo : result});
    	transport.close();
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
        	title="test echo" onPress={() => this.echo()} />
        
        <Text style={{padding: 10, fontSize: 42}}>
        	{this.state.echo}
        </Text>
      
      </View>
    );
  }
}

export default Echo;

