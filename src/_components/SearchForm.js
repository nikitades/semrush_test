import React from "react";
import {setOccupation, setSearchStr} from "../actionCreators/filterActions";
import {connect} from 'react-redux';
import {updateSearchFilter} from "../actionCreators/resultsActions";

class SearchForm extends React.Component {
    render() {
        return <div className="mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="searchStr">Search</label>
                    <input type="text" className="form-control" id="searchStr" placeholder="John Doe"
                           onChange={this.onChange.bind(this)} value={this.props.searchStr}/>
                    <small id="searchStrHelp" className="form-text text-muted">There is no need to press enter, the form
                        updates instantly
                    </small>
                </div>
            </form>
        </div>;
    }

    onChange(e) {
        this.props.setSearchStr(e.target.value);
    }
}

const mapStateToProps = state => {
    return {
        searchStr: state.filter.searchStr
    }
};

const mapActionsToProps = dispatch => {
    return {
        setSearchStr: async str => {
            await dispatch(setSearchStr(str));
            await dispatch(updateSearchFilter());
        }
    }
};

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);