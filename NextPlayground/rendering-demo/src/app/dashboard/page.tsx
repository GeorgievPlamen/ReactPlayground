"use client";

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");

  return (
    <>
      <div>Dashboard</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </>
  );
}
