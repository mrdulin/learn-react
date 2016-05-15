/**
 * Created by dul on 2016/5/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var GenericComponent = React.createClass({
    getDefaultProps: function () {
        console.log('getDefaultProps');
        return {};
    },

    getInitialState: function () {
        console.log('getInitialState');
        return {};
    },

    componentWillMount: function () {
        console.log('componentWillMount');
    },

    render: function () {
        console.log('render');
        return (
            <div>Invoke order Testing</div>
        );
    },

    componentDidMount: function () {
        console.log('componentDidMount');
    }
});

ReactDOM.render(
    <GenericComponent></GenericComponent>,
    document.getElementById('container')
);