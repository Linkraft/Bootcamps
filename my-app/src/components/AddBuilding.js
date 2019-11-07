import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code:'',
            name:'',
            address:'',
            latitude:'',
            longitude:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
        this.props.addData(
            this.state.code,
            this.state.name,
            this.state.address,
            this.state.latitude,
            this.state.longitude
        )
    }

    render() {
        return (
            <div id="buildForm">
                <div><b>Add a Building:</b></div>
                <form onSubmit={this.handleSubmit}>
                    Code:<br/><input id="buildForm" type="text" onChange = {(value) => this.setState({code: value})}/><br/>
                    Name:<br/><input id="buildForm" type="text" onChange = {(value) => this.setState({name: value})}/><br/>
                    Address:<br/><input id="buildForm" type="text" onChange = {(value) => this.setState({address: value})}/><br/>
                    Latitude:<br/><input id="buildForm" type="text" onChange = {(value) => this.setState({latitude: value})}/><br/>
                    Longitude:<br/><input id="buildForm" type="text" onChange = {(value) => this.setState({longitude: value})}/><br/>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddBuilding;