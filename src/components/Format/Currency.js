/* global Intl */
/**
 * New Internationalization API
 * You can read more about here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
});

const noCurrencyFormatter = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
});

export function simpleFormat(value) {
	return noCurrencyFormatter.format(value);
}

export default function(value) {
	return formatter.format(value);
}