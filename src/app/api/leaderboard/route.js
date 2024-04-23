import { ScoreModel } from "@/db/models/scoreModel";
import { NextResponse } from "next/server";

export async function GET(){
    let data = await ScoreModel.getAllScore()
    return NextResponse.json({
        status: 200,
        data
    })
}