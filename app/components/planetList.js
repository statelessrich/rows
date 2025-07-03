"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import usePlanets from "../hooks/usePlanets";
import Loading from "./loading";
import PlanetDetails from "./planet";

/**
 * Displays a list of planets
 */
export default function PlanetList() {
	const { planets, isLoading, error } = usePlanets();
	const router = useRouter();
	const [selectedId, setSelectedId] = useState(null);

	// route to planet details page on click
	const handleCardClick = useCallback(
		(uid) => {
			setSelectedId(uid);
			router.push(`/details/${uid}`);
		},
		[router],
	);

	return (
		<div className="flex justify-center">
			{/* loading */}
			{isLoading && (
				<div className="text-yellow-500 text-center">
					<p className="pb-5">Loading planets...</p>
					<Loading />
				</div>
			)}

			{!isLoading && (
				<ul className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:max-w-5xl px-5 ">
					{/* error */}
					{error && <div>Error loading planets&nbsp;:(</div>}

					{/* list of planets */}
					{planets?.results.map((planet) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <>
						<li
							key={planet.name}
							className="bg-gray-100 rounded-lg p-6 shadow hover:bg-blue-100 hover:shadow-lg transition cursor-pointer max-w-sm relative"
							onClick={() => handleCardClick(planet.uid)}
						>
							{/* Spinner overlay */}
							{selectedId === planet.uid && (
								<div className="absolute inset-0 opacity-80 bg-gray-300 flex items-center justify-center rounded-lg z-10">
									<Loading />
								</div>
							)}

							{/* planet name */}
							<p className="text-yellow-500">{planet.name}</p>

							{/* planet details */}
							<PlanetDetails url={planet.url} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
