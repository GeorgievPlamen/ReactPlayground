export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return <div>ProductId {productId}</div>;
}
