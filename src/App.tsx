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
import Footer from "./pages/Footer";

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
        <Footer onDonateClick={() => setIsDonationModalOpen(true)} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
