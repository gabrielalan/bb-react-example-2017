import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends Component {

	getClasses() {
		const classes = ["pt-modal"];

		if (this.props.show) {
			classes.push('pt-modal-show');
		}

		return classes.join(' ');
	}

	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<div className={this.getClasses()}>
				<div className="pt-modal-holder">
					{this.props.children}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	show: PropTypes.bool.isRequired
};

export default Modal;
