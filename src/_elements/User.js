import React from "react";

export default class User extends React.Component {
    onClick(e) {
        e.preventDefault();
        return this.props.setUserById(this.props.user.id);
    }

    render() {
        return <div className="mt-2">
            <div><b><a href="#" onClick={this.onClick.bind(this)}>{this.props.user.name}</a></b></div>
            <div style={{color: "gray"}}>{this.props.user.gender}, {this.props.user.age} y.o., works
                for {this.props.user.company}</div>
        </div>;
    }
}