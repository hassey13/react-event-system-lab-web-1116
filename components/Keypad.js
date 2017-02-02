const React = require('react');

class Keypad extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp() {
    console.log('Entering password...')
  }

  render() {
    return (<input type='password' onKeyUp={this.handleKeyUp}></input>)
  }

}

// In the components/Keypad.js file, create a Keypad React component.

// In that component, render an input with the right type.

// On that input, add an event handler that listens for the keyUp event.

// When that event fires, use console.log to print out the text 'Entering password...'.

module.exports = Keypad;
