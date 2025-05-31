"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div>
      <h2>Review Not Found {pathname}</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
