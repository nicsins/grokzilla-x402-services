import { NextResponse } from "next/server";

export async function GET() {
  const body = `# Grokzilla x402 Services

> Deterministic, agent-native microservices. Pay per call with x402 (USDC on Base).

## Free Discovery
- GET /catalog – machine-readable list of all services + prices + schemas
- GET /llms.txt – this file
- GET / – human landing page

## Paid Endpoints (all POST, JSON body)
- /api/redact – PII redaction (emails, phones, SSN, cards, IPs)
- /api/chunk – RAG text chunker with overlap + metadata
- /api/outline – hierarchical heading outline extractor
- /api/normalize-csv – clean messy CSV/TSV → JSON
- /api/structure – extract facts + entities from free text
- /api/token-count – approximate tokens + cost estimate
- /api/base64 – encode / decode
- /api/json-sort – sort keys, strip nulls, format JSON

## Payment
Standard x402 flow. Server returns HTTP 402 + PAYMENT-REQUIRED header.
Client pays exact USDC on Base and retries with PAYMENT-SIGNATURE.

## Why agents use us
High-frequency, low-cost, deterministic utilities that keep agent pipelines clean, private, and efficient.
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
