import React from "react";
import {connect} from "react-redux";
import navigateTo from "../helpers/navigateTo";

class UserInfo extends React.Component {
    getUserInfo() {
        return <div className="row">
            <div className="col-11">
                <h4>{this.props.currentUser.name}</h4>
                <div style={{color: 'gray'}}>
                    <div>age: <b>{this.props.currentUser.age}</b></div>
                    <div>gender: <b>{this.props.currentUser.gender}</b></div>
                    <div>occupation: <b>{this.props.currentUser.company}</b></div>
                    <div>email: <b>{this.props.currentUser.email}</b></div>
                </div>
            </div>
            <div className="col-1">
                <a onClick={this.resetUser.bind(this)} href="#" className="btn btn-light">✕</a>
            </div>
        </div>;
    }

    resetUser(e) {
        e.preventDefault();
        navigateTo('#/');
    }

    render() {
        return <div className="mt-5">
            {this.getUserInfo()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(UserInfo);