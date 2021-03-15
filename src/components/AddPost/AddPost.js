import React from 'react';
import classes from './AddPost.module.css';
import { NavLink } from 'react-router-dom';

const AddPost = (props) => {

	let newTitleElement = React.createRef();
	let newContentElement = React.createRef();
	let newNameElement = React.createRef();

	let addPost = () => {
		if (newTitleElement.current.value && newContentElement.current.value && newNameElement.current.value) {
			props.addPost();
		} else {
			alert("Заполните все поля");
		}

	}

	let onTitleChange = () => {
		let text = newTitleElement.current.value;
		props.updateNewTitleText(text);
	}
	let onContentChange = () => {
		let text = newContentElement.current.value;
		props.updateNewContentText(text);
	}
	let onNameChange = () => {
		let text = newNameElement.current.value;
		props.updateNewNameText(text);
	}

	return (
		<div>
			<form className={classes.formBlock}>
				<h3>Введите данные в форму</h3>
				<div><input name="title" type="text" ref={newTitleElement} value={props.newTitleText} placeholder="заголовок" onChange={onTitleChange} /></div>
				<div><textarea ref={newContentElement} value={props.newContentText} placeholder="содержание" onChange={onContentChange} /></div>
				<div><input type="text" ref={newNameElement} value={props.newNameText} placeholder="имя автора" onChange={onNameChange} /></div>

				<div><NavLink to=''><input className={classes.submitBut} type="submit" value="Отправить" onClick={addPost} /></NavLink></div>
			</form>
		</div>
	);

	/*return (
		<div>
			<form className={classes.formBlock}>
				<div><label>Заголовок <input name="title" type="text" ref={newTitleElement} value={props.newTitleText} placeholder="заголовок" onChange={onTitleChange} /></label></div>
				<div>
					<label>Контент
						<textarea ref={newContentElement} value={props.newContentText} placeholder="содержание" onChange={onContentChange} />
						<div><input type="file" /></div>
					</label>
				</div>
				<div><label>Имя автора <input type="text" ref={newNameElement} value={props.newNameText} placeholder="имя" onChange={onNameChange} /></label></div>

				<div><NavLink to=''><input className={classes.submitBut} type="submit" value="Отправить" onClick={addPost} /></NavLink></div>
			</form>
		</div>
	);*/
}

export default AddPost;