import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import setCities from '../actions'

class CityList extends Component {


  componentWillMount() {
    this.props.setCities();
  }

  render = () => {
    return (
      <div className="col-sm-5">
        TODO
      </div>
    )
  };
}

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {setCities: setCities},
      dispatch
    );
  }

  function mapStateToProps(state) {
    return {
      cities: state.cities
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (CityList);
