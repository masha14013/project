import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		listPage: state.listPage
	}
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;