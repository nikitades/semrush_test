import React from "react";
import SvgSpinner from '../resources/spinnerIcon.svg';

export default class LoadingScreen extends React.Component {
    render() {
        return <div className="text-center mt-5">
            <h5><i>{this.props.text || "Fetching..."}</i></h5>
            <SvgSpinner/>
        </div>;
    }
}