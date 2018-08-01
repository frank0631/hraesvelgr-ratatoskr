import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';
import App from "./App";

//ReactDOM.render(<App />,document.getElementById("root"));

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});


if (module.hot) {
  module.hot.accept();
}

