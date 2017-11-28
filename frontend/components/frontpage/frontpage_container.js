import { connect } from 'react-redux';
import { signup, login, receiveSignupErrors } from '../../actions/session_actions';
import Frontpage from './frontpage';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.signup
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
    // login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(receiveSignupErrors([]))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Frontpage));