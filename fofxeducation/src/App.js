import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import React from "react";
import Title from "./Title";
import Notes from "./Notes";

function App() {
    return (
            <Router>
                <Switch>
                    <Route exact={true} path={'/'} render={() => (
                        <Title title={'f(x) education'}/>
                    )}/>
                    <Route path={'/:notes'} component={Notes}/>
                </Switch>

            </Router>
    );
}

export default App;
