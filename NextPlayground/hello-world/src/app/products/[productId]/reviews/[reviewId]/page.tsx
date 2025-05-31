import { notFound } from "next/navigation";

export default async function ReviewId({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const id = (await params).reviewId;

  if (parseInt(id) > 1000) {
    notFound();
  }

  return <div>ReviewId {id}</div>;
}
