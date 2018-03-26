import React from "react";
import {updateSearchFilter} from "../actionCreators/resultsActions";
import {connect} from "react-redux";
import UsersList from "../_elements/UsersList";
import LoadingScreen from "../_elements/LoadingScreen";
import navigateTo from "../helpers/navigateTo";

class SearchResults extends React.Component {
    componentDidMount() {
        this.props.updateSearchFilter();
    }

    getUsersList() {
        return <div className="mt-5 mb-5">
            <UsersList items={this.props.results} setUserById={this.setUserById.bind(this)}/>
        </div>
    }

    setUserById(id) {
        navigateTo('#/person/' + id);
    }

    render() {
        return <div>
            {this.props.results === null ? <LoadingScreen/> : this.getUsersList()}
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
        updateSearchFilter: () => dispatch(updateSearchFilter())
    }
};

export default connect(mapStateToProps, mapActionsToProps)(SearchResults);