import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mishra.avinash.r@gmail.com",
      href: "mailto:mishra.avinash.r@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9429565147",
      href: "tel:+919429565147"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/avinash-mishra-4b5544377"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/avinashmishra-sudo"
    }
  ];

  return (
    <section id="contact" className="section-container bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for a dedicated QA professional? Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="card-elevated p-8 space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <div className="w-1 h-8 bg-accent-cyan rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index}>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent-cyan/5 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/20 transition-colors">
                          <item.icon className="h-5 w-5 text-accent-cyan" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-primary font-medium">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4">
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-accent-cyan" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="text-primary font-medium">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-medium text-muted-foreground mb-4">
                  Connect on social
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent-cyan/10 hover:bg-accent-cyan hover:text-white text-accent-cyan rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Send a Message
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-primary">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Job Opportunity / Collaboration / General Inquiry"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your opportunity or inquiry..."
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent-cyan hover:bg-accent-cyan/90 text-white font-semibold h-12"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I typically respond within 24-48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
