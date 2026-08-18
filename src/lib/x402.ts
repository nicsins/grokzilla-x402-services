import { NextRequest, NextResponse } from "next/server";

export const PAY_TO = process.env.PAY_TO_ADDRESS || "0xDa1Eab46918882f8656a41cF9fCa80e2415369d1";
export const NETWORK = process.env.NETWORK || "base";
export const DEFAULT_MAX_AMOUNT = process.env.MAX_AMOUNT_ATOMIC || "10000"; // 0.01 USDC (6 decimals)

export function hasValidPayment(req: NextRequest): boolean {
  // Production: replace with real @x402/* verification + facilitator settle
  // For now: accept test header or any reasonably long signature header
  if (req.headers.get("x-test-payment") === "true") return true;
  const sig =
    req.headers.get("PAYMENT-SIGNATURE") ||
    req.headers.get("x-payment") ||
    req.headers.get("X-PAYMENT");
  return Boolean(sig && sig.length > 20);
}

export function paymentRequiredResponse(
  req: NextRequest,
  description: string,
  maxAmount: string = DEFAULT_MAX_AMOUNT,
  extra: Record<string, unknown> = {}
) {
  const paymentRequirements = {
    scheme: "exact",
    network: NETWORK,
    maxAmountRequired: maxAmount,
    resource: req.url,
    description,
    mimeType: "application/json",
    payTo: PAY_TO,
    extra: {
      name: "grokzilla-x402-services",
      version: "1.1.0",
      ...extra,
    },
  };

  return NextResponse.json(
    {
      error: "Payment Required",
      message: "This endpoint requires an x402 payment. Retry with PAYMENT-SIGNATURE header.",
      accepts: [paymentRequirements],
    },
    {
      status: 402,
      headers: {
        "PAYMENT-REQUIRED": Buffer.from(JSON.stringify(paymentRequirements)).toString("base64"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, PAYMENT-SIGNATURE, x-payment, x-test-payment",
      },
    }
  );
}

export function jsonOk(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, PAYMENT-SIGNATURE, x-payment, x-test-payment",
    },
  });
}
