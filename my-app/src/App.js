import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import './App.css';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: []
    };
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    })
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addData(code, name, address, latitude, longitude) {
    console.log(code, name, address, latitude, longitude);
    var newBuilding={
      id: 150,
      code: code, 
      name: name,
      address: address,
      coordinates: {
        latitude: latitude,
        longitude: longitude
      }
    }
    
    this.setState({
      data: this.state.data.concat([newBuilding])
    })
  }

  deleteData(id) {
    var index = this.state.data.findIndex(index => index.id === id);
    this.state.data.splice(index, 1);
    this.setState({
      selectedBuilding: 0
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1 id="Title">UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <AddBuilding
            addData = {this.addData.bind(this)}
          />
          <div className="row">
            <div className="column1" id="boxy">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr id="boxy">
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
                deleteData={this.deleteData.bind(this)}
              />
            </div>
          </div>
          <Credit/>
        </main>
      </div>
    );
  }
}

export default App;
