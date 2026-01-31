import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const apiKey = process.env.GEMINI_API_KEY;
    const { prompt } = await req.json();

    if (!apiKey) {
        return NextResponse.json({ error: "API Key is missing." }, { status: 400 });
    }

    if (!prompt) {
        return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: { text: prompt },
        });

        return NextResponse.json({ text: response.text })
    } catch (error: any) {
        console.error("Error generating content:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 400 }
        );
    }
}