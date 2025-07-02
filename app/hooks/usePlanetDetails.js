"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function usePlanetDetails(url) {
	console.log(url);
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
