import React from 'react';

class RemoveBuilding extends React.Component {
    render() {
        return (
            <input 
                id="remove" 
                type="submit" 
                value="Remove Building"
                onClick={(e) => this.props.deleteData(this.props.id)}
            />
        );
    }
}

export default RemoveBuilding;