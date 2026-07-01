import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const onboardingData = [
  {
    title: "AI Customer Support",
    description: "SellMate AI handles your customer inquiries 24/7 with human-like intelligence.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ea87a80-49c9-4b15-b15e-ff5a3fc9c2ee/ai-support-illustration-3e89a56d-1782350717595.webp",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Smart Negotiation",
    description: "Our AI negotiates product prices within your set limits to close more deals.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ea87a80-49c9-4b15-b15e-ff5a3fc9c2ee/automated-negotiation-illustration-07fe7d80-1782350716710.webp",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Automated Orders",
    description: "Collect delivery info and payments automatically without lifting a finger.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8ea87a80-49c9-4b15-b15e-ff5a3fc9c2ee/order-management-illustration-5911462a-1782350717054.webp",
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${onboardingData[currentStep].color} opacity-30 transition-colors duration-700`} />
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full aspect-square relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={onboardingData[currentStep].image} 
                alt={onboardingData[currentStep].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{onboardingData[currentStep].title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
              {onboardingData[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 flex flex-col gap-6 z-10">
        <div className="flex justify-center gap-2">
          {onboardingData.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === currentStep ? "w-8 bg-primary" : "w-2 bg-muted"}`} 
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate('/login')}>Skip</Button>
          <Button size="lg" className="rounded-full px-8 gap-2" onClick={handleNext}>
            {currentStep === onboardingData.length - 1 ? "Get Started" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
