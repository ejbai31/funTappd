import { connect } from 'react-redux';
import { signup, login, receiveSessionErrors } from '../../actions/session_actions';
import Frontpage from './frontpage';

const mapStateToProps = ({ session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(receiveSessionErrors([]))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);