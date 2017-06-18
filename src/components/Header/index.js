import React, { Component } from 'react';
import logo from '../../assets/logo.jpg';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="pt-header">
				<div className="container">
					<img src={logo} className="pt-logo" alt="logo" />
				</div>
			</div>
		);
	}
}

export default Header;
