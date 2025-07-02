import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch("https://www.swapi.tech/api/planets");
	if (!res.ok) {
		return NextResponse.json(
			{ error: "Failed to fetch planets" },
			{ status: 500 },
		);
	}
	const data = await res.json();
	console.log(data);
	return NextResponse.json(data);
}
