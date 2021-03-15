import { connect } from 'react-redux';
import Mainbar from './Mainbar';

let mapStateToProps = (state) => {
	return {
		listPage: state.listPage
	}
}

const MainbarContainer = connect(mapStateToProps)(Mainbar);

export default MainbarContainer;