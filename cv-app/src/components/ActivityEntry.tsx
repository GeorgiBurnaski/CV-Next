"use client";

import Image from "next/image";
import { useState } from "react";

interface ActivityEntryProps {
  date: string;
  title: string;
  category: string;
  color: "green" | "orange" | "purple" | "blue";
  description: string;
  image: string;
  hasImage: boolean;
}

export default function ActivityEntry({
  date,
  title,
  category,
  color,
  description,
  image,
  hasImage
}: ActivityEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const getColorClasses = (type: "bg" | "text" | "badge" | "iconBg") => {
    switch (color) {
      case "green":
        return {
          bg: "border-green-500 bg-green-50 dark:bg-green-900/20",
          text: "text-green-600 dark:text-green-400",
          badge: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
          iconBg: "bg-green-100 dark:bg-green-800/30"
        }[type];
      case "orange":
        return {
          bg: "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
          text: "text-orange-600 dark:text-orange-400",
          badge: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
          iconBg: "bg-orange-100 dark:bg-orange-800/30"
        }[type];
      case "purple":
        return {
          bg: "border-purple-500 bg-purple-50 dark:bg-purple-900/20",
          text: "text-purple-600 dark:text-purple-400",
          badge: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
          iconBg: "bg-purple-100 dark:bg-purple-800/30"
        }[type];
      case "blue":
      default:
        return {
          bg: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
          text: "text-blue-600 dark:text-blue-400",
          badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
          iconBg: "bg-blue-100 dark:bg-blue-800/30"
        }[type];
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case "Hiking":
        return "fa-hiking";
      case "Gardening":
        return "fa-seedling";
      case "Travelling":
        return "fa-car";
      case "Gaming":
        return "fa-gamepad";
      default:
        return "fa-calendar";
    }
  };

  return (
    <>
      {/* Regular Activity Card */}
      <div 
        className={`p-4 rounded-lg border-l-4 ${getColorClasses("bg")} hover:shadow-lg transition-all duration-300 cursor-pointer`}
        onClick={toggleExpanded}
      >
        <div className="flex gap-4">
          {/* Image Section */}
          <div className="flex-shrink-0">
            {hasImage ? (
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className={`w-20 h-20 rounded-lg flex items-center justify-center ${getColorClasses("iconBg")}`}>
                <i className={`fas ${getCategoryIcon()} ${getColorClasses("text")} text-2xl`}></i>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h5 className="font-semibold text-gray-900 dark:text-white">{title}</h5>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses("badge")}`}>
                {category}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <i className="fas fa-calendar text-xs"></i>
              {date}
            </p>
          </div>
        </div>

        {/* Click to expand hint */}
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <i className="fas fa-expand-arrows-alt text-xs mr-1"></i>
            Click to expand for more information
          </p>
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-white/20 dark:bg-slate-900/20 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={toggleExpanded}
        >
          <div 
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl border-l-8 ${getColorClasses("bg")} shadow-2xl transition-opacity duration-500 animate-fade-in`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={toggleExpanded}
              className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="fas fa-times text-gray-600 dark:text-gray-300"></i>
            </button>
<div 
  className="fixed inset-0 bg-white/20 dark:bg-slate-900/20 z-50 rounded-2xl flex items-center justify-center p-4 animate-fade-in"
  onClick={toggleExpanded}
></div>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Large Image Section */}
                <div className="flex-shrink-0 lg:w-1/2">
                  {hasImage ? (
                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-full aspect-square rounded-2xl flex items-center justify-center ${getColorClasses("iconBg")} shadow-lg`}>
                      <i className={`fas ${getCategoryIcon()} ${getColorClasses("text")} text-8xl`}></i>
                    </div>
                  )}
                </div>

                {/* Expanded Content Section */}
                <div className="flex-1 lg:w-1/2">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${getColorClasses("badge")}`}>
                      {category}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
                  
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <i className="fas fa-calendar text-lg"></i>
                    <p className="text-lg">{date}</p>
                  </div>

                  {/* Additional Details Section */}
                  <div className="mt-8 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Activity Details</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p><strong>Category:</strong> {category}</p>
                      <p><strong>Date:</strong> {date}</p>
                      <p><strong>Type:</strong> Personal Interest & Hobby</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}