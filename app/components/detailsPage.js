"use client";
import { useRouter } from "next/navigation";
import usePlanetDetails from "../hooks/usePlanetDetails";
import { formatNumber } from "../utilities/utilities";
import Loading from "./loading";

/**
 *
 * Displays planet details for a given planet ID
 */
export default function DetailsPage({ id }) {
	const router = useRouter();
	const { details, isLoading, error } = usePlanetDetails(
		`https://www.swapi.tech/api/planets/${id}`,
	);

	return (
		<div className="bg-gray-500 pt-10 justify-center flex text-3xl">
			<div className="relative bg-gray-100 max-w-4xl mx-10 rounded-lg shadow p-20">
				{/* Back to home page */}
				<button
					type="button"
					className="mb-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition cursor-pointer"
					onClick={() => router.push("/")}
				>
					← Back
				</button>

				{/* loading */}
				{isLoading && <Loading />}

				{/* no data */}
				{!isLoading && !details && (
					<div className="text-yellow-500">No details found.</div>
				)}

				{/* error */}
				{error && (
					<div className="text-yellow-500">Error loading planet details.</div>
				)}

				{details && (
					<>
						<h1 className="text-5xl mb-4 text-yellow-500">{details.name}</h1>
						<div className="text-blue-300">
							<p>
								<strong>Climate:</strong> {details.climate}
							</p>
							<p>
								<strong>Terrain:</strong> {details.terrain}
							</p>
							<p>
								<strong>Population:</strong> {formatNumber(details.population)}
							</p>
							<p>
								<strong>Diameter:</strong> {formatNumber(details.diameter)}
							</p>
							<p>
								<strong>Gravity:</strong> {details.gravity}
							</p>
							<p>
								<strong>Orbital Period:</strong> {details.orbital_period}
							</p>
							<p>
								<strong>Rotation Period:</strong> {details.rotation_period}
							</p>
							<p>
								<strong>Surface Water:</strong> {details.surface_water}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
