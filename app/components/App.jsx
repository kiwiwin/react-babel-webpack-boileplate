import React from 'react';

require('./App.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
      <h1>Hello World</h1>
      <h2>Bye Bye</h2>
      </div>
    );
  }
}
