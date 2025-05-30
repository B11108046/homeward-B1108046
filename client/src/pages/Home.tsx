import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import homeBgImage from "@/assets/images/home-cover.jpg";

export default function Home() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add active class after component mounts for animation
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("active");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="section min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={homeBgImage} 
          alt="Warm cozy home atmosphere with fairy lights" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deepBrown bg-opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="bg-warmWhite bg-opacity-85 p-8 md:p-12 rounded-lg max-w-2xl mx-auto backdrop-blur-sm shadow-xl border border-warmTan border-opacity-30">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-deepBrown mb-6">
            {t("The Warmth of Home Begins Within.", "家的溫度，始於心中。")}
          </h1>
          <p className="text-lg md:text-xl text-softBlack mb-3">
            {t(
              "Welcome to my cozy corner, where we rediscover the warmth of life.",
              "歡迎來到我溫暖的角落，在這裡我們重新發現生活的溫度。"
            )}
          </p>
          <p className="text-md text-softBlack opacity-80">
            {t(
              "Memories and moments, captured in the gentle glow of light.",
              "記憶與時刻，被溫柔的光芒捕捉。"
            )}
          </p>
          <div className="mt-8">
            <Link href="/about">
              <Button 
                className="bg-warmTan hover:bg-deepBrown text-white font-montserrat py-2 px-6 rounded-full transition-colors duration-300"
              >
                {t("Discover More", "了解更多")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
