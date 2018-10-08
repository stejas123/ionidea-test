import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class Header extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			navState : ''
		}

		this.logOut = this.logOut.bind(this);

	}

	logOut(){
		localStorage.clear();
		this.setState((oldState)=>{
			return {
				navState: ''
			}
		})
		this.props.history.push('/');
	}

	componentDidMount() {

		console.log(this.props);
		this.setState((oldState)=>{
			return {
				navState : localStorage.getItem('isLoggedIn') ? 'Logout' : ''
			}
		})
	}

	render(){
		return(
			<header>
			<h1><a href="#" ><img src='http://www.ionidea.com/images/logo.png' alt='logo' /></a></h1>
			{
				this.state.navState &&
			<nav>
				<span onClick={e => this.logOut(e)}>{this.state.navState}</span>
			</nav>
			}	
			</header>
		)
	}
}

export default withRouter(Header);