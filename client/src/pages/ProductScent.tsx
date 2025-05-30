import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import scentImage from "@/assets/images/categories/scent.jpg";
import candlesImage from "@/assets/images/items/candles.jpg";
import waxImage from "@/assets/images/items/wax.jpg";
import pillowMistImage from "@/assets/images/items/pillow_mist.png";
import diffusersImage from "@/assets/images/items/diffusers.jpg";
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

export default function ProductScent() {
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

  // Scent 類別產品
  const products: Product[] = [
    {
      id: 1,
      type: "candles",
      title: "Scented Candles",
      titleZh: "香氛蠟燭",
      description: "Light up Homeward, and illuminate a quiet corner of your heart.",
      descriptionZh: "點亮Homeward，照亮心中寧靜的角落。",
      image: candlesImage
    },
    {
      id: 2,
      type: "diffusers",
      title: "Reed Diffusers",
      titleZh: "藤條擴香",
      description: "Fill your space with continuous fragrance for a peaceful atmosphere.",
      descriptionZh: "讓您的空間充滿持續的香氣，營造寧靜的氛圍。",
      image: diffusersImage
    },
    {
      id: 3,
      type: "wax",
      title: "Scented Wax / Incense",
      titleZh: "香氛蠟片 / 線香",
      description: "Fragrance options for every preference and space.",
      descriptionZh: "適合各種喜好和空間的香氣選擇。",
      image: waxImage
    },
    {
      id: 4,
      type: "mist",
      title: "Pillow Mist",
      titleZh: "枕頭噴霧",
      description: "Spray a little comfort before drifting off to sleep.",
      descriptionZh: "在入睡前噴灑一點舒適感。",
      image: pillowMistImage
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center sm:text-left mb-4 sm:mb-0">
            {t("Scent", "香氛")}
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
            "Fill your home with gentle fragrances. Our scent collection is crafted to create a soothing atmosphere that calms the mind.",
            "為您的家充滿柔和的香氣。我們的香氛系列專為營造舒緩身心的氛圍而精心調配。"
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