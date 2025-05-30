import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="bg-warmWhite text-deepBrown hover:bg-warmTan border border-warmTan border-opacity-30 rounded-full px-4 py-1 flex items-center gap-2 shadow-sm transition-all duration-300"
    >
      <span className="text-sm font-medium">
        {language === "en" ? "中文" : "EN"}
      </span>
      <span className="text-xs opacity-60">
        {language === "en" ? "切換語言" : "Switch Language"}
      </span>
    </Button>
  );
}
