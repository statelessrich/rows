"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 *
 * Gets and returns planet details from a given URL
 */
export default function usePlanetDetails(url) {
	const { data, error, isLoading } = useSWR(
		`/api/planetDetails?url=${url}`,
		fetcher,
	);

	return {
		details: data?.result?.properties,
		isLoading,
		error,
	};
}
