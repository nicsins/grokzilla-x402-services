import { NextResponse } from "next/server";
import { PAY_TO, NETWORK, DEFAULT_MAX_AMOUNT } from "@/lib/x402";

export async function GET() {
  const base = {
    currency: "USDC",
    network: NETWORK,
    payTo: PAY_TO,
  };

  return NextResponse.json(
    {
      name: "grokzilla-x402-services",
      version: "1.1.0",
      description: "Deterministic agent-native microservices with x402 micropayments",
      services: [
        {
          id: "pii-redactor",
          name: "PII Redactor",
          description: "Strip emails, phones, SSNs, credit cards, IPs from text",
          path: "/api/redact",
          method: "POST",
          price: { amount: DEFAULT_MAX_AMOUNT, ...base },
        },
        {
          id: "rag-chunker",
          name: "RAG Text Chunker",
          description: "Deterministic chunking with overlap + metadata for RAG",
          path: "/api/chunk",
          method: "POST",
          price: { amount: "12000", ...base },
        },
        {
          id: "heading-outline",
          name: "Heading Outline Extractor",
          description: "Hierarchical outline from markdown or plain text headings",
          path: "/api/outline",
          method: "POST",
          price: { amount: "10000", ...base },
        },
        {
          id: "csv-normalizer",
          name: "CSV / Tabular Normalizer",
          description: "Clean messy CSV/TSV into clean JSON or CSV",
          path: "/api/normalize-csv",
          method: "POST",
          price: { amount: "8000", ...base },
        },
        {
          id: "text-structurer",
          name: "Text Structurer",
          description: "Extract key facts and entities into structured JSON",
          path: "/api/structure",
          method: "POST",
          price: { amount: "15000", ...base },
        },
        {
          id: "token-counter",
          name: "Token Counter + Cost Estimator",
          description: "Approximate token count and cost estimate for modern LLMs",
          path: "/api/token-count",
          method: "POST",
          price: { amount: "5000", ...base },
        },
        {
          id: "base64",
          name: "Base64 Codec",
          description: "Encode or decode Base64 safely",
          path: "/api/base64",
          method: "POST",
          price: { amount: "3000", ...base },
        },
        {
          id: "json-sort",
          name: "JSON Sorter / Cleaner",
          description: "Sort keys, remove nulls, pretty or compact JSON",
          path: "/api/json-sort",
          method: "POST",
          price: { amount: "4000", ...base },
        },
      ],
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=60",
      },
    }
  );
}
