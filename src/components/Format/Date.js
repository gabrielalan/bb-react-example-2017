/* global Intl */
/**
 * New Internationalization DateTimeFormat API
 * You can read more about here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
 */
const formatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	day: 'numeric'
});

export default function(value) {
	return formatter.format(value);
}