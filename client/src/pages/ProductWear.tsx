import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import wearImage from "@/assets/images/categories/wear.jpg";
import pajamasImage from "@/assets/images/items/pajamas.jpg";
import loungewearImage from "@/assets/images/items/loungewear.jpg";
import socksImage from "@/assets/images/items/socks.jpg";
import headbandsImage from "@/assets/images/items/headbands.jpg";
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

export default function ProductWear() {
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

  // Wear 類別產品
  const products: Product[] = [
    {
      id: 1,
      type: "loungewear",
      title: "Loungewear",
      titleZh: "居家服飾",
      description: "Slip into Homeward, and feel like you're returning to yourself.",
      descriptionZh: "穿上Homeward，感覺像是回到了真實的自己。",
      image: loungewearImage
    },
    {
      id: 2,
      type: "pajamas",
      title: "Pajamas / Robes",
      titleZh: "睡衣 / 浴袍",
      description: "Wrap yourself in softness, for the perfect night's sleep.",
      descriptionZh: "用柔軟包裹自己，享受完美的睡眠。",
      image: pajamasImage
    },
    {
      id: 3,
      type: "socks",
      title: "Cozy Socks",
      titleZh: "舒適襪子",
      description: "Keep your feet warm and happy with our premium soft socks.",
      descriptionZh: "用我們的優質柔軟襪子讓您的雙腳保持溫暖和愉悅。",
      image: socksImage
    },
    {
      id: 4,
      type: "headbands",
      title: "Soft Headbands",
      titleZh: "柔軟髮帶",
      description: "Gentle on your hair, perfect for your skincare routine.",
      descriptionZh: "溫和呵護您的頭髮，完美搭配您的護膚程序。",
      image: headbandsImage
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center sm:text-left mb-4 sm:mb-0">
            {t("Wear", "穿著")}
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
            "Wrap yourself in comfort. Our wearable items are designed to provide ultimate softness and relaxation at home.",
            "包裹自己于舒適之中。我們的穿著系列專為提供家中的極致柔軟和放鬆而設計。"
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