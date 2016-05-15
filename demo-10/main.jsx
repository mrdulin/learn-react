var React = require('react');
var ReactDOM = require('react-dom');

//e.g. 1 spread attributes

var Hello = React.createClass({
    render: function () {
        return (
            <div>Hello, {this.props.name}, {this.props.greeting}</div>
        );
    }
});

var greeting = {name: 'novaline', greeting: 'Welcome come to USA'};

ReactDOM.render(
    <Hello {...greeting}></Hello>,
    document.getElementById('container1')
);


//e.g. 2 spread attributes with looping

var Item = React.createClass({
    render: function () {
        return <li>{this.props.text}</li>
    }
});

var List = React.createClass({
    render: function () {
        var len = 4, itemProp, formattedItems = [];
        for (var i = 0; i < len; i++) {
            itemProp = {key: i, text: 'item' + (i + 1)};
            formattedItems.push(<Item {...itemProp}></Item>);
        }
        return (
            <ul>
                {formattedItems}
            </ul>
        );
    }
});

ReactDOM.render(
    <List></List>,
    document.getElementById('container2')
);

//e.g. 3 Using Conditionals in JSX

var SignIn = React.createClass({
    render: function () {
        return <a href="/signIn">SignIn</a>;
    }
});

var UserMenu = React.createClass({
    render: function () {
        return <ul>
            <li>Item</li>
            <li>another item</li>
        </ul>;
    }
});

var MainApp = React.createClass({
    render: function () {
        var navElement;
        var isSignIn = false;

        //使用条件语句
        // if(isSignIn) {
        //     navElement = <UserMenu></UserMenu>;
        // } else {
        //     navElement = <SignIn></SignIn>;
        // }
        // return <div>{navElement}</div>;

        //或者使用三目运算符
        return <div>{ isSignIn ? <UserMenu></UserMenu> : <SignIn></SignIn> }</div>
    }
});

ReactDOM.render(
    <MainApp></MainApp>,
    document.getElementById('container3')
);