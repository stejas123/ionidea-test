import React from 'react';
import axios from 'axios';

import Header from '../common/header';
import TableRow from '../common/tableRow';
import './style.css';

class UserInfo extends React.Component {

	constructor(props){
		super(props);
		this.state={
			userData : []
		}
		super(props);
		this.getUserData = this.getUserData.bind(this);
		this.createColumns = this.createColumns.bind(this);
		this.createRows = this.createRows.bind(this);
	}

	getUserData(){
		axios.get('https://api.github.com/users').then(res=>{
			this.setState(()=>{
				return{
					userData : res.data
				}
			})
		})
	}

	componentDidMount(){
		this.getUserData();
	}

	createColumns(obj){
		let columnNames = [];
		for(var key in obj) {
			columnNames.push(key)
		};

		let headingStructure = columnNames.map(ele=> {
			return(
				<th key={ele}>
				{ele}
				</th>
			)
		});
		return(
			<tr className="headerRow">{headingStructure}</tr>
		)
	}

		createRows(data){
			return data.map(ele=>{
				return(
					<TableRow user={ele} key={ele.id}/>
				)
			})
		}

	render(){
		return(
			<div>
				<Header className="wrapper"/>
				<main className="wrapper">
					<h2>Here is a list of all github users:</h2>
					{this.state.userData.length ?
					<div className="userTable">
					<table >
					<tbody>
						{this.createColumns(this.state.userData[0])}
						
						{this.createRows(this.state.userData)}
						</tbody>
					</table>
					</div>
					:
					<p>Loading...</p>
					}
				</main>
			</div>
		)
	}
}

export default UserInfo;
