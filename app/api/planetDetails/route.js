import { NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");

	if (!url) {
		return NextResponse.json({ error: "No URL provided" }, { status: 400 });
	}

	const response = await fetch(url);

	if (!response.ok) {
		return NextResponse.json(
			{ error: "Failed to fetch planets" },
			{ status: 500 },
		);
	}
	const data = await response.json();
	return NextResponse.json(data);
}
