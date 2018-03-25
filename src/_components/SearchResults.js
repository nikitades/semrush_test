import React from "react";
import {goToUser, updateSearchFilter} from "../actionCreators/resultsActions";
import {connect} from "react-redux";
import User from "../_elements/User";
import SvgSpinner from '../resources/spinnerIcon.svg';
import UsersList from "../_elements/UsersList";

class SearchResults extends React.Component {
    componentDidMount() {
        this.props.updateSearchFilter();
    }

    getLoadingScreen() {
        return <div>
            <div className="text-center mt-5">
                <h5><i>Fetching items...</i></h5>
                <SvgSpinner/>
            </div>
        </div>;
    }

    getUsersList() {
        return <div className="mt-5 mb-5">
            <UsersList items={this.props.results}/>
        </div>
    }

    render() {
        return <div>
            {this.props.results === null ? this.getLoadingScreen() : this.getUsersList()}
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        results: state.results
    };
};

const mapActionsToProps = dispatch => {
    return {
        goToUser: id => dispatch(goToUser(id)),
        updateSearchFilter: () => dispatch(updateSearchFilter())
    }
};

export default connect(mapStateToProps, mapActionsToProps)(SearchResults);