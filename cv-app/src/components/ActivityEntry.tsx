"use client";

import Image from "next/image";

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
    <div className={`p-4 rounded-lg border-l-4 ${getColorClasses("bg")} hover:shadow-md transition-all duration-300`}>
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

      {/* Instructions for adding images */}
      {!hasImage && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <i className="fas fa-info-circle text-xs mr-1"></i>
            To add image: Place photo at <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{image}</code> and set hasImage: true
          </p>
        </div>
      )}
    </div>
  );
}