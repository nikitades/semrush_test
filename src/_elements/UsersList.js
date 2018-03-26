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
                    <li className={"page-item" + ((!!+this.state.page) ? '' : ' disabled')}>
                        <a data-page={+this.state.page - 1} onClick={this.setPage.bind(this)}
                           className="page-link" href="#">Previous</a>
                    </li>
                    {this.getPaginatorPages()}
                    <li className={"page-item" + ((+this.state.page + 1) > this.maxPage ? ' disabled' : '')}><a
                        data-page={+this.state.page + 1} onClick={this.setPage.bind(this)}
                        className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>;
    }

    getPaginatorPages() {
        let pages = [];
        let pageStart, pageEnd, offset = 5, page = this.state.page, max = this.maxPage;
        pageStart = page - offset < 0 ? 0 : page - offset;
        pageEnd = +page + offset > +max ? max : +page + offset;
        if (page - offset < 0) pageEnd -= (page - offset);
        for (let i = pageStart; i <= pageEnd; i++) {
            pages.push(<PaginatorPage key={i} currentPage={this.state.page} i={i} setPage={this.setPage.bind(this)}/>)
        }
        return pages;
    }

    getContent() {
        if (this.props.items.length === 0) return <div className="text-center mt-5">
            <h5><i>{this.props.text || "No users found"}</i></h5>
        </div>;
        return this.props.items.filter((item, i) => {
            return i >= pageSize * this.state.page && i <= pageSize * (+this.state.page + 1);
        }).map((item, i) => <User setUserById={this.props.setUserById} key={i} user={item}/>);
    }

    render() {
        return <div>
            {this.getContent()}
            {this.getPaginator()}
        </div>;
    }
}