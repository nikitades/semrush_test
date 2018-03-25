import React from "react";

export default class User extends React.Component {
    render() {
        return <div className="mt-2">
            <div><b><a href={"#/person/" + this.props.user.id}>{this.props.user.name}</a></b></div>
            <div style={{color: "gray"}}>{this.props.user.gender}, {this.props.user.age} y.o., works
                for {this.props.user.company}</div>
        </div>;
    }
}