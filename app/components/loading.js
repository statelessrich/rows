/**
 *
 * Animated loading indicator
 *
 */
export default function Loading() {
	return (
		<div className="inset-0 opacity-80 flex items-center justify-center rounded-lg z-10">
			<div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}
