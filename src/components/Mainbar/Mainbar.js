import React from 'react';
import ListItem from './ListItem/ListItem';
import classes from './Mainbar.module.css';
import { NavLink } from 'react-router-dom';

const Mainbar = (props) => {

	let state = props.listPage;

	return (
		<div className={classes.itemList}>
			<h1>Список</h1>
			<NavLink to='/add-post' className={classes.buttonAdd} activeClassName={classes.active}>Добавить запись</NavLink>
			<div className={classes.listElements}>{
				state.lists.map(l => <ListItem title={l.title} content={l.content} name={l.name} date={l.date} key={l.id} />)
			}</div>
		</div>
	);
}

export default Mainbar;