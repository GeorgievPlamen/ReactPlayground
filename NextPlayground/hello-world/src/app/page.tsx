import Link from "next/link";

export default function HelloWorld() {
  return (
    <>
      <div>Hello World</div>
      <Link href={"/blog"}>Blog</Link>
      <div>Hello World</div>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
