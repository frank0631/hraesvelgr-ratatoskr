import React, {Component} from 'react';
import { Text, View, Button, TextInput, Picker } from 'react-native';


var calc_service = require('nidhogg-jquery/gen-js/TCalculatorService.js') 
var calc_types = require('nidhogg-jquery/gen-js/calculator_types.js')

class Calc extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
    	val1: '10' , 
    	val2: '5',
    	operation: TOperation.ADD,
    	result: ''};
    }
  
  validateNumbers(num){
	  var re =  /^\d+$/;
	  return re.test(num);
	  };
	
  onChangeTextNum(text,variable){
  		if (!text)
  			this.setState({[variable]: '0'})
		else if (this.validateNumbers(text)) 
  				this.setState({[variable]: text})		
	}
	
 calc() {
 	var endpoint = HRAESVELGR_API_HOST +":"+ HRAESVELGR_API_PORT;
 	var transport = new Thrift.TXHRTransport(endpoint+"/thrift/calculator");
    var protocol  = new Thrift.TJSONProtocol(transport);
    var client    = new TCalculatorServiceClient(protocol);
    
    client.calculate(
    this.state.val1,
    this.state.val2,
    this.state.operation,
    function(result) {
    	this.setState({'result' : result});
    	transport.close();
    	}.bind(this));
  }
	
  render() {
    return (
      <View >
        <Text>Calc</Text>
        
        <TextInput
        	style={{padding: 10, fontSize: 42}}
//        	keyboardType = 'numeric'
        	onChangeText={(text) => this.onChangeTextNum(text,'val1')}
	    	value={this.state.val1}
	    /> 
	    
	    <Picker
		  selectedValue={this.state.operation}
		  onValueChange={(itemValue, itemIndex) => this.setState({operation: itemValue})}>
		  <Picker.Item label="+" value={`${TOperation.ADD}`} />
		  <Picker.Item label="-" value={`${TOperation.SUBTRACT}`} />
		  <Picker.Item label="*" value={`${TOperation.MULTIPLY}`} />
		  <Picker.Item label="/" value={`${TOperation.DIVIDE}`} />
		</Picker>
                
        <TextInput
        	style={{padding: 10, fontSize: 42}}
//        	keyboardType = 'numeric'
        	onChangeText={(text) => this.onChangeTextNum(text,'val2')}
	    	value={this.state.val2}
	    /> 
        
        <Button style={{padding: 10, fontSize: 42}}
        	title="=" onPress={() => this.calc()} />
        	
         <Text style={{padding: 10, fontSize: 42}}>
        	{this.state.result}
        </Text>
        
      </View>
    );
  }
}

export default Calc;
