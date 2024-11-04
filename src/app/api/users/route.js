import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, res, next) {
    return NextResponse.json({userData:user},{success:true,status:200});
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload);
    const {name,age,state}=payload;
    if(!name || !age || !state){
        return NextResponse.json({result:"All field are Required",success:false},{status:400});
    }

    return NextResponse.json({result:"New User Created",success:true},{status:201});   
}