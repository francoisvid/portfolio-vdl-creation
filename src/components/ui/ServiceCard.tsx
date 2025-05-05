import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="w-14 h-14 rounded-lg bg-orange-50 dark:bg-blue-900/20 flex items-center justify-center mb-5 text-blue-900 dark:text-blue-400">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
