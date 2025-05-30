import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import ritualImage from "@/assets/images/categories/ritual.jpg";
import candlesImage from "@/assets/images/items/candles.jpg";
import ambientLightsImage from "@/assets/images/items/lights.jpg";
import soundsImage from "@/assets/images/items/sounds.jpg";
import journalsImage from "@/assets/images/items/journals.jpg";
import teaImage from "@/assets/images/items/tea.jpg";
import { Button } from "@/components/ui/button";

// 產品類型定義
type Product = {
  id: number;
  type: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
};

export default function ProductRitual() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 添加active類以實現動畫效果
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("active");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Ritual 類別產品
  const products: Product[] = [
    {
      id: 1,
      type: "lights",
      title: "Ambient Lights / Night Lamps",
      titleZh: "氛圍燈 / 夜燈",
      description: "Gentle illumination to create a relaxing atmosphere.",
      descriptionZh: "柔和的光線，營造放鬆的氛圍。",
      image: ambientLightsImage
    },
    {
      id: 2,
      type: "sounds",
      title: "White Noise Machines / Speakers",
      titleZh: "白噪音機 / 音箱",
      description: "Create a soothing audio environment for better relaxation.",
      descriptionZh: "創造舒緩的音頻環境，帶來更好的放鬆體驗。",
      image: soundsImage
    },
    {
      id: 3,
      type: "journals",
      title: "Journals / Relaxation Notebooks",
      titleZh: "日記本 / 放鬆筆記本",
      description: "Document your journey to a more mindful, relaxed lifestyle.",
      descriptionZh: "記錄您邁向更加專注、放鬆生活方式的旅程。",
      image: journalsImage
    },
    {
      id: 4,
      type: "tea",
      title: "Tea Sets / Little Treats",
      titleZh: "茶具組 / 小點心",
      description: "Small indulgences that make your daily rituals special.",
      descriptionZh: "讓您的日常儀式變得特別的小小享受。",
      image: teaImage
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center sm:text-left mb-4 sm:mb-0">
            {t("Ritual", "儀式")}
          </h2>
          <Link href="/products">
            <Button variant="link" className="text-warmTan hover:text-deepBrown">
              <i className="fas fa-arrow-left mr-2"></i>
              {t("Back to All Categories", "返回所有類別")}
            </Button>
          </Link>
        </div>
        
        <p className="text-center text-softBlack mb-12 max-w-2xl mx-auto">
          {t(
            "Enhance your daily rituals with items that bring calm and mindfulness to everyday moments.",
            "用能為日常時刻帶來寧靜和專注的物品來提升您的日常儀式。"
          )}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-warmWhite rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={t(product.title, product.titleZh)} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-deepBrown mb-3">
                  {t(product.title, product.titleZh)}
                </h3>
                <p className="text-softBlack mb-4 text-sm">
                  {t(product.description, product.descriptionZh)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}