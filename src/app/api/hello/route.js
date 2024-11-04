import { NextResponse } from "next/server";

export function GET(req, res, next) {
    return NextResponse.json({text:"Hello world",method:"Get"},{success:true});
}