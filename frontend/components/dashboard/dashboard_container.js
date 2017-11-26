import { connect } from 'react-redux';
import Dashboard from './dashboard';
// import { receiveCurrentUser }

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser

});


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);