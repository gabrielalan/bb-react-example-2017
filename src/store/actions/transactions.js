export const confirmTransfer = confirmed => ({
	type: confirmed ? 'TRANSACTIONS_CONFIRM_TRANSFER' : 'TRANSACTIONS_CANCEL_TRANSFER'
});

export const setTransferToConfirm = data => ({
	type: 'TRANSACTIONS_TRANSFER',
	data
});