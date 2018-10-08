import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Customer from './Customer';
import NewCustomer from './NewCustomer';

var hybind = require("hybind");

class Customers extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      customers: []
      };
    this.getCustomers = this.getCustomers.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    }
    
    getCustomers(){
      var customers = [];
    var api = hybind(HRAESVELGR_API_ADDRESS+"/data");
    api.$bind("customers", customers);

    customers.$load().then(function() {
      console.log(`length of customers: ${customers.length}`);
      this.setState({
            loading: false,
            customers: customers,
          });
    }.bind(this));
    }

    addCustomer(c){
      var customers = [];
      var api = hybind(HRAESVELGR_API_ADDRESS+"/data");
    api.$bind("customers", customers);

      customers.$create(c).then(function() {
        console.log('adding customer:',{c});
        this.getCustomers();
    }.bind(this));
    }
    
  componentDidMount() {
    this.getCustomers();
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
    <Customer customer={c} key={c.id} />
    ));  
	
    return (
      <View >
    <NewCustomer onAdd={this.addCustomer} />
        <Text>Customers</Text>
        {customerList}
      </View>
    );
  }
}

export default Customers;

