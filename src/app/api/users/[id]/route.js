import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, context) {
    const id = context.params.id;
    const userData = user.filter((item) => item.id == id);
    return NextResponse.json(
        userData.length === 0 
            ? { userData: "User Data not available", status: 404, success: false }
            : { userData: userData, success: true, status: 200 }
    );
}
