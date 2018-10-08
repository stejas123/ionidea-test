import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../common/header'
import './style.css';

class Login extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isError : ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(e){
		e.preventDefault();

		const {
			username : {
				value : userName
			},
			password : {
				value : passWord
			}
		} = this.form;

		if(!userName || !passWord) {
			this.setState((oldState)=>{
				return {
					isError: 'you cannot leave username or password blank'
				}
			})

		setTimeout(()=>{
			this.setState((oldState)=>{
				return {
					isError: ''
				}
			})
		},2000)
		} else if( userName && !passWord.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/ig)) {
		this.setState((oldState)=>{
				return {
				isError: 'Your password is incorrect.'
				}
			})

		setTimeout(()=>{
			this.setState((oldState)=>{
				return {
				isError: ''
			}
			})
		},2000)
	} else {

		localStorage.setItem('isLoggedIn', true);

		this.props.history.push('/userInfo');
	}
	}

	componentDidMount(){

		localStorage.getItem('isLoggedIn') && this.props.history.push('/userInfo');
	}


	render() {
		return (
			<div>
				<Header />
				<form onSubmit={this.handleSubmit} ref={form => this.form = form}>
					<div>
						<input type='text' name='username' placeholder="username" />
					</div>
					<div>
						<input type='password' name='password' placeholder="password" />
					</div>
					<div>
						<button type='submit'> Login </button>
						<span className="error">{this.state.isError}</span>
					</div>
				</form>
			</div>
			)
	}
}

export default withRouter(Login);