/**
 * Created by dul on 2016/5/14.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function () {
        return (<div>{this.props.name}</div>);
    }
});

ReactDOM.render(
    <MyComponent name="novaline"/>,
    document.getElementById('container')
);