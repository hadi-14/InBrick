import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 bg-background flex items-center justify-center">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <AlertTriangle className="w-12 h-12 text-destructive" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Foundation Not Found
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                The content you're looking for seems to be missing from the site structure. It might have been moved or doesn't exist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
