import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = ({sessionReducer}) => ({
  currentUser: sessionReducer.currentUser,

});


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);