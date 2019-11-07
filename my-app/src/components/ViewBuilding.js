import React, { Component } from 'react';
import RemoveBuilding from './RemoveBuilding';
import BuildingList from './BuildingList';

class ViewBuilding extends Component {

	passDeleteData(id) {
		this.props.deleteData(id);
	}

	render() {
		
		const building = this.props.data
		.filter(building => building.id === this.props.selectedBuilding)
		.map(building => {
			if (building.coordinates) {
				return (
					<div>
						<dl>
							<dt><b>Building Code:</b></dt>
							<dd>{building.code}</dd>
							<dt><b>Name:</b></dt>
							<dd>{building.name}</dd>
							<dt><b>Address:</b></dt>
							<dd>{building.address}</dd>
							
							<dt><b>Coordinates:</b></dt>
							<dd>
								<div><b>Latitude:</b> {building.coordinates.latitude}</div>
								<div><b>Longitude:</b> {building.coordinates.longitude}</div>
							</dd>
						</dl>
						<RemoveBuilding deleteData = {this.passDeleteData.bind(this)} id={building.id}/>
					</div>
				);
			} else {
				return (
					<div>
						<dl>
							<dt><b>Building Code:</b></dt>
							<dd>{building.code}</dd>
							<dt><b>Name:</b></dt>
							<dd>{building.name}</dd>
						</dl>
						<RemoveBuilding deleteData = {this.passDeleteData.bind(this)}  id={building.id}/>
					</div>
				);
			}
		});
		return (
			<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>
				{building}
			</p>
		</div>
		);
	}
}
export default ViewBuilding;
