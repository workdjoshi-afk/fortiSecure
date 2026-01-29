import { motion } from 'framer-motion';
import { HiCheckCircle, HiShieldCheck, HiLightningBolt, HiUserGroup } from 'react-icons/hi';

const features = [
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for all exam operations',
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: 'Fast Deployment',
    description: 'Quick setup and seamless integration',
  },
  {
    icon: <HiUserGroup size={24} />,
    title: 'Expert Support',
    description: '24/7 dedicated technical assistance',
  },
  {
    icon: <HiCheckCircle size={24} />,
    title: 'Proven Track Record',
    description: '500+ successful examinations managed',
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-secondary text-sm font-medium mb-4">
              About FortiSecure
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Your Trusted Partner in{' '}
              <span className="gradient-text">Assessment Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in providing end-to-end examination and educational support 
              solutions powered by modern technology and reliable infrastructure. From 
              renting IT equipment to managing entire test centers, we help institutions, 
              universities, corporates, recruitment agencies, and government organizations 
              conduct secure and hassle-free assessments.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30"
                >
                  <div className="text-secondary shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-heading font-bold gradient-text mb-4">
                    10+
                  </div>
                  <div className="text-xl font-heading font-semibold text-foreground mb-2">
                    Years of Excellence
                  </div>
                  <p className="text-muted-foreground">
                    Delivering trusted technology solutions across India
                  </p>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-secondary/20 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-4 md:-left-8 top-1/4 glass-card p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                animate={{ y: [0, -10, 0] }}
              >
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-xs text-muted-foreground">Candidates</div>
              </motion.div>

              <motion.div
                className="absolute -right-4 md:-right-8 bottom-1/4 glass-card p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                animate={{ y: [0, 10, 0] }}
              >
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-xs text-muted-foreground">Cities Covered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
