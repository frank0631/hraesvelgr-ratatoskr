import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Customer extends Component {

	constructor(props) {
		super(props);
    }

  render() {
  	var c = this.props.customer;
  	
    return (
      <View >
        <Text style={{padding: 10, fontSize: 42}} >{c.firstName} {c.lastName}</Text>
      </View>
    );
  }
}

export default Customer;

