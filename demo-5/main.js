/**
 * Created by dul on 2016/5/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var SetIntervalMixin = {
    componentWillMount: function () {
        console.log(this);
        this.intervals = [];
    },
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        this.intervals.map(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins: [SetIntervalMixin],
    getInitialState: function () {
        return {seconds: 0};
    },
    componentDidMount: function () {
        //调用mixins中的方法
        this.setInterval(this.tick, 1000);
    },
    tick: function () {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    render: function () {
        return (<p>React has been running for {this.state.seconds} seconds</p>);
    }
});

ReactDOM.render(
    <TickTock></TickTock>,
    document.getElementById('container')
);