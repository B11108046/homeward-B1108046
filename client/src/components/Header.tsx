import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { LanguageToggle } from "./ui/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(location.replace("/", "") || "home");

  useEffect(() => {
    const section = location.replace("/", "") || "home";
    setCurrentSection(section);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-warmWhite shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <div onClick={() => handleNavClick("home")} className="cursor-pointer">
          <Link href="/">
            <span className="font-playfair text-2xl md:text-3xl text-deepBrown hover:text-warmTan transition-colors duration-300">
              Homeward
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="mr-6">
            <LanguageToggle />
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-deepBrown text-xl"></i>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <div onClick={() => handleNavClick("home")}>
              <Link href="/">
                <span className={`nav-link font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer ${currentSection === "home" ? "active" : ""}`}>
                  {t("Home", "首頁")}
                </span>
              </Link>
            </div>
            <div onClick={() => handleNavClick("products")}>
              <Link href="/products">
                <span className={`nav-link font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer ${currentSection === "products" ? "active" : ""}`}>
                  {t("Products", "產品")}
                </span>
              </Link>
            </div>
            <div onClick={() => handleNavClick("about")}>
              <Link href="/about">
                <span className={`nav-link font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer ${currentSection === "about" ? "active" : ""}`}>
                  {t("About Us", "關於我們")}
                </span>
              </Link>
            </div>
            <div onClick={() => handleNavClick("contact")}>
              <Link href="/contact">
                <span className={`nav-link font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer ${currentSection === "contact" ? "active" : ""}`}>
                  {t("Contact", "聯絡我們")}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-warmWhite p-4 shadow-md absolute w-full z-50 ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-4">
          <div onClick={() => handleNavClick("home")}>
            <Link href="/">
              <span className="font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer">
                {t("Home", "首頁")}
              </span>
            </Link>
          </div>
          <div onClick={() => handleNavClick("products")}>
            <Link href="/products">
              <span className="font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer">
                {t("Products", "產品")}
              </span>
            </Link>
          </div>
          <div onClick={() => handleNavClick("about")}>
            <Link href="/about">
              <span className="font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer">
                {t("About Us", "關於我們")}
              </span>
            </Link>
          </div>
          <div onClick={() => handleNavClick("contact")}>
            <Link href="/contact">
              <span className="font-montserrat text-softBlack hover:text-deepBrown transition-colors duration-300 cursor-pointer">
                {t("Contact", "聯絡我們")}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
