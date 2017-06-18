import React, { Component } from 'react';

import './Panel.css';

class Panel extends Component {
	render() {
		return (
			<div className="pt-panel" id={this.props.id}>
				<div className="pt-panel-title">
					<img src={this.props.icon} alt="panel icon" />
					<h2>{this.props.title}</h2>
				</div>
				<div className="pt-panel-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Panel;
