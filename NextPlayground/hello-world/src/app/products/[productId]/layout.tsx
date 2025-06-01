export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div style={{ background: "red" }}>
        <h2>Featured products</h2>
      </div>
    </>
  );
}
