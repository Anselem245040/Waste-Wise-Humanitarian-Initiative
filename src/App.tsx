import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import DonationModal from "./components/DonationModal";
import Home from "./pages/Home";
import ViewMore from "./pages/ViewMore";
import LearnMore from "./pages/LearnMore";
import ExploreAll from "./pages/ExploreAll";
import FullGallery from "./pages/FullGallery";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/view-more"} component={ViewMore} />
      <Route path={"/learn-more"} component={LearnMore} />
      <Route path={"/explore-all"} component={ExploreAll} />
      <Route path={"/full-gallery"} component={FullGallery} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme='light'
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Navbar onDonateClick={() => setIsDonationModalOpen(true)} />
          <Router />
          <DonationModal
            isOpen={isDonationModalOpen}
            onClose={() => setIsDonationModalOpen(false)}
          />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
