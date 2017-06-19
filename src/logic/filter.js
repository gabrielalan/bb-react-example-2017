/**
 * Specific logic for searching on the transactions list
 */
export function search(search, list) {
	const regex = new RegExp(search, 'gi');

	if (!search || search === '') {
		return list;
	}

	return list.filter(item => {
		regex.lastIndex = 0;

		const text = regex.test(item.merchant);

		regex.lastIndex = 0;

		const amount = regex.test(item.amount);

		return text || amount;
	});
}