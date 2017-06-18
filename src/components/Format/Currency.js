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

export default function(value) {
	return formatter.format(value);
}