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

export async function PUT(req, context) {
    let payload=await req.json();
    payload.id=context.params.id;
    const {name,age,state,id}=payload;
    if(!name || !age || !state || !id){
        return NextResponse.json({result:"All field are Required",success: false},{status: 400});
    }
    return NextResponse.json({status: 200,result:"ok response"});
}