import React, {Component} from 'react';
import { Text, View } from 'react-native';

var hybind = require("hybind");

class Customers extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
    	loading: true,
    	customers: [] 
    	};
    }
    
	componentDidMount() {
		var customers = [];
		var api = hybind("http://hraesvelgr.frank0631.com:9000/data");
		api.$bind("customers", customers);
		
		customers.$load().then(function() {
		  console.log(customers.length);
		  this.setState({
	          loading: false,
	          customers: customers,
	        });
		}.bind(this));
	}
	
  render() {
	if(this.state.loading){
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    };
	
	var customerList = 
		this.state.customers.map(c => ( 
		<Text key={c.id} style={{padding: 10, fontSize: 42}} >{c.firstName} {c.lastName}</Text>
		))    
	
    return (
      <View >
        <Text>Customers</Text>
        {customerList}
      </View>
    );
  }
}

export default Customers;

