import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../action/index';

export class Home extends React.Component {
  logoutUser() {
    this.props.logoutUser();
  }

  render() {
    return ( this.props.isUserLoggedIn ?
      <div>
        <h1>Welcome {this.props.email}!</h1>
        <p> You have successfully logged into the application.</p>
        <button type="button" className="btn btn-primary" onClick={this.logoutUser.bind(this)}>Logout</button>
      </div> :
      <div>
        <h1>This is the home page of the application.</h1>
        <p>To login or register please click on the respective tab. To get more information about this app navigate to the about us tab.</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  };
};

const mapStateToProps = (state) => {
  return { isUserLoggedIn: state.isUserLoggedIn, email: state.email };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
