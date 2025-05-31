export default async function ReviewId({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const id = (await params).reviewId;

  return <div>ReviewId {id}</div>;
}
