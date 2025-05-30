import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import loungewearImage from "@/assets/images/loungewear.jpg";
import candlesImage from "@/assets/images/candles.jpg";
import slippersImage from "@/assets/images/slippers.jpg";

// 產品子類別資料
type SubCategory = {
  id: number;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
};

type ProductCategory = {
  id: number;
  type: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  subCategories: SubCategory[];
};

export default function ProductDetail() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // 從URL獲取產品類型
  const productType = location.split("/")[2];
  
  useEffect(() => {
    // 添加active類以實現動畫效果
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("active");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 產品類別資料
  const productCategories: ProductCategory[] = [
    {
      id: 1,
      type: "loungewear",
      title: "Loungewear",
      titleZh: "居家服飾",
      description: "Slip into Homeward, and feel like you're returning to yourself.",
      descriptionZh: "穿上Homeward，感覺像是回到了真實的自己。",
      image: loungewearImage,
      subCategories: [
        {
          id: 101,
          title: "Minimalist Comfort",
          titleZh: "極簡放鬆款",
          description: "Pure color, loose fit, pressure-free experience.",
          descriptionZh: "純色、寬鬆、無壓感",
        },
        {
          id: 102,
          title: "Cozy Softness",
          titleZh: "療癒軟糯款",
          description: "Fleece, thick cotton, perfect for cold days.",
          descriptionZh: "刷毛、厚棉、適合冷天",
        },
        {
          id: 103,
          title: "Free Movement",
          titleZh: "自在活動款",
          description: "Lightweight, breathable, suitable for daytime wear.",
          descriptionZh: "輕盈、透氣、適合白天穿",
        }
      ]
    },
    {
      id: 2,
      type: "candles",
      title: "Scented Candles",
      titleZh: "香氛蠟燭",
      description: "Light up Homeward, and illuminate a quiet corner of your heart.",
      descriptionZh: "點亮Homeward，照亮心中寧靜的角落。",
      image: candlesImage,
      subCategories: [
        {
          id: 201,
          title: "Sleep Aid",
          titleZh: "助眠系",
          description: "Lavender, cedar, white musk.",
          descriptionZh: "薰衣草、雪松、白麝香",
        },
        {
          id: 202,
          title: "Refreshing Healing",
          titleZh: "療癒清新",
          description: "Grapefruit, bergamot, orange blossom.",
          descriptionZh: "柚子、佛手柑、橙花",
        },
        {
          id: 203,
          title: "Warm Woody",
          titleZh: "溫暖木質",
          description: "Sandalwood, amber, cedar.",
          descriptionZh: "檀香、琥珀、杉木",
        }
      ]
    },
    {
      id: 3,
      type: "slippers",
      title: "Indoor Slippers",
      titleZh: "室內拖鞋",
      description: "Step into Homeward, and let comfort begin from the ground up.",
      descriptionZh: "踏入Homeward，讓舒適從腳底開始。",
      image: slippersImage,
      subCategories: [
        {
          id: 301,
          title: "Extra Soft Cushion",
          titleZh: "極柔厚墊",
          description: "Feels like walking on clouds, perfect for cold weather.",
          descriptionZh: "踩起來像雲，適合寒天",
        },
        {
          id: 302,
          title: "Light Daily",
          titleZh: "輕便日常",
          description: "Suitable for short-term activities, well-ventilated.",
          descriptionZh: "適合短時間活動、通風",
        },
        {
          id: 303,
          title: "Quality Series",
          titleZh: "質感系列",
          description: "Lamb wool, felt, silent soles.",
          descriptionZh: "羊羔絨、毛呢、靜音底",
        }
      ]
    }
  ];

  // 獲取當前產品類別
  const currentProduct = productCategories.find(p => p.type === productType);
  
  if (!currentProduct) {
    return (
      <section className="section min-h-screen py-20 bg-softBeige pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair text-2xl text-deepBrown mb-4">
            {t("Product Not Found", "找不到產品")}
          </h2>
          <Link href="/products">
            <Button className="bg-warmTan hover:bg-deepBrown text-white font-montserrat py-2 px-6 rounded-full transition-colors duration-300 mt-4">
              {t("Back to Products", "返回產品頁面")}
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <Link href="/products">
          <span className="inline-flex items-center text-warmTan hover:text-deepBrown transition-colors duration-300 mb-8 cursor-pointer">
            <i className="fas fa-arrow-left mr-2"></i>
            {t("Back to Products", "返回產品頁面")}
          </span>
        </Link>
        
        <div className="bg-warmWhite rounded-lg overflow-hidden shadow-md mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={currentProduct.image}
                alt={t(currentProduct.title, currentProduct.titleZh)} 
                className="w-full h-full object-cover max-h-96 md:max-h-full"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown mb-4">
                {t(currentProduct.title, currentProduct.titleZh)}
              </h2>
              <p className="text-softBlack mb-6">
                {t(currentProduct.description, currentProduct.descriptionZh)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-warmWhite p-8 rounded-lg shadow-md">
          <h3 className="font-playfair text-2xl text-deepBrown mb-6 text-center border-b border-warmTan pb-4">
            {t("Product Categories", "產品類別")}
          </h3>
          
          <div className="space-y-8">
            {currentProduct.subCategories.map((subCategory) => (
              <div key={subCategory.id} className="flex flex-col md:flex-row md:items-start hover:bg-softBeige hover:bg-opacity-30 p-4 -mx-4 rounded-lg transition-colors duration-300">
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <h4 className="font-playfair text-xl text-deepBrown border-b border-warmTan border-opacity-30 pb-2 md:border-0 md:pb-0">
                    {t(subCategory.title, subCategory.titleZh)}
                  </h4>
                </div>
                <div className="md:w-2/3 md:pl-6 md:border-l border-warmTan border-opacity-30">
                  <div className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-warmTan mt-2 mr-3 flex-shrink-0"></span>
                    <div className="text-softBlack">
                      <p className="leading-relaxed">
                        {t(subCategory.description, subCategory.descriptionZh)}
                      </p>
                      <div className="mt-3 text-sm opacity-75 italic">
                        {t("Ideal for", "適合")}:&nbsp;
                        {subCategory.id === 101 || subCategory.id === 201 || subCategory.id === 301 
                          ? t("Relaxation and comfort at home", "居家放鬆與舒適") 
                          : subCategory.id === 102 || subCategory.id === 202 || subCategory.id === 302 
                            ? t("Daily casual use", "日常休閒使用")
                            : t("Enhancing home atmosphere", "提升家居氛圍")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}