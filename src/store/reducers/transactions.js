import transactions from '../../transactions.json';
import noImageIcon from '../../assets/icons/no-image-icon.png';

const initialState = {
	sort: {
		key: 'transactionDate',
		direction: 'DESC'
	},
	search: '',
	available: 5824.76,
	data: transactions.data,
	onGoingTransfer: null
};

export default function transactionsReducer(state = initialState, action) {
	switch (action.type) {
		case 'TRANSACTIONS_SORT':
			return Object.assign({}, state, {
				sort: {
					key: action.field,
					direction: action.direction
				}
			});

		case 'TRANSACTIONS_SEARCH':
			return Object.assign({}, state, {
				search: action.data
			});

		case 'TRANSACTIONS_CONFIRM_TRANSFER':
			return Object.assign({}, state, {
				search: '',
				data: [state.onGoingTransfer].concat(state.data),
				onGoingTransfer: null,
				available: state.available - state.onGoingTransfer.amount
			});

		case 'TRANSACTIONS_CANCEL_TRANSFER':
			return Object.assign({}, state, {
				onGoingTransfer: null
			});

		case 'TRANSACTIONS_TRANSFER':
			return Object.assign({}, state, {
				onGoingTransfer: {
					"from": action.data.from,
					"amount": parseFloat(action.data.amount),
					"categoryCode": "#E45A2C",
					"merchant": action.data.to,
					"merchantLogo": noImageIcon,
					"transactionDate": new Date().getTime(),
					"transactionType": "Online Transfer"
				}
			});

		default:
			return state;
	}
}