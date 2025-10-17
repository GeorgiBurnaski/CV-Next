"use client";

import { useState } from 'react';

interface ProjectEntryProps {
  title: string;
  description: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Planning";
  icon: string;
  color: "blue" | "purple" | "green" | "orange";
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export default function ProjectEntry({
  title,
  description,
  technologies,
  status,
  icon,
  color,
  link,
  githubUrl,
  liveUrl,
  features,
  challenges,
  outcomes
}: ProjectEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getColorClasses = (colorType: "background" | "border" | "text" | "hover") => {
    const colorMap = {
      blue: {
        background: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40"
      },
      purple: {
        background: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        hover: "hover:bg-purple-100 dark:hover:bg-purple-900/40"
      },
      green: {
        background: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-500",
        text: "text-green-600 dark:text-green-400",
        hover: "hover:bg-green-100 dark:hover:bg-green-900/40"
      },
      orange: {
        background: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        hover: "hover:bg-orange-100 dark:hover:bg-orange-900/40"
      }
    };
    return colorMap[color][colorType];
  };

  const getStatusClasses = () => {
    switch (status) {
      case "Completed":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "In Progress":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "Planning":
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <button 
      className={`w-full text-left p-6 rounded-xl border-l-4 transition-all duration-700 hover:shadow-lg ${
        getColorClasses("background")} ${getColorClasses("border")} ${getColorClasses("hover")}`}
      onClick={toggleExpanded}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <i className={`${icon} text-2xl ${getColorClasses("text")}`}></i>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClasses()}`}>
            {status}
          </span>
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-gray-400 transition-transform duration-700 ${isExpanded ? 'rotate-180' : ''}`}></i>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, techIndex) => (
          <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-700 ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
          
          {features && features.length > 0 && (
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fas fa-star text-yellow-500"></i>
                Key Features
              </h5>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check-circle text-green-500 mt-0.5 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {challenges && challenges.length > 0 && (
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fas fa-puzzle-piece text-blue-500"></i>
                Challenges & Solutions
              </h5>
              <ul className="space-y-1">
                {challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-lightbulb text-yellow-500 mt-0.5 text-xs"></i>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {outcomes && outcomes.length > 0 && (
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <i className="fas fa-trophy text-purple-500"></i>
                Outcomes & Impact
              </h5>
              <ul className="space-y-1">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-arrow-up text-green-500 mt-0.5 text-xs"></i>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium text-white ${
                  color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                  color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                  color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                  'bg-orange-600 hover:bg-orange-700'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}