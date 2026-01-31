import { create } from "zustand";

interface GeminiState {
    isGenerating: boolean
    response: string
    generateResponse: (prompt: string) => Promise<void>
}

export const UseGeminiStore = create<GeminiState>((set) => ({
    isGenerating: false,
    response: "",

    generateResponse: async (prompt: string) => {
        set({ isGenerating: true });

        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            })

            const generatedResponse = await res.json();

            set({ response: generatedResponse.text.replace(/\*/g, '') || '' });
        } catch (error) {
            console.log(error)
            set({ response: "Something went wrong. Please check your API key and try again." });
        } finally {
            set({ isGenerating: false });
        }
    }
}));