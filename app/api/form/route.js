import { NextResponse } from "next/server";
import ConnectDb from "@/app/ConnectDb";
import User from "@/app/model/User";

export async function GET(req){
    await ConnectDb();
    return NextResponse.json({ message : "Testing a Get method"})
}
export async function POST(req){
    await ConnectDb();
    const data = await req.json();
    console.log(data);
    await User.create(data);
    return NextResponse.json({ message : "Testing a POST method"})
}