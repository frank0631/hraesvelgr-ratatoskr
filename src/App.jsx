/*eslint-env es_modules */
import React, {Component} from 'react';
import { AppRegistry, Text, View, Button} from 'react-native';

//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-native';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import styles from './Style';
import Home from './components/Home';
import Echo from './components/Echo';
import Calc from './components/Calc';
import Customers from './components/Customers';

class App extends Component {
  render() {
    return (
    <Router>   	    
      <View style={styles.box}>
      
      <Text style={styles.text}>
      	<Link to="/"> Home </Link>{' | '}
      	<Link to="/calc"> Calculator </Link>{' | '}
      	<Link to="/customers"> Customers </Link>{' | '}
      	<Link to="/echo"> Echo </Link>
      </Text> 

	    <View style={styles.box}>      	
	        <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/calc" component={Calc} />
				<Route path="/customers" component={Customers} />
				<Route path="/echo" component={Echo} />
			</Switch> 
		</View>
		      
      </View>
     </Router> 
    );
  }
}


AppRegistry.registerComponent('App', () => App);
