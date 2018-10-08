import React from 'react';


export default (props) =>{
	
	this.generateTd = (user) =>{
		var tdArray =[];
		for(let key in user) {
			tdArray.push(	<td key={key}>{user[key]}</td>)
		}
		return tdArray;
	}

	return(
		<tr key={props.user.id}>
			{ this.generateTd(props.user)}
		</tr>
		)
}