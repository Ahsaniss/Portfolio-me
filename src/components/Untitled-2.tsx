import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "353875a5-9527-46bb-a421-8c3b780a2e5d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        event.currentTarget.reset();
      } else {
        setResult("Submission failed ❌");
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
      setResult("Error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-primary">05.</span> Get In Touch
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation. Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Let's Talk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for a software engineer, project manager, or AI developer, 
                  I'd love to hear about your project and see how I can help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-4">
                <ContactItem 
                  icon={<Mail className="h-6 w-6 text-primary" />} 
                  label="Email" 
                  value="ahsanraza858585@gmail.com" 
                />
                <ContactItem 
                  icon={<MapPin className="h-6 w-6 text-primary" />} 
                  label="Location" 
                  value="Faisalabad, Pakistan" 
                />
                <ContactItem 
                  icon={<Phone className="h-6 w-6 text-primary" />} 
                  label="Phone" 
                  value="+92 3XX XXXXXXX" 
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Connect With Me</h4>
                <div className="flex gap-4">
                  <SocialIcon 
                    href="https://www.linkedin.com/in/muhammad-ahsan-raza-2a9b9828a" 
                    icon={<Linkedin className="h-5 w-5" />} 
                  />
                  <SocialIcon 
                    href="https://github.com/Ahsaniss" 
                    icon={<Github className="h-5 w-5" />} 
                  />
                  <SocialIcon 
                    href="mailto:ahsanraza858585@gmail.com" 
                    icon={<Mail className="h-5 w-5" />} 
                  />
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">Ready to Work Together?</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm currently available for new projects and opportunities. 
                    Let's discuss how we can create something amazing together.
                  </p>
                  <Button variant="hero" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Say Hello
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary">Send Me a Message</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField 
                        label="Name *" 
                        name="name" 
                        type="text" 
                        placeholder="Your name" 
                        required 
                      />
                      <InputField 
                        label="Email *" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    <InputField 
                      label="Subject *" 
                      name="subject" 
                      type="text" 
                      placeholder="What's this about?" 
                      required 
                    />
                    <TextareaField 
                      label="Message *" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={6} 
                      required 
                    />

                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full" 
                      size="lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {result && (
                      <p className="text-sm text-center text-muted-foreground">
                        {result}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Components
const InputField = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <Label htmlFor={props.name}>{label}</Label>
    <Input 
      id={props.name}
      className="bg-background/50 border-border/50 focus:border-primary" 
      {...props} 
    />
  </div>
);

const TextareaField = ({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div className="space-y-2">
    <Label htmlFor={props.name}>{label}</Label>
    <Textarea 
      id={props.name}
      className="bg-background/50 border-border/50 focus:border-primary resize-none" 
      {...props} 
    />
  </div>
);

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-medium text-foreground">{label}</p>
      <p className="text-muted-foreground">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <Button 
    variant="outline" 
    size="icon" 
    className="hover:bg-primary/10 hover:border-primary/50" 
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </Button>
);

export default Contact;