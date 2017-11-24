import { connect } from 'react-redux';
import { signup, login, receiveSessionErrors } from '../../actions/session_actions';
import Frontpage from './frontpage';
import { withRouter } from 'react-router';

const mapStateToProps = ({ sessionReducer, errors }) => {
  return {
    currentUser: sessionReducer.currentUser,
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
    // login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(receiveSessionErrors([]))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Frontpage));