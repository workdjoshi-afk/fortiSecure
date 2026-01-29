import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import type { ServiceData } from './Services';

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  if (!service) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello FortiSecure, I am interested in ${service.title}. Please contact me.`
    );
    window.open(`https://wa.me/8745060006?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto z-50 glass-card p-6 md:p-8"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              <HiX size={24} />
            </motion.button>

            {/* Content */}
            <div className="pr-8">
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0 glow-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-sm font-medium">Premium Service</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
                  Key Features & Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <span className="text-secondary">{benefit.icon}</span>
                      <span className="text-sm text-foreground">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp w-full text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp size={24} />
                Contact on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
