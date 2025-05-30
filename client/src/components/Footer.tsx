import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-deepBrown text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <Link href="/">
          <span className="font-playfair text-2xl text-white hover:text-warmTan transition-colors duration-300 cursor-pointer">
            Homeward
          </span>
        </Link>
        
        <div className="mt-4 flex justify-center space-x-6">
          <a href="mailto:aaqq1063@gmail.com" className="text-white hover:text-warmTan transition-colors duration-300" title="Email">
            <i className="far fa-envelope"></i>
          </a>
          <a href="tel:+886978479756" className="text-white hover:text-warmTan transition-colors duration-300" title="Phone">
            <i className="fas fa-phone-alt"></i>
          </a>
          <span className="text-white hover:text-warmTan transition-colors duration-300 cursor-default" title="LINE: 0978479756">
            <i className="fab fa-line"></i>
          </span>
          <a href="https://instagram.com/yi_lynn__" target="_blank" rel="noopener noreferrer" className="text-white hover:text-warmTan transition-colors duration-300" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <div className="mt-4 space-y-1">
          <p className="text-sm opacity-85">
            <i className="fas fa-phone-alt mr-2 text-xs"></i> +886-978-479-756 | 
            <i className="fab fa-line mx-2 text-xs"></i> 0978479756
          </p>
          <p className="text-sm opacity-75">
            {t("© 2025 Homeward. All rights reserved.", "© 2025 Homeward. 保留所有權利。")}
          </p>
        </div>
      </div>
    </footer>
  );
}
