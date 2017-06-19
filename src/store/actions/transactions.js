export const confirmTransfer = confirmed => ({
	type: confirmed ? 'TRANSACTIONS_CONFIRM_TRANSFER' : 'TRANSACTIONS_CANCEL_TRANSFER'
});

export const sort = (field, direction = 'DESC') => ({
	type: 'TRANSACTIONS_SORT',
	field,
	direction
});

export const search = data => ({
	type: 'TRANSACTIONS_SEARCH',
	data
});

export const setTransferToConfirm = data => ({
	type: 'TRANSACTIONS_TRANSFER',
	data
});