import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { AnimatedCursor } from "./AnimatedCursor";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedCursor />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}