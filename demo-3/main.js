/**
 * Created by dul on 2016/5/14.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    displayName: 'MyComponent',

    render: function () {
        return React.createElement('div', null, this.props.name);
    }
});

ReactDOM.render(
    React.createElement(MyComponent, {name: 'novaline'}),
    document.getElementById('container')
);