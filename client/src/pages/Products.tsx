import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import wearImage from "@/assets/images/categories/wear.jpg";
import scentImage from "@/assets/images/categories/scent.jpg";
import softImage from "@/assets/images/categories/soft.jpg";
import ritualImage from "@/assets/images/categories/ritual.jpg";

type ProductCategory = {
  id: number;
  type: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  items: string[];
  itemsZh: string[];
};

export default function Products() {
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

  const categories: ProductCategory[] = [
    {
      id: 1,
      type: "wear",
      title: "Wear",
      titleZh: "穿著",
      description: "Wrap yourself in comfort with our selection of soft, cozy wearables.",
      descriptionZh: "用我們精選的柔軟、舒適的穿著包裹自己。",
      image: wearImage,
      items: ["Loungewear", "Pajamas / Robes", "Cozy Socks", "Soft Headbands"],
      itemsZh: ["居家服飾", "睡衣 / 浴袍", "舒適襪子", "柔軟髮帶"]
    },
    {
      id: 2,
      type: "scent",
      title: "Scent",
      titleZh: "香氛",
      description: "Fill your home with gentle fragrances that create a soothing atmosphere.",
      descriptionZh: "用柔和的香氣填滿您的家，營造舒緩的氛圍。",
      image: scentImage,
      items: ["Scented Candles", "Reed Diffusers", "Scented Wax / Incense", "Pillow Mist"],
      itemsZh: ["香氛蠟燭", "藤條擴香", "香氛蠟片 / 線香", "枕頭噴霧"]
    },
    {
      id: 3,
      type: "soft",
      title: "Soft",
      titleZh: "柔軟",
      description: "Surround yourself with softness in every corner of your home.",
      descriptionZh: "在您家的每個角落都被柔軟包圍。",
      image: softImage,
      items: ["Throw Pillows", "Blankets / Wraps", "Indoor Slippers", "Fluffy Seat Cushions"],
      itemsZh: ["抱枕", "毯子 / 披肩", "室內拖鞋", "蓬鬆座墊"]
    },
    {
      id: 4,
      type: "ritual",
      title: "Ritual",
      titleZh: "儀式",
      description: "Enhance your everyday rituals with items that bring calm and mindfulness.",
      descriptionZh: "用能帶來寧靜和專注的物品提升您的日常儀式。",
      image: ritualImage,
      items: ["Ambient Lights / Night Lamps", "White Noise Machines / Speakers", "Journals / Relaxation Notebooks", "Tea Sets / Little Treats"],
      itemsZh: ["氛圍燈 / 夜燈", "白噪音機 / 音箱", "日記本 / 放鬆筆記本", "茶具組 / 小點心"]
    }
  ];

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-softBeige pt-32">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center mb-6">
          {t("Product Categories", "產品類別")}
        </h2>
        
        <p className="text-center text-softBlack mb-16 max-w-2xl mx-auto">
          {t(
            "Explore our carefully curated collection designed to bring warmth and comfort to your home.",
            "探索我們精心策劃的系列，為您的家帶來溫暖和舒適。"
          )}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {categories.map((category) => (
            <div key={category.id} className="product-card bg-warmWhite rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex h-full">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={category.image}
                    alt={t(category.title, category.titleZh)} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-2xl text-deepBrown mb-3">
                      {t(category.title, category.titleZh)}
                    </h3>
                    <p className="text-softBlack mb-4">
                      {t(category.description, category.descriptionZh)}
                    </p>
                    
                    <div className="mt-4 space-y-1">
                      <p className="text-softBlack font-semibold">{t("Including:", "包含:")}</p>
                      <ul className="grid grid-cols-1 gap-y-1 mt-2">
                        {category.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-warmTan mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-sm text-softBlack">
                              {t(item, category.itemsZh[index])}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link href={`/products/category/${category.type}`} className="inline-block mt-auto text-warmTan hover:text-deepBrown font-montserrat text-sm transition-colors duration-300">
                    {t("Browse All", "瀏覽全部")}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
