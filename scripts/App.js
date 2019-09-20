import React from 'react';
import './app.scss';

const App = ({ className, children }) => (
    <div className='app'>
        <div className='body'>
            <main className={className}>{ children }</main>
        </div>
    </div>
);

export default App;