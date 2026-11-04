/**
 * Server-side OCR engine.
 * Executes exclusively in the Node.js server environment.
 */
export async function processOcr({
  base64,
  mimeType,
}: {
  base64: string;
  mimeType: string;
}): Promise<{ text: string }> {
  const apiKey = process.env.LOVABLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("AI API key (LOVABLE_API_KEY or GEMINI_API_KEY) is not configured.");
  }

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content:
            "You are an OCR engine. Extract ALL readable text from the provided document, preserving line breaks and section headings. Return ONLY the extracted plain text — no commentary, no markdown fences.",
        },
        {
          role: "user",
          content: [
            { type: "text", text: "Extract all text from this resume document." },
            {
              type: "image_url",
              image_url: { url: `data:${mimeType};base64,${base64}` },
            },
          ],
        },
      ],
    }),
  });

  if (res.status === 429) {
    throw new Error("AI is rate limited. Please try again in a moment.");
  }
  if (res.status === 402) {
    throw new Error("AI credits exhausted. Add credits in Settings → Workspace → Usage.");
  }
  if (!res.ok) {
    const t = await res.text();
    console.error("OCR gateway error:", res.status, t);
    throw new Error("AI OCR failed. Try uploading a text-based PDF or DOCX instead.");
  }

  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = json.choices?.[0]?.message?.content ?? "";
  return { text };
}
