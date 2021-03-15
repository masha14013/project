const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TITLE_TEXT = 'UPDATE-NEW-TITLE-TEXT';
const UPDATE_NEW_CONTENT_TEXT = 'UPDATE-NEW-CONTENT-TEXT';
const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT';

let initialState = {
	lists: [],
	newTitleText: '',
	newContentText: '',
	newNameText: ''
}

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let title = state.newTitleText;
			let content = state.newContentText;
			let name = state.newNameText;

			let now = new Date();
			let date = now.getDate();
			let month = now.getMonth() + 1;
			let year = now.getFullYear();
			let currentDate = `${date}.${month}.${year}`;

			return {
				...state,
				lists: [...state.lists, { id: 4, title: title, content: content, date: currentDate, name: name }],
				newTitleText: '',
				newContentText: '',
				newNameText: ''
			}
		}


		case UPDATE_NEW_TITLE_TEXT: {
			return {
				...state,
				newTitleText: action.newText
			}
		}
		case UPDATE_NEW_CONTENT_TEXT: {
			return {
				...state,
				newContentText: action.newText
			}
		}
		case UPDATE_NEW_NAME_TEXT: {
			return {
				...state,
				newNameText: action.newText
			}
		}
		default:
			return state;
	}
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewTitleTextActionCreator = (text) =>
	({ type: UPDATE_NEW_TITLE_TEXT, newText: text })
export const updateNewContentTextAC = (text) =>
	({ type: UPDATE_NEW_CONTENT_TEXT, newText: text })
export const updateNewNameTextAC = (text) =>
	({ type: UPDATE_NEW_NAME_TEXT, newText: text })

export default listReducer;
