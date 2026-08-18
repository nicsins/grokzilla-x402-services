export const metadata = {
  title: "Grokzilla x402 Services",
  description: "Agent-native microservices with x402 micropayments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, background: "#0a0a0f", color: "#e0e0ff" }}>
        {children}
      </body>
    </html>
  );
}
