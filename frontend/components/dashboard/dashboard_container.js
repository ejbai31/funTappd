import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { receiveCurrentUser, getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  console.log(state.session.currentUser.username);
  return {user: state.session.currentUser};

};


const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser: (userId) => dispatch(getCurrentUser(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);