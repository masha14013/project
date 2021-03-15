import AddPost from './AddPost';
import { addPostAC, updateNewTitleTextActionCreator, updateNewContentTextAC, updateNewNameTextAC } from '../../business/list-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		listPage: state.listPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewTitleText: (text) => {
			dispatch(updateNewTitleTextActionCreator(text));
		},
		updateNewContentText: (text) => {
			dispatch(updateNewContentTextAC(text));
		},
		updateNewNameText: (text) => {
			dispatch(updateNewNameTextAC(text));
		},
		addPost: () => {
			dispatch(addPostAC());
		}
	}
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;