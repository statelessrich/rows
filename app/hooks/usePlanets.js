"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function usePlanets() {
	const { data, error, isLoading } = useSWR("/api/planets", fetcher);

	console.log(data);
	console.log(error);

	return {
		planets: data,
		isLoading,
		error,
	};
}
