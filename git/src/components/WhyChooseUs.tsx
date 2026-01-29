import { motion } from 'framer-motion';
import { 
  HiShieldCheck, 
  HiUserGroup, 
  HiClipboardList, 
  HiScale, 
  HiTrendingUp 
} from 'react-icons/hi';

const reasons = [
  {
    icon: <HiShieldCheck size={28} />,
    title: 'Reliable Equipment & Infrastructure',
    description: 'State-of-the-art technology backed by rigorous quality checks and maintenance protocols.',
  },
  {
    icon: <HiUserGroup size={28} />,
    title: 'Experienced Technical & Invigilation Teams',
    description: 'Trained professionals who ensure smooth operations and maintain exam integrity.',
  },
  {
    icon: <HiClipboardList size={28} />,
    title: 'End-to-End Exam & Assessment Management',
    description: 'Complete solutions from planning to results processing under one roof.',
  },
  {
    icon: <HiScale size={28} />,
    title: 'Regulatory Compliance',
    description: 'Full adherence to examination board guidelines and data protection regulations.',
  },
  {
    icon: <HiTrendingUp size={28} />,
    title: 'Scalable Solutions for All Institution Sizes',
    description: 'Flexible solutions that grow with your organization from 100 to 100,000+ candidates.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />
      
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
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            The <span className="gradient-text">FortiSecure</span> Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why leading institutions trust us with their most critical assessments.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card-hover p-6 md:p-8 ${
                index === reasons.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon with gradient background */}
              <motion.div
                className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center text-primary-foreground mb-5"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {reason.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5" />
            
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join 100+ organizations that trust FortiSecure for their examination needs.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
