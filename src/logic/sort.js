function ascSort(field, a, b) {
	if (a[field] < b[field]) {
		return -1;
	}

	if (a[field] > b[field]) {
		return 1;
	}

	return 0;
}

function descSort(field, a, b) {
	if (a[field] < b[field]) {
		return 1;
	}

	if (a[field] > b[field]) {
		return -1;
	}

	return 0;
}

/**
 * Very simple sort logic
 */
export default function sort(field, direction, list) {
	const directionSort = direction === 'ASC' ? ascSort.bind(null, field) : descSort.bind(null, field);

	return list.sort(directionSort);
}