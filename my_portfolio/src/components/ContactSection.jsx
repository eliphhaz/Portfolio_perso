import { Mail, MapPin, Phone, Send, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLang();
  const c = t.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const titleRef  = useReveal();
  const infoRef   = useReveal();
  const formRef   = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(e.target);
    data.append("access_key", "9d1ea83f-815a-4b55-ac21-a27f24c7bc36");
    data.append("subject", `Nouveau message de ${formData.name}`);
    data.append("from_name", "Elip_Folio");
    data.append("replyto", formData.email);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();
      if (result.success) {
        toast({ title: c.toast_success_title, description: c.toast_success_desc });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: c.toast_error_title, description: c.toast_error_desc });
      }
    } catch {
      toast({ title: c.toast_error_title, description: c.toast_error_desc });
    }
    setIsSubmitting(false);
  };

  const contacts = [
    { icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />, label: c.contacts[0].label, value: "eliphaz.guetin@epitech.eu", href: "mailto:eliphaz.guetin@epitech.eu" },
    { icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />, label: c.contacts[1].label, value: "+225 0151322936", href: "tel:+2250151322936" },
    { icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />, label: c.contacts[2].label, value: "Abidjan, Côte d'Ivoire", href: null },
  ];

  const socials = [
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/n-doa-eliphaz-guetin-b0291835b/" },
    { icon: <Facebook size={22} />, href: "https://www.facebook.com/eliphaz.guetin.7/" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/elip_haz/" },
    { icon: <Github size={22} />, href: "https://github.com/eliphhaz" },
  ];

  return (
    <section id="contact" className="py-12 px-4 relative bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">

        <h2 ref={titleRef} className="reveal-up text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          {c.title} <span className="text-blue-600 dark:text-blue-400">{c.title_highlight}</span>
        </h2>
        <p className="reveal-fade text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {c.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Info */}
          <div ref={infoRef} className="reveal-left space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{c.info_title}</h3>
            <div className="space-y-6">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{c.label}</h4>
                    {c.href ? (
                      <a href={c.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-gray-100">{c.social_title}</h4>
              <div className="flex space-x-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="icon-hover w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div ref={formRef} className="reveal-right bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">{c.form_title}</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {[
                { type: "text",  name: "name",  placeholder: c.name_placeholder },
                { type: "email", name: "email", placeholder: c.email_placeholder },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow duration-200 focus:shadow-md"
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={c.message_placeholder}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none transition-shadow duration-200 focus:shadow-md"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn-hover w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? c.sending : c.send} <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
