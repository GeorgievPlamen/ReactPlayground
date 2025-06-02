import { ReactNode } from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </>
  ) : (
    <div>{login}</div>
  );
}
