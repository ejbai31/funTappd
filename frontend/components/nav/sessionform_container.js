import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './sessionform';


const mapStateToProps = (state) => {
  

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);