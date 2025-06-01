import { ReactNode } from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </>
  );
}
