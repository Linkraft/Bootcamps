import React, { Component } from 'react';

class BuildingList extends Component {

	selectedUpdate(val) {
		this.props.selectedUpdate(val);
	}

	render() {
		const buildingList = this.props.data
		.filter(listing => {
			return listing.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr id="boxy" 
					onClick={(e) => this.selectedUpdate(directory.id)}
					key={directory.id}>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			)
		});

		return (
			<div>
				{buildingList}
			</div>
		);
	}
}

export default BuildingList;