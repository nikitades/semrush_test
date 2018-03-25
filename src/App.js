import React from 'react';
import MainPage from "./_containers/MainPage";
import ErrorReporter from "./_containers/ErrorReporter";
import { Switch, Route } from 'react-router-dom'
import UserPage from "./_containers/UserPage";

export default class App extends React.Component {
    render() {
        return (
            <ErrorReporter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/person/:id" component={UserPage}/>
                </Switch>
            </ErrorReporter>
        );
    }
}