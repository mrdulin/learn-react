//entry of application

var React = require('react');
var ReactDOM = require('react-dom');
var Authentication = require('./Auth.jsx');
var Workoutlog = require('./Workoutlog.jsx');

var App = React.createClass({
    getInitialState: function () {
        return {signedIn: false};
    },
    render: function () {
        return (
            <div>
                {this.state.signedIn
                    ? <Workoutlog onLogout={this._onLogout}></Workoutlog>
                    : <Authentication onAuthComplete={this._onAuthComplete}></Authentication>}
            </div>
        );
    },
    _onAuthComplete: function (result) {
        console.log('_onAuthComplete', result);
        if (result()) {
            this.setState({signedIn: true});
        }
    },

    _onLogout: function () {
        this.setState({signedIn: false});
    }
});

ReactDOM.render(
    <App></App>,
    document.getElementById('container')
);
