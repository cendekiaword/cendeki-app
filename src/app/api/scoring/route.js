import { ScoreModel } from "@/db/models/scoreModel"
import { NextResponse } from "next/server"

export async function POST(req){
    const userId = req.headers.get('x-id-user')
    let body = await req.json()
    const {storyId, finalScore} = body
    const playDate = new Date()
    console.log(storyId, finalScore, '<<< ini di api');
    const score = await ScoreModel.addScore({userId, score: finalScore, storyId, playDate})
    return NextResponse.json({
        status: 201,
        data: score
    })
}