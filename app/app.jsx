var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Jason',
  location: 'Los Angeles'
};

var objTwo = {
  nationality: 'American',
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app</h1>,
  document.getElementById('app')
);
