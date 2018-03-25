import React from "react";
import User from "./User";
import PaginatorPage from "./PaginatorPage";

const pageSize = 10;

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.maxPage = Math.ceil(this.props.items.length / pageSize) - 1;
        this.state = {
            page: 0
        }
    }

    setPage(e) {
        let page = e.target.getAttribute('data-page');
        this.setState({
            page
        });
        e.preventDefault();
    }

    getPaginator() {
        return <div className="mt-5">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {(!!+this.state.page) ? (
                        <li className="page-item"><a data-page={+this.state.page - 1} onClick={this.setPage.bind(this)}
                                                     className="page-link" href="#">Previous</a></li>) : null}
                    {this.getPaginatorPages()}
                    {(+this.state.page + 1) > this.maxPage ? null : (
                        <li className="page-item"><a data-page={+this.state.page + 1} onClick={this.setPage.bind(this)}
                                                     className="page-link" href="#">Next</a></li>)}
                </ul>
            </nav>
        </div>;
    }

    getPaginatorPages() {
        let pages = [];
        let pageStart = (+this.state.page - 5 > 0) ? +this.state.page - 5 : 0;
        let pageEnd = (+this.state.page + 5 > +this.maxPage) ? this.maxPage : +this.state.page + 5;
        for (let i = pageStart; i <= pageEnd; i++) {
            pages.push(<PaginatorPage key={i} currentPage={this.state.page} i={i} setPage={this.setPage.bind(this)}/>)
        }
        return pages;
    }

    render() {
        return <div>
            {this.props.items.filter((item, i) => {
                return i >= pageSize * this.state.page && i <= pageSize * (+this.state.page + 1);
            }).map((item, i) => <User key={i} user={item}/>)}
            {this.getPaginator()}
        </div>;
    }
}