import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import TopBar from './components/TopBar';

const App = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <TopBar />
                </Switch>
            </main>
        </Router>
    )
}

export default App
