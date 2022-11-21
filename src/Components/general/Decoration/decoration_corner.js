import React, {Component} from 'react';
import './decoration_corner.css'

class decoration_corner extends Component {
    render() {
        const {} = this.props;
        return (
            <div className={'corner-decoration '+ this.props.additional_class}>

            </div>
        );
    }
}

decoration_corner.propTypes = {};

export default decoration_corner;