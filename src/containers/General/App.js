import React, { Component } from 'react';
import Header from '../../components/Header';
import Panel from '../../components/Panel/Panel';
import TransferForm from '../../components/Forms/Transfer';
import Transactions from '../../components/Transactions/Transactions';

import { makeTransfer } from '../../store/actions/transactions';

import arrowsIcon from '../../assets/icons/arrows.jpg';
import briefcaseIcon from '../../assets/icons/briefcase.jpg';

import './App.css';

class App extends Component {
	getTransactionsList() {
		return this.props.store.getState().transactions;
	}

	onSubmit(data) {
		this.props.store.dispatch(makeTransfer(data));
	}

	render() {
		return (
			<div className="pt-container">
				<Header/>

				<div className="container">
					<div className="pt-main-columns">
						<Panel id="form" icon={arrowsIcon} title="Make a Transfer">
							<TransferForm onSubmit={this.onSubmit.bind(this)}/>
						</Panel>
						<Panel id="list" icon={briefcaseIcon} title="Recent Transactions">
							<Transactions data={this.getTransactionsList()}/>
						</Panel>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
