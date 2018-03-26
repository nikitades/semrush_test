import React from 'react';
import MainPage from "./MainPage";
import ErrorReporter from "./ErrorReporter";
import UserPage from "./UserPage";
import {connect} from "react-redux";
import loadContent from "../helpers/loadContent";

class App extends React.Component {
    render() {
        return (
            <ErrorReporter>
                {!!this.props.currentUser ? <UserPage/> : <MainPage/>}
            </ErrorReporter>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

export default connect(mapStateToProps)(App);