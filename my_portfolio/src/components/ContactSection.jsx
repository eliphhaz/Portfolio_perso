import { Mail, MapPin, Phone, Send, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "9d1ea83f-815a-4b55-ac21-a27f24c7bc36");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai bientôt.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Erreur",
          description: "Le message n'a pas pu être envoyé. Réessayez.",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Le message n'a pas pu être envoyé. Réessayez.",
      });
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 animate-fade-in">
          Me <span className="text-blue-600 dark:text-blue-400">Contacter</span>
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-slide-up">
          Vous avez un projet en tête ou souhaitez collaborer ? N’hésitez pas à me contacter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Contact */}
          <div className="space-y-8 animate-fade-in-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Information de contact</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Email</h4>
                  <a
                    href="mailto:eliphaz.guetin@epitech.eu"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    eliphaz.guetin@epitech.eu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Téléphone</h4>
                  <a
                    href="tel:+2250102030405"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +225 0151322936
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Localisation</h4>
                  <span className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Abidjan, Côte d'Ivoire
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-gray-100">Réseaux sociaux</h4>
              <div className="flex space-x-4 justify-start text-gray-900 dark:text-gray-100">
                <a href="https://www.linkedin.com/in/n-doa-eliphaz-guetin-b0291835b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.facebook.com/eliphaz.guetin.7/" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/elip_haz/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://github.com/eliphhaz" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fade-in-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Envoyez un message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message"
                rows="5"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Envoi..." : "Envoyer"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
