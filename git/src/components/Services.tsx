import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiDesktopComputer, 
  HiClipboardCheck, 
  HiCog, 
  HiSupport, 
  HiGlobe, 
  HiTruck 
} from 'react-icons/hi';
import { ServiceModal } from './ServiceModal';

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  description: string;
  benefits: { icon: React.ReactNode; text: string }[];
}

const services: ServiceData[] = [
  {
    id: 'equipment-rental',
    title: 'Equipment Rental & Leasing',
    shortDescription: 'Flexible IT equipment solutions for all your technology needs',
    icon: <HiDesktopComputer size={32} />,
    description: 'We provide comprehensive IT equipment rental services including servers, networking devices, workstations, and more. Our flexible rental periods and free replacement policy ensure uninterrupted operations for your organization.',
    benefits: [
      { icon: <HiDesktopComputer size={20} />, text: 'Servers & Networking Devices' },
      { icon: <HiCog size={20} />, text: 'CCTV & Security Devices' },
      { icon: <HiDesktopComputer size={20} />, text: 'Laptops, Desktops & Workstations' },
      { icon: <HiCog size={20} />, text: 'Projectors, Printers, QR & Barcode Scanners' },
      { icon: <HiClipboardCheck size={20} />, text: 'Flexible Rental Period' },
      { icon: <HiSupport size={20} />, text: 'Free Replacement During Rental' },
    ],
  },
  {
    id: 'examination-support',
    title: 'Examination Support Services',
    shortDescription: 'Complete examination management from start to finish',
    icon: <HiClipboardCheck size={32} />,
    description: 'Our end-to-end examination support covers everything from proctoring to certification issuance. We handle the complexities of exam management so you can focus on your core educational mission.',
    benefits: [
      { icon: <HiClipboardCheck size={20} />, text: 'Onsite & Remote Proctoring' },
      { icon: <HiTruck size={20} />, text: 'Logistics & Venue Management' },
      { icon: <HiCog size={20} />, text: 'Secure Paper & Digital Exam Handling' },
      { icon: <HiSupport size={20} />, text: 'Candidate Registration & Verification' },
      { icon: <HiClipboardCheck size={20} />, text: 'Marks Processing & Certificate Issuance' },
      { icon: <HiGlobe size={20} />, text: 'Compliance & Reporting Support' },
    ],
  },
  {
    id: 'omr-processing',
    title: 'Optical Mark Recognition (OMR)',
    shortDescription: 'High-speed, accurate answer sheet processing',
    icon: <HiCog size={32} />,
    description: 'Our OMR solutions deliver lightning-fast processing with unmatched accuracy. Reduce manual errors and ensure secure, reliable exam scoring for high-stakes assessments.',
    benefits: [
      { icon: <HiCog size={20} />, text: 'High-Speed Processing' },
      { icon: <HiClipboardCheck size={20} />, text: 'High Accuracy Results' },
      { icon: <HiSupport size={20} />, text: 'Significant Error Reduction' },
      { icon: <HiCog size={20} />, text: 'Secure Exam Scoring' },
    ],
  },
  {
    id: 'technical-services',
    title: 'Technical Services',
    shortDescription: 'Expert technical support and maintenance solutions',
    icon: <HiSupport size={32} />,
    description: 'Keep your technology running smoothly with our comprehensive technical services. From repairs to network management, our expert team ensures your infrastructure performs at its best.',
    benefits: [
      { icon: <HiCog size={20} />, text: 'Equipment Repair & Preventive Maintenance' },
      { icon: <HiGlobe size={20} />, text: 'Network Setup & Management' },
      { icon: <HiSupport size={20} />, text: 'Installation & Troubleshooting' },
      { icon: <HiCog size={20} />, text: 'Event-Critical Technical Support' },
    ],
  },
  {
    id: 'collaborations',
    title: 'Collaborations & Technology Solutions',
    shortDescription: 'Innovative digital solutions for modern assessments',
    icon: <HiGlobe size={32} />,
    description: 'Embrace the future of assessments with our cutting-edge technology solutions. From AI-powered proctoring to custom integrations, we help you stay ahead in the digital education landscape.',
    benefits: [
      { icon: <HiGlobe size={20} />, text: 'Online Exam Platforms' },
      { icon: <HiCog size={20} />, text: 'AI-Powered Remote Proctoring' },
      { icon: <HiSupport size={20} />, text: 'Secure Data Management' },
      { icon: <HiCog size={20} />, text: 'Custom Integration' },
      { icon: <HiSupport size={20} />, text: 'Training & Dedicated Support' },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Ancillary Services',
    shortDescription: 'Secure storage and distribution across locations',
    icon: <HiTruck size={32} />,
    description: 'Our logistics solutions ensure your equipment and materials reach their destination securely and on time. From warehousing to multi-location distribution, we\'ve got you covered.',
    benefits: [
      { icon: <HiTruck size={20} />, text: 'Secure Warehousing' },
      { icon: <HiTruck size={20} />, text: 'Specialized Transportation' },
      { icon: <HiCog size={20} />, text: 'Equipment Calibration & Maintenance' },
      { icon: <HiGlobe size={20} />, text: 'Multi-Location Distribution' },
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-secondary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Comprehensive <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From equipment rental to complete examination management, we provide 
            end-to-end technology solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => setSelectedService(service)}
                className="glass-card-hover p-6 md:p-8 w-full text-left group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-5 group-hover:glow-secondary transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Learn More */}
                <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
