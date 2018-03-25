import React from "react";

export default class PaginatorPage extends React.Component {
    render() {
        return <li className={"page-item" + (+this.props.currentPage === this.props.i ? ' active' : '')}>
            <a className="page-link"
               data-page={this.props.i}
               onClick={this.props.setPage}
               href="#">{this.props.i + 1}</a>
        </li>
    }
}