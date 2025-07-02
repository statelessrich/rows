"use client";
import usePlanetDetails from "../hooks/usePlanetDetails";
import { formatNumber } from "../utilities/utilities";

/**
 *
 * Displays basic planet details from a given url
 *
 */
export default function Planet({ url }) {
	const { details, isLoading, isError } = usePlanetDetails(url);

	// loading
	if (isLoading) {
		return <div className="text-blue-300">Loading details...</div>;
	}

	// error
	if (isError) {
		return <div>Error loading planet details :(</div>;
	}

	// no data
	if (!details) {
		return <div>No data found</div>;
	}

	console.log(details);

	return (
		<ul className="text-blue-300">
			<li>climate: {details.climate}</li>
			<li>population: {formatNumber(details.population)}</li>
		</ul>
	);
}
