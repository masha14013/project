import React from 'react';
import './App.css';
import AddPostContainer from './components/AddPost/AddPostContainer';
import MainbarContainer from './components/Mainbar/MainbarContainer';
import PostsContainer from './components/Posts/PostsContainer';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<Route path="/" exact render={() => <MainbarContainer />} />
			<Route path="/add-post" render={() => <AddPostContainer />} />
			<Route path="/post/:userId?" render={() => <PostsContainer />} />
		</div>
	);
}

export default App;
