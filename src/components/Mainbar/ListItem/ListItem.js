import React from 'react';
import classes from './ListItem.module.css';
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
	return (
		<div className={classes.lists}>
			<NavLink to='/post'>
				<ul className={classes.listItem}>
					<li>{props.title}</li>
					<li>{props.date}</li>
					<li>автор: {props.name}</li>
				</ul>
			</NavLink>
		</div>
	);
}

export default ListItem; 