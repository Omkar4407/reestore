import { NextResponse } from "next/server";
import { getMainMenu } from "@/lib/shopify";

export async function GET() {

  const menu = await getMainMenu();

  return NextResponse.json(menu);
}