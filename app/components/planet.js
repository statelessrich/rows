"use client";
import React from "react";
import usePlanetDetails from "../hooks/usePlanetDetails";
import { formatNumber } from "../utilities/utilities";
import Loading from "./loading";

/**
 *
 * Displays basic planet details from a given url
 *
 */
function Planet({ url }) {
	const { details, isLoading, error } = usePlanetDetails(url);

	return (
		<ul className="text-blue-300">
			{/* loading */}
			{isLoading && <Loading />}

			{/* error */}
			{error && <div>Error loading planet details&nbsp;:(</div>}

			{/* basic planet details */}
			{details && (
				<>
					<li>climate: {details.climate}</li>
					<li>population: {formatNumber(details.population)}</li>
				</>
			)}
		</ul>
	);
}

export default React.memo(Planet);
