import { NextResponse } from "next/server";

import data from "./data.json";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("search");
  console.log(query);
  if (query === "") return NextResponse.json([], { status: 200 });

  const result = data.filter((item) =>
    item.name.toLowerCase().startsWith(query?.toLowerCase() ?? "")
  );
  return NextResponse.json(result, { status: 200 });
}
