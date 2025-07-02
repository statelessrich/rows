"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 *
 * Gets and returns list of planets
 */
export default function usePlanets() {
	const { data, error, isLoading } = useSWR("/api/planets", fetcher);

	return {
		planets: data,
		isLoading,
		error,
	};
}
