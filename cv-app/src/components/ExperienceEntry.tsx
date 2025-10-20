"use client";

import { useState, ReactNode } from 'react';

interface ExperienceEntryProps {
  title: string;
  jobTitle?: string;
  company: string;
  period: string;
  description?: ReactNode;
  responsibilities?: string[];
  technologies?: string[];
  achievements?: string[];
  certificateUrl?: string;
}

export default function ExperienceEntry({
  title,
  jobTitle,
  company,
  period,
  description,
  responsibilities,
  technologies,
  achievements,
  certificateUrl
}: ExperienceEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button 
      className="w-full text-left p-4 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-500 hover:shadow-md"
      onClick={toggleExpanded}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
          {jobTitle && (
            <p className="text-lg font-medium text-orange-700 dark:text-orange-300 mt-1">{jobTitle}</p>
          )}
          <p className="text-orange-600 dark:text-orange-400 font-medium">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
        </div>
        <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-up'} text-orange-500 transition-transform duration-700 ml-4 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}></i>
      </div>
      
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`mt-4 pt-4 border-t border-orange-200 dark:border-orange-700 space-y-4 transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-y-0' : '-translate-y-4'}`}>
          {description && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Description</h5>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{description}</div>
            </div>
          )}
          
          {responsibilities && responsibilities.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Responsibilities</h5>
              <ul className="space-y-0 text-sm text-gray-600 dark:text-gray-300">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 py-1">
                    <i className="fas fa-tasks text-orange-500 text-xs mt-1 flex-shrink-0"></i>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {technologies && technologies.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Technologies Used</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-600 dark:text-gray-300">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 py-1">
                    <i className="fas fa-cog text-orange-500 text-xs flex-shrink-0"></i>
                    <span className="leading-relaxed">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {achievements && achievements.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements</h5>
              <ul className="space-y-0 text-sm text-gray-600 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 py-1">
                    <i className="fas fa-star text-yellow-500 text-xs mt-1 flex-shrink-0"></i>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {certificateUrl && (
            <div className="mt-4 pt-4 border-t border-orange-200 dark:border-orange-700 flex justify-center">
              <a 
                href={certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-award text-lg"></i>
                <span className="font-medium">View Certificate</span>
                <i className="fas fa-external-link-alt text-sm"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}