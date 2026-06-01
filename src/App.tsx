import { lazy, Suspense, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/layout/AppShell";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { usePresentationStore } from "@/stores/presentation.store";

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
  const fontScale = usePresentationStore((s) => s.fontScale);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

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
