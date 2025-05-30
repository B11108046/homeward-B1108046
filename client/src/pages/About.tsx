import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
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

  const hashtags = [
    "#HomeEssence", 
    "#WarmthInDesign", 
    "#ComfortLiving",
    "#MindfulHome", 
    "#AuthenticSpace", 
    "#MinimalistBeauty",
    "#CozyCorners",
    "#HomeHarmony",
    "#GentleLiving",
    "#LifeQuality"
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center mb-12">
          {t("About Us", "關於我們")}
        </h2>
        
        <div className="bg-warmWhite rounded-lg shadow-md p-8 md:p-10 mb-12">
          <div className="space-y-6 text-softBlack">
            <p className="italic text-lg font-light text-deepBrown font-playfair">
              {t(
                "Homeward is a lifestyle selection website that exists for those who 'want to relax properly.'",
                "Homeward 是一個專為「想好好放鬆」而存在的生活選物網站。"
              )}
            </p>
            <p>
              {t(
                "We carefully select gentle items such as loungewear, scented candles, and indoor slippers for women, allowing you to experience the ease and stability of being at home in your daily life.",
                "我們為女生們精選居家服、香氛蠟燭、室內拖鞋等溫柔小物，讓你在日常裡，也能擁有像回家一樣的自在與安定。"
              )}
            </p>
            <p>
              {t(
                "We believe that the feeling of home is not just a location, but the moment when both body and mind are relaxed.",
                "我們相信，家的感覺，不只是地點，而是身心同時放鬆下來的那一刻。"
              )}
            </p>
            <p className="font-playfair text-lg font-medium text-warmTan">
              {t(
                "Homeward — not just products, but pieces of peace.",
                "Homeward — not just products, but pieces of peace."
              )}
            </p>
          </div>
        </div>
        
        <div className="bg-warmWhite rounded-lg shadow-md p-8 border border-warmTan border-opacity-20">
          <h3 className="font-playfair text-2xl text-deepBrown mb-6 text-center">
            {t("Keywords That Define This Website", "定義這個網站的關鍵詞")}
          </h3>
          <p className="text-center text-softBlack mb-6 max-w-2xl mx-auto">
            {t(
              "Homeward is more than just a website; it's a philosophy of living. These keywords capture the essence of what we believe creates a true home.",
              "Homeward 不僅是一個網站，更是一種生活理念。這些關鍵詞捕捉了我們認為創造真正的家所需的本質。"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {hashtags.map((tag, index) => (
              <span 
                key={index} 
                className="hashtag bg-softBeige text-deepBrown px-5 py-2 rounded-full text-sm font-montserrat hover:bg-warmTan hover:text-warmWhite transition-colors duration-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}