/**
 * Created by dulin on 2016/2/14.
 */
import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
    render() {
        return (
            <div>
                <p>Hello, {chance.first() === 'john' ? console.log('Got john') : console.log('Got someone else')}</p>
                <p>You're from {chance.country({full: true})}.</p>
            </div>
        );
    }
}

export default Detail;