import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-400 dark:to-orange-300 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
