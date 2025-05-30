import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import ProductWear from "@/pages/ProductWear";
import ProductScent from "@/pages/ProductScent";
import ProductSoft from "@/pages/ProductSoft";
import ProductRitual from "@/pages/ProductRitual";
import Contact from "@/pages/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/products/category/wear" component={ProductWear} />
                <Route path="/products/category/scent" component={ProductScent} />
                <Route path="/products/category/soft" component={ProductSoft} />
                <Route path="/products/category/ritual" component={ProductRitual} />
                <Route path="/products/:type" component={ProductDetail} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
            
            <Footer />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
