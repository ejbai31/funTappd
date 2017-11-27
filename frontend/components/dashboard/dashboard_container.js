import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { receiveCurrentUser, getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {user: state.session.user};

};


const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser: (userId) => dispatch(getCurrentUser(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);