import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/layout/AppShell";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const PresentationView = lazy(() => import("@/presentation/PresentationView"));

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="text-muted-foreground text-lg">Loading...</div>
    </div>
  );
}

function AppRoutes() {
  useKeyboardNavigation();

  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <PresentationView />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <TooltipProvider delayDuration={300}>
        <AppRoutes />
      </TooltipProvider>
    </HashRouter>
  );
}
