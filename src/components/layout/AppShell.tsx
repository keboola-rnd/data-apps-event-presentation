import { useEffect, useRef } from "react";
import { Outlet } from "react-router";

export function AppShell() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="h-screen w-screen overflow-hidden bg-background outline-none"
    >
      <Outlet />
    </div>
  );
}
