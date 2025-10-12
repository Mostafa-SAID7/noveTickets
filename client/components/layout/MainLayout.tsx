import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground antialiased">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-[-30%] top-[-40%] h-[520px] bg-hero-glow opacity-80 blur-3xl" />
        <div className="absolute right-[-25%] top-[15%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),rgba(14,16,37,0))] blur-2xl" />
        <div className="absolute left-[-10%] top-[45%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),rgba(12,14,32,0))] blur-2xl" />
      </div>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default MainLayout;
