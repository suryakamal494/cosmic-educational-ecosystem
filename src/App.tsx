
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Lazy load page components for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const GlobalExposure = lazy(() => import("./pages/GlobalExposure"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const Astronomy = lazy(() => import("./pages/Astronomy"));
const Labs = lazy(() => import("./pages/Labs"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Preload important pages after main content loads
const preloadPages = () => {
  // Start preloading important pages when idle
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    // @ts-ignore
    window.requestIdleCallback(() => {
      import("./pages/Labs");
      import("./pages/Contact");
      import("./pages/Astronomy");
    });
  }
};

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-space-blue text-white">
    <div className="text-center">
      <div className="inline-block w-10 h-10 border-4 border-space-purple border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const AppRoutes = () => {
  // Preload important pages when the main app loads
  useEffect(() => {
    preloadPages();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/global-exposure" element={<GlobalExposure />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/astronomy" element={<Astronomy />} />
          <Route path="/labs" element={<Labs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
