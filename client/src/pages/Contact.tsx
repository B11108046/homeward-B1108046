import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Contact form submission mutation
  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      // Show success message
      toast({
        title: t("Message Sent", "訊息已發送"),
        description: t("Thank you for your message. We'll be in touch soon!", "感謝您的留言。我們將很快與您聯繫！"),
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      console.error('Error submitting contact form:', error);
      toast({
        title: t("Error", "錯誤"),
        description: t("There was a problem sending your message. Please try again later.", "發送訊息時發生問題。請稍後再試。"),
        variant: "destructive"
      });
    }
  });
  
  useEffect(() => {
    // Add active class after component mounts for animation
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("active");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("Missing Information", "資料不完整"),
        description: t("Please fill in all required fields.", "請填寫所有必填欄位。"),
        variant: "destructive"
      });
      return;
    }
    
    // Submit form data to API
    contactMutation.mutate(formData);
  };

  return (
    <section ref={sectionRef} className="section min-h-screen py-20 bg-warmWhite pt-32">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl text-deepBrown text-center mb-16">
          {t("Contact", "聯絡我們")}
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-10">
            <h3 className="font-playfair text-xl text-deepBrown mb-4">
              {t("Get in Touch", "與我們聯繫")}
            </h3>
            
            <div className="space-y-4">
              <p className="text-softBlack">
                {t(
                  "If you have any questions about our products or services, feel free to contact us via:",
                  "如有任何關於我們產品或服務的問題，歡迎透過以下方式聯絡我們："
                )}
              </p>
              
              <div className="flex items-center space-x-3 text-softBlack">
                <i className="far fa-envelope text-warmTan"></i>
                <span>Email: <a href="mailto:aaqq1063@gmail.com" className="text-deepBrown hover:underline">aaqq1063@gmail.com</a></span>
              </div>
              
              <div className="flex items-center space-x-3 text-softBlack">
                <i className="fas fa-phone-alt text-warmTan"></i>
                <span>Phone: <a href="tel:+886978479756" className="text-deepBrown hover:underline">+886-978-479-756</a></span>
              </div>
              
              <div className="flex items-center space-x-3 text-softBlack">
                <i className="fab fa-line text-warmTan"></i>
                <span>LINE: <span className="text-deepBrown">0978479756</span></span>
              </div>
              
              <div className="flex items-center space-x-3 text-softBlack">
                <i className="fab fa-instagram text-warmTan"></i>
                <span>Instagram: <a href="https://instagram.com/yi_lynn__" target="_blank" rel="noopener noreferrer" className="text-deepBrown hover:underline">yi_lynn__</a></span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-softBeige pt-8">
            <h3 className="font-playfair text-xl text-deepBrown mb-4">
              {t("Send a Message", "發送訊息")}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-softBlack">
                  {t("Name", "姓名")}
                </label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-softBeige rounded-md focus:outline-none focus:ring-1 focus:ring-warmTan"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-softBlack">
                  {t("Email", "電子郵件")}
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-softBeige rounded-md focus:outline-none focus:ring-1 focus:ring-warmTan"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-softBlack">
                  {t("Message", "訊息")}
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-softBeige rounded-md focus:outline-none focus:ring-1 focus:ring-warmTan"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-warmTan hover:bg-deepBrown text-white font-montserrat py-2 px-6 rounded-full transition-colors duration-300"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending 
                  ? t("Sending...", "發送中...") 
                  : t("Send Message", "發送訊息")
                }
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
