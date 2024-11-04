import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, res, next) {
    return NextResponse.json({userData:user},{success:true,status:200});
}