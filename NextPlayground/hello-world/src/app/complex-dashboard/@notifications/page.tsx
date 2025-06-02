import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <div>
        <Link href={"/complex-dashboard/archived"}>Archivied</Link>
      </div>
      <div>Notifications</div>
    </>
  );
}
