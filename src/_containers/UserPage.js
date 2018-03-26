import React from "react";
import {connect} from "react-redux";
import SearchForm from "../_components/SearchForm";
import Filter from "../_components/Filter";
import SearchResults from "../_components/SearchResults";
import ClientInfo from "../_components/ClientInfo";
import LoadingScreen from "../_elements/LoadingScreen";

class UserPage extends React.Component {
    render() {
        switch (this.props.currentUser) {
            case 'fetching':
                return <div className="container">
                    <LoadingScreen/>
                </div>;
            case 'wrong':
                return <div className="container">
                    <h4>Sorry, the user is not found.</h4>
                    <SearchForm/>
                    <Filter/>
                    <SearchResults/>
                </div>;
            default:
                return <div className="container">
                    <ClientInfo/>
                    <SearchForm/>
                    <Filter/>
                    <SearchResults/>
                </div>;
        }
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

export default connect(mapStateToProps)(UserPage);