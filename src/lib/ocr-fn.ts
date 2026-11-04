import { createServerFn } from "@tanstack/react-start";

export type OcrInput = {
  base64: string;
  mimeType: string;
};

/**
 * TanStack Start server function for OCR document processing.
 * Exposes an isomorphic RPC interface that executes securely on the server.
 */
export const ocrDocument = createServerFn({ method: "POST" })
  .validator((input: unknown): OcrInput => {
    const v = input as Partial<OcrInput> | undefined;
    if (!v?.base64 || typeof v.base64 !== "string") throw new Error("base64 is required");
    if (!v?.mimeType || typeof v.mimeType !== "string") throw new Error("mimeType is required");
    return { base64: v.base64, mimeType: v.mimeType };
  })
  .handler(async ({ data }: { data: OcrInput }) => {
    const { processOcr } = await import("@/server/ocr");
    return processOcr(data);
  });
