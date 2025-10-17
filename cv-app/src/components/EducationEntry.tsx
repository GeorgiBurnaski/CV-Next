"use client";

import { useState } from 'react';

interface EducationEntryProps {
  degree: string;
  degreeName?: string;
  university: string;
  faculty: string;
  period: string;
  description?: string;
  coursework?: string[];
  gpa?: string;
  achievements?: string[];
  diplomaImageUrl?: string;
}

export default function EducationEntry({
  degree,
  degreeName,
  university,
  faculty,
  period,
  description,
  coursework,
  gpa,
  achievements,
  diplomaImageUrl
}: EducationEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button 
      className="w-full text-left p-4 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-lg border border-indigo-200 dark:border-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500 hover:shadow-md"
      onClick={toggleExpanded}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{degree}</h4>
          {degreeName && (
            <p className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mt-1">{degreeName}</p>
          )}
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{university}</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{faculty}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
        </div>
        <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-up'} text-indigo-500 transition-transform duration-700 ml-4 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}></i>
      </div>
      
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-700 space-y-4 transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-y-0' : '-translate-y-4'}`}>
          {description && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Description</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>
          )}
          
          {gpa && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-1">Average Degree Score</h5>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{gpa}</p>
            </div>
          )}
          
          {coursework && coursework.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Coursework</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-600 dark:text-gray-300">
                {coursework.map((course, index) => (
                  <li key={index} className="flex items-center gap-2 py-1">
                    <i className="fas fa-book text-indigo-500 text-xs flex-shrink-0"></i>
                    <span className="leading-relaxed">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {achievements && achievements.length > 0 && (
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Achievements</h5>
              <ul className="space-y-0 text-sm text-gray-600 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 py-1">
                    <i className="fas fa-trophy text-yellow-500 text-xs mt-1 flex-shrink-0"></i>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {diplomaImageUrl && (
            <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-700 flex justify-center">
              <a 
                href={diplomaImageUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-certificate text-lg"></i>
                <span className="font-medium">View Diploma</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}