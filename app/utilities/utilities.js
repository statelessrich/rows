export function formatNumber(number) {
	return isNaN(number) ? number : Number(number).toLocaleString();
}
