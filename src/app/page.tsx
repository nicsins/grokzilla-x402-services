export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
      <h1>🦖 Grokzilla x402 Services</h1>
      <p>Agent-native deterministic microservices. Pay per call with x402 (USDC on Base).</p>
      <ul>
        <li><a href="/catalog" style={{ color: "#7dd3fc" }}>GET /catalog</a> – discovery</li>
        <li><a href="/llms.txt" style={{ color: "#7dd3fc" }}>GET /llms.txt</a> – AEO</li>
        <li>POST /api/redact – PII redactor</li>
        <li>POST /api/chunk – RAG text chunker</li>
        <li>POST /api/outline – heading outline extractor</li>
        <li>POST /api/normalize-csv – CSV / tabular normalizer</li>
        <li>POST /api/structure – text structurer / entity extractor</li>
        <li>POST /api/token-count – approximate token + cost estimator</li>
        <li>POST /api/base64 – Base64 encode / decode</li>
        <li>POST /api/json-sort – JSON key sorter / cleaner</li>
      </ul>
      <p style={{ opacity: 0.7, fontSize: 14 }}>
        All paid endpoints return HTTP 402 + PAYMENT-REQUIRED until a valid payment signature is supplied.
        Use header <code>x-test-payment: true</code> for local testing only.
      </p>
    </main>
  );
}
