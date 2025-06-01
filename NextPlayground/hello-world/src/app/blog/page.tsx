export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });

  return <div>Blog</div>;
}
