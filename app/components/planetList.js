"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import usePlanets from "../hooks/usePlanets";
import PlanetDetails from "./planet";

/**
 * Displays a list of planets
 */
export default function PlanetList() {
	const { planets, isLoading, error } = usePlanets();
	const router = useRouter();
	const [selectedId, setSelectedId] = useState(null);

	const handleCardClick = useCallback(
		(uid) => {
			setSelectedId(uid);
			router.push(`/details/${uid}`);
		},
		[router],
	);

	return (
		<div className="flex justify-center">
			<ul className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:max-w-5xl px-5 ">
				{/* loading */}
				{isLoading && <div className="text-yellow-500">Loading planets...</div>}

				{/* error */}
				{error && <div>Error loading planets :(</div>}

				{/* list of planets */}
				{planets?.results.map((planet) => (
					<li
						key={planet.name}
						className="bg-gray-100 rounded-lg p-6 shadow hover:bg-blue-100 hover:shadow-lg transition cursor-pointer max-w-sm relative"
						// redirect to planet details page on click
						onClick={() => handleCardClick(planet.uid)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								handleCardClick(planet.uid);
							}
						}}
					>
						{/* Spinner overlay */}
						{selectedId === planet.uid && (
							<div className="absolute inset-0 opacity-80 bg-gray-300 flex items-center justify-center rounded-lg z-10">
								<div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
							</div>
						)}

						<p className="text-yellow-500">{planet.name}</p>
						<PlanetDetails url={planet.url} />
					</li>
				))}
			</ul>
		</div>
	);
}
