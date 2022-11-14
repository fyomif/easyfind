import React, {Component} from 'react';
import './floating_button.css';


class floating_button extends Component {
    render() {
        const {} = this.props;
        return (
            <button className="button" onClick={this.props.action}> {this.props.name}
            </button>
        );
    }
}

floating_button.propTypes = {};

export default floating_button;