import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import softImage from "@/assets/images/categories/soft.jpg";
import slippersImage from "@/assets/images/items/slippers.jpg";
import pillowsImage from "@/assets/images/items/pillows.jpg";
import blanketsImage from "@/assets/images/items/blankets.jpg";
import cushionsImage from "@/assets/images/items/cushions.jpg";
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

export default function ProductSoft() {
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

  // Soft 類別產品
  const products: Product[] = [
    {
      id: 1,
      type: "pillows",
      title: "Throw Pillows",
      titleZh: "抱枕",
      description: "Soft accents to enhance your space and comfort.",
      descriptionZh: "柔軟的點綴，提升您的空間和舒適度。",
      image: pillowsImage
    },
    {
      id: 2,
      type: "blankets",
      title: "Blankets / Wraps",
      titleZh: "毯子 / 披肩",
      description: "Wrap yourself in softness for instant comfort anywhere.",
      descriptionZh: "用柔軟包裹自己，隨時隨地獲得舒適感。",
      image: blanketsImage
    },
    {
      id: 3,
      type: "slippers",
      title: "Indoor Slippers",
      titleZh: "室內拖鞋",
      description: "Step into Homeward, and let comfort begin from the ground up.",
      descriptionZh: "踏入Homeward，讓舒適從腳底開始。",
      image: slippersImage
    },
    {
      id: 4,
      type: "cushions",
      title: "Fluffy Seat Cushions",
      titleZh: "蓬鬆座墊",
      description: "Add a touch of softness to any seat for lasting comfort.",
      descriptionZh: "為任何座位增添一絲柔軟，帶來持久的舒適感。",
      image: cushionsImage
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center sm:text-left mb-4 sm:mb-0">
            {t("Soft", "柔軟")}
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
            "Surround yourself with softness. Our textile collection brings comfort to every corner of your home.",
            "讓自己沉浸在柔軟之中。我們的紡織品系列為您家的每個角落帶來舒適。"
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