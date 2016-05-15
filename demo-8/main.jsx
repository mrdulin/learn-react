var React = require('react');
var ReactDOM = require('react-dom');

var GreetingComponent = React.createClass({
    render: function () {
        return (
            <div>Hello,{this.props.name}</div>
        );
    }
});

var GenericComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Nested Custom ReactComponent</h1>
                <GreetingComponent name={this.props.name}/>
            </div>
        )
    }
});

ReactDOM.render(
    <GenericComponent name="novaline"></GenericComponent>,
    document.getElementById('container')
);