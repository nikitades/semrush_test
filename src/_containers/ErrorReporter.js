import React from "react";
import {connect} from "react-redux";
import {registerError} from "../actionCreators/errorActions";
import store from "../getStore";

class ErrorReporter extends React.Component {
    componentDidCatch(e) {
        this.props.registerError(e);
    }

    getErrorScreen() {
        return <div className="container">
            <h1>Whoops, an error occured.</h1>
            <h3>Don't panic, we already know and doing things.</h3>
        </div>
    }

    render() {
        return !!this.props.error ? this.getErrorScreen() : this.props.children;
    }

    static showError(e) {
        store.dispatch({
            type: 'REGISTER_ERROR',
            payload: e
        });
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

const mapActionsToProps = dispatch => {
    return {
        registerError: e => dispatch(registerError(e))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ErrorReporter);