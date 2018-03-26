import React from "react";
import {setAgeFrom, setAgeTo, setGender, setOccupation} from "../actionCreators/filterActions";
import {connect} from "react-redux";
import {updateSearchFilter} from "../actionCreators/resultsActions";

class Filter extends React.Component {
    render() {
        return <div className="row">
            <div className="col-12 col-md-4 mt-2 mt-md-0">
                <div className="btn-group">
                    <button type="button" onClick={this.setGender.bind(this, 'male')}
                            className={"btn btn-xs btn-xs btn-" + this.getGenderButtonClass('male')}>Male
                    </button>
                    <button type="button" onClick={this.setGender.bind(this, 'female')}
                            className={"btn btn-xs btn-xs btn-" + this.getGenderButtonClass('female')}>Female
                    </button>
                    <button type="button" onClick={this.setGender.bind(this, null)}
                            className={"btn btn-xs btn-xs btn-" + this.getGenderButtonClass(null)}>N/S
                    </button>
                </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mt-md-0">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Age</span>
                    </div>
                    <input onChange={this.setAgeFrom.bind(this)} type="number" min="0" className="form-control"
                           placeholder="from..." value={this.props.filter.age.from || ""}/>
                    <input onChange={this.setAgeTo.bind(this)} type="number" min="0" className="form-control"
                           placeholder="to..." value={this.props.filter.age.to || ""}/>
                </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mt-md-0">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Works for</span>
                    </div>
                    <input onChange={this.setOccupation.bind(this)} type="text" className="form-control"
                           placeholder="Horns & Hooves..." value={this.props.filter.occupation || ""}/>
                </div>
            </div>
        </div>;
    }

    getGenderButtonClass(type) {
        return this.props.filter.gender === type ? 'secondary' : 'light';
    }

    setGender(type) {
        return this.props.setGender(type);
    }

    async setAgeFrom(e) {
        return await this.props.setAgeFrom(e.target.value || null);
    }

    setAgeTo(e) {
        return this.props.setAgeTo(e.target.value || null);
    }

    setOccupation(e) {
        return this.props.setOccupation(e.target.value || null);
    }
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
};

const mapActionsToProps = dispatch => {
    return {
        setAgeFrom: async from => {
            await dispatch(setAgeFrom(from));
            await dispatch(updateSearchFilter());
        },
        setAgeTo: async to => {
            await dispatch(setAgeTo(to));
            await dispatch(updateSearchFilter());
        },
        setGender: async type => {
            await dispatch(setGender(type));
            await dispatch(updateSearchFilter());
        },
        setOccupation: async occupation => {
            await dispatch(setOccupation(occupation));
            await dispatch(updateSearchFilter());
        }
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Filter);