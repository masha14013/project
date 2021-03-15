import React from 'react';
import classes from './Posts.module.css';
import { NavLink } from 'react-router-dom';

const Posts = (props) => {

	return (
		<div className={classes.itemCard}>
			<h1>Заголовок</h1>
			<div>Контент</div>
			<div>Имя автора</div>
			<div>Дата</div>
			<NavLink to='/' className={classes.homeBut}>Ссылка на главную</NavLink>
		</div>
	);
}

export default Posts;