import React, {Component} from 'react';
import { Text, View, Button, TextInput } from 'react-native';

var customer_types = require('nidhogg-jquery/gen-js/customer_types.js')

class NewCustomer extends Component {

	constructor(props) {
		super(props);
		this.state = {
    	first: '' , 
    	last: ''};
    }
    
    addCustomer(){
    	var c = new Customer({firstName:this.state.first, lastName:this.state.last});
    	this.props.onAdd(c);
    }

  render() {
  	
    return (
      <View >
      	<TextInput
        	style={{padding: 10, fontSize: 42}}
        	placeholder="Frank"
        	onChangeText={(text) => this.setState({first:text})}
	    /> 
	    <TextInput
        	style={{padding: 10, fontSize: 42}}
        	placeholder="Rodriguez"
        	onChangeText={(text) => this.setState({last:text})}
	    /> 
	    
	    <Button style={{padding: 10, fontSize: 42}}
        	title="Add customer" onPress={() => this.addCustomer()} />
        
      </View>
    );
  }
}

export default NewCustomer;

