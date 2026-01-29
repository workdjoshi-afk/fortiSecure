import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiPaperAirplane } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required' })
    .regex(/^[+]?[\d\s-()]{10,20}$/, { message: 'Please enter a valid phone number' }),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Message is required' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <HiPhone size={24} />,
    title: 'Phone',
    value: '+91 8745060006',
    href: 'tel:+918745060006',
  },
  {
    icon: <HiMail size={24} />,
    title: 'Email',
    value: 'info@FortiSecure.com',
    href: 'mailto:info@FortiSecure.com',
  },
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Address',
    value: 'E-41, Block E, Noida Sector 3, Noida, Uttar Pradesh',
    href: '#',
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      `Hello FortiSecure!\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
    );
    
    toast.success('Message sent successfully! We will contact you soon.');
    reset();
    setIsSubmitting(false);
    
    // Optionally open WhatsApp with the message
    window.open(`https://wa.me/918745060006?text=${message}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hello FortiSecure, I would like to inquire about your services. Please contact me.'
    );
    window.open(`https://wa.me/918745060006?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-secondary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="font-heading font-semibold text-xl md:text-2xl mb-6 text-foreground">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                      <HiUser size={18} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      placeholder="John Doe"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                        errors.name ? 'border-destructive' : 'border-border hover:border-secondary/50'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                      <HiMail size={18} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@example.com"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                        errors.email ? 'border-destructive' : 'border-border hover:border-secondary/50'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                      <HiPhone size={18} />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                        errors.phone ? 'border-destructive' : 'border-border hover:border-secondary/50'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none ${
                      errors.message ? 'border-destructive' : 'border-border hover:border-secondary/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <HiPaperAirplane size={20} />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info & WhatsApp */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground group-hover:glow-secondary transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6 md:p-8 text-center relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
                <motion.div
                  className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-green-500/10 blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30">
                    <FaWhatsapp size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Get instant assistance via WhatsApp
                  </p>
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="btn-whatsapp w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp size={20} />
                    Chat with Us Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
