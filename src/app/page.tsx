"use client";

import EducationEntry from "@/components/EducationEntry";
import ExperienceEntry from "@/components/ExperienceEntry";
import ActivityEntry from "@/components/ActivityEntry";
import ProjectEntry from "@/components/ProjectEntry";
import { useState } from "react";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setSelectedFilters(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Activity data for easier filtering
  const activities: Array<{
    date: string;
    title: string;
    category: string;
    color: "green" | "orange" | "purple" | "blue";
    description: string;
    image: string;
    hasImage: boolean;
  }> = [
    {
      date: "21 October 2025",
      title: "Malyovitsa Trail Adventure",
      category: "Hiking",
      color: "green",
      description: "Explored the scenic mountain trails near Malyovitsa, during autumn season",
      image: "/hobbies/hiking1.jpg",
      hasImage: true
    },
    {
      date: "September 2025",
      title: "Garden Harvest Season",
      category: "Gardening",
      color: "orange",
      description: "Harvesting homegrown vegetables and planning next season's garden",
      image: "/hobbies/gardening1.jpg",
      hasImage: false
    },
    {
      date: "August 2023",
      title: "Trip to Shiroka Polyana",
      category: "Travelling",
      color: "purple",
      description: "Camped at one of my favorite spots in Bulgaria for two weeks with my family.",
      image: "/hobbies/travel1.jpg",
      hasImage: true
    },
    {
      date: "July 2025",
      title: "Gaming Setup Upgrade",
      category: "Gaming",
      color: "blue",
      description: "Enhanced gaming setup for better strategy gaming experience",
      image: "/hobbies/gaming1.jpg",
      hasImage: false
    },
    {
      date: "June 2025",
      title: "Peak Summit Achievement",
      category: "Hiking",
      color: "green",
      description: "Successfully reached the summit of a challenging peak",
      image: "/hobbies/hiking2.jpg",
      hasImage: false
    },
    {
      date: "May 2025",
      title: "Spring Garden Setup",
      category: "Gardening",
      color: "orange",
      description: "Planted new vegetables and flowers for the growing season",
      image: "/hobbies/gardening2.jpg",
      hasImage: false
    },
    {
      date: "April 2025",
      title: "Coastal Road Trip",
      category: "Travelling",
      color: "purple",
      description: "Scenic coastal drive discovering hidden beaches and local cuisine",
      image: "/hobbies/travel2.jpg",
      hasImage: false
    },
    {
      date: "March 2025",
      title: "Strategy Gaming Tournament",
      category: "Gaming",
      color: "blue",
      description: "Participated in local strategy gaming competition",
      image: "/hobbies/gaming2.jpg",
      hasImage: false
    }
  ];

  // Filter activities based on selected categories - show none when no filters selected
  const filteredActivities = selectedFilters.length === 0 
    ? [] 
    : activities.filter(activity => selectedFilters.includes(activity.category));
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <header className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="pw-42 h-42 m-4 md:w-48 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-lg">
              GB
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-6xl md:text-6xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Georgi Veselinov Burnaski
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4 flex flex-wrap md:justify-start items-center gap-4">
                <span className="flex items-center gap-2">
                  <i className="fas fa-code text-2xl"></i>
                  Developer
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-flask text-2xl"></i>
                  Scientist
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-calculator text-2xl"></i>
                  Mathematician
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-chart-simple text-2xl"></i>
                  Statistician
                </span>
              </h2>
              
              {/* Personal Interests */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-file text-lg"></i>
                  Writer
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-chart-line text-lg"></i>
                  Analyst
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-lightbulb text-lg"></i>
                  Innovator
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-gamepad text-lg"></i>
                  Strategist
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-globe-americas text-lg"></i>
                  Traveller
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-hiking text-lg"></i>
                  Hiker
                </span>
                <span className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg md:text-lg font-semibold">
                  <i className="fas fa-seedling text-lg"></i>
                  Producer
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-2">
                  <i className="fas fa-envelope text-xl text-green-500"></i>
                  gvburnaski@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-phone text-xl text-blue-500 dark:text-blue-400"></i>
                  +359 88 857 4582
                </span>
                <a href="https://github.com/GeorgiBurnaski" className="width-fit height-fit hover:background-purple-100 rounded-lg px-2 py-1 hover:shadow-md transition">
                <span className="flex items-center gap-2">
                  <i className="fab fa-github text-xl text-gray-800 dark:text-gray-200"></i>
                  GitHub
                </span>
                </a>
                <a href="https://www.facebook.com/georgi.burnaski/" className="width-fit height-fit hover:background-purple-100 rounded-lg px-2 py-1 hover:shadow-md transition">
                  <span className="flex items-center gap-2">
                    <i className="fab fa-facebook text-xl text-blue-600"></i>
                    Facebook
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/georgi-burnaski-67598b22b/" className="width-fit height-fit hover:background-purple-100 rounded-lg px-2 py-1 hover:shadow-md transition">
                  <span className="flex items-center gap-2">
                    <i className="fab fa-linkedin text-xl text-purple-600"></i>
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
           {/* Languages Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  lang: "Bulgarian", 
                  level: "Native", 
                  flag: "🇧🇬",
                  description: "Mother tongue, full professional proficiency"
                },
                { 
                  lang: "English", 
                  level: "Fluent", 
                  flag: "🇬🇧",
                  description: "Professional working proficiency, technical communication"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-lg border border-teal-200 dark:border-teal-700 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.lang}</span>
                    </div>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              
              About Me
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-user text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Hi! I&apos;m Georgi Burnaski, a dedicated Developer with a strong background in Natural Sciences and Mathematics.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-birthday-cake text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Born on 6th of June 1996, in Sofia, Bulgaria. Currently, 29 years old.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Currently based in Sofia, Bulgaria, Mladost 1A</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-code text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Built a few projects in <i className="fab fa-python text-blue-500 mx-1"></i> Python, some of which are showcased in the portfolio. These include some data analytic scripts as well as my dissertation in applied mathematics.<br />
                I have experience in building web applications using <i className="fab fa-php text-purple-500 mx-1"/> PHP and <i className="fas fa-database text-gray-600 dark:text-gray-100 mx-1"></i> SQL. Such as an actuarial calculator for insurance purposes, as well as other small internal tools for data input optimisation and automation.<br />
                Experience with <i className="fab fa-react text-blue-500 mx-1"></i> React, <i className="fas fa-bolt text-gray-700 dark:text-white mx-1"></i> Next.js, <i className="fab fa-js-square text-blue-600 mx-1"></i> TypeScript, and other modern web development technologies. Built this very website as well as other small web applications. And attempted to recreate my employer&apos;s PHP-based website from scratch using these technologies.<br />
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-paint-brush text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Creative problem solver with a passion for design and user experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-calculator text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Background in scientific research and mathematics, bringing analytical skills to software development.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-flask text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Chemistry, Biology, Mathematics and Data Science enthusiast, with corresponding degrees.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-hiking text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Enjoys hiking and outdoor activities.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-car text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Passionate traveller, who explores nature almost every weekend, discovering new places and immersing in natural environments.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-seedling text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Dedicated gardener focused on self-sufficiency and sustainable living, growing organic vegetables and bio-products for the family.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gamepad text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Gamer with a passion for complex strategy and gameplay mechanics.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-heart text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Family-oriented, married, father of two.</span>
              </li>
            </ul>
          </section>
         
          {/* Education Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          
              Education
            </h3>
            <div className="space-y-4">
              <EducationEntry
                degree="Master of Science (M.Sc.) in Applied Mathematics (Data Science)"
                degreeName="Probability, Acuarial mathematics and Statistics for non-mathematicians"
                university="University of Sofia"
                faculty="Faculty of Mathematics and Informatics"
                period="2019 - 2025"
                description="Specialized in Data Science with focus on machine learning, statistical analysis, and mathematical modeling. The program combines theoretical foundations with practical applications in data analysis and predictive modeling."
                gpa="Very good (4.50/6.00)"
                coursework={[
                  "Machine Learning",
                  "Statistical Analysis",
                  "Data Mining",
                  "Mathematical Modeling",
                  "Probability Theory",
                  "Linear Algebra",
                  "Optimization Methods",
                  "Database Systems"
                ]}
                achievements={[
                  "Dean's List for academic excellence",
                  "Research project on predictive modeling",
                  "Thesis on machine learning applications in data science"
                ]}
                diplomaImageUrl="/diploma.jpg"
              />
            </div>
            <span className="block h-6"></span>
            <div className="space-y-4">
              <EducationEntry
                degree="Bachelor of Science (B.Sc.) in Biology (Biochemistry)"
                degreeName="BSc (Hons) Biochemistry"
                university="University of Bath"
                faculty="Faculty of Biology and Biochemistry"
                period="2015 - 2018"
                description="Focused on the intersection of biology and data science."
                gpa="Good (57.22/100 (2:2 Honours))"
                coursework={[
                  "Biochemistry 1 & 2",
                  "Cell & Molecular Biology",
                  "Genetics",
                  "Protein Structure and Function",
                  "Plant Biology and Biotechnology",
                  "Molecular and Cellular Neuroscience",
                  "Cellular Biochemistry and Metabolism",
                  "Entrepreneurial Biotechnology",
                  "Bioinformatics and Biochemical Data Analysis"
                ]}
                achievements={[
                  "Good academic performance throughout all years, reguardless of the language barrier.",
                  "Great performance in laboratory work and research projects.",
                  "Outstanding thesis and lab work on biochemistry, more specifically plant biology."
                ]}
                diplomaImageUrl="/diploma.jpg"
              />
            </div>
            <span className="block h-6"></span>
            <div className="space-y-4">
              <EducationEntry
                degree="High School Diploma (Chemistry Focus)"
                university="National High School of Mathematics and Science"
                faculty="Chemistry"
                period="2011 - 2015"
                description="High School Diploma in Natural Sciences. Focused on Chemistry, Biology, and Mathematics."
                gpa="Excellent (>5.50/6.00)"
                coursework={[
                  "Mathematics",
                  "Bulgarian Language and Literature",
                  "Biology",
                  "Chemistry",
                  "Physics",
                  "Humanitarian Sciences",
                  "English Language",
                  "Physical Education"
                ]}
                achievements={[
                  "Great performance in national chemistry competitions, many regional and a national participation, where I finished second.",
                  "Went on European Science Olympiad (EUSO) 2013 as part of the Bulgarian team.",
                  "Many science fairs participations and awards. Mostly in Chemistry."
                ]}
                diplomaImageUrl="/diploma.jpg"
              />
            </div>
            <span className="block h-6"></span>
            <div className="space-y-4">
              <EducationEntry
                degree="Primary Education Certificate (Mathematics Focus)"
                university="107th Primary School 'Han Krum'"
                faculty="Mathematics"
                period="2005 - 2011"
                description="Focused on more intensive mathematical training."
                gpa="Excellent (>5.50/6.00)"
                coursework={[
                  "Mathematics",
                  "Bulgarian Language and Literature",
                  "Natural Sciences",
                  "Humanitarian Sciences",
                  "Physical Education",
                  "Music",
                  "Arts",
                ]}
                achievements={[
                  "Entered advanced mathematics classes due to high performance on mathematics competitions.",
                  "Excellent academic performance throughout all years."
                ]}
                diplomaImageUrl="/diploma.jpg"
              />
            </div>
          </section>




          {/* Experience Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-4">
              <ExperienceEntry
                title="Actuarial Trainee"
                jobTitle="System administrator, IT support, and Junior Developer"
                company="Pension Assurance Company 'Saglasie' JSC"
                period="2022 - Present"
                description="As an Actuarial Trainee at Pension Assurance Company 'Saglasie' JSC, I am responsible for supporting the actuarial team in data analysis, model development, and reporting. My role involves working with large datasets, performing statistical analyses, and assisting in the development of actuarial models to support the company's pension products. I also contribute to the automation of data processing tasks and help ensure compliance with regulatory requirements. I was also responsible for system administration and IT support, ensuring the smooth operation of the company's IT infrastructure. Additionally, I have taken on junior developer responsibilities, contributing to the development and maintenance of internal software applications mosty the website and actuarial calculator."
                responsibilities={[
                  "Assist in data collection and analysis for actuarial models",
                  "Support the development and validation of actuarial models",
                  "Prepare reports and presentations for internal and external stakeholders",
                  "Collaborate with cross-functional teams to ensure data accuracy and integrity",
                  "Stay updated on industry trends and regulatory changes affecting actuarial practices",
                  "Provide IT support and system administration for company infrastructure",
                  "Contribute to the development and maintenance of internal software applications"                           
                ]}
                technologies={[
                  "Python",
                  "SQL",
                  "Excel (VBA)",
                  "PHP",
                  "Web development (HTML, CSS, JavaScript)"
                ]}
                achievements={[
                  "Successfully assisted in the development of actuarial models for new pension products",
                  "Improved data processing efficiency through automation",
                  "Received positive feedback from senior actuaries and management",
                  "Played a key role in maintaining IT infrastructure and providing timely support"
                ]}
              />

              <ExperienceEntry
                title="Financial Crime Analyst"
                jobTitle="AML Analyst"
                company="passcon GmbH"
                period="Jan 2022 - Oct 2022"
                description="As an AML Analyst at passcon GmbH, I was responsible for monitoring and analyzing transactions to detect suspicious activities related to money laundering and financial crimes. My role involves conducting thorough investigations, preparing reports, and collaborating with law enforcement agencies to ensure compliance with regulatory requirements."  
                responsibilities={[
                  "Monitor and analyze transactions for suspicious activities",
                  "Conduct thorough investigations into potential financial crimes",
                  "Prepare detailed reports for internal and external stakeholders",
                  "Collaborate with law enforcement agencies as needed"
                ]}
                technologies={[
                  "Internal AML software",
                  "Excel",
                  "SQL databases"
                
                ]}
                achievements={[
                  "Successfully identified and reported multiple suspicious activities",
                  "Maintained high accuracy and attention to detail in investigations",
                  "Received commendations for thoroughness and professionalism",
                  "Contributed to the development of improved monitoring processes"
                  
                ]}
              />
              
              <ExperienceEntry
                title="Writer in E-Journal 'Economic life'"
                jobTitle="Freelance Writer"
                company="Razvitie Corporation"
                period="2018 - Present"
                description={
                  <>
                    I am a freelance writer specializing in modern technology topics. I create well-researched articles that explain complex technological concepts in an accessible manner for a broad audience. My work involves staying up-to-date with the latest trends in technology and translating that knowledge into engaging content. You can find my articles published in the e-journal &apos;Economic life&apos; at{' '}
                    <a 
                      href="https://ikj.bg/?s=%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8+%D0%91%D1%83%D1%80%D0%BD%D0%B0%D1%81%D0%BA%D0%B8" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      ikj.bg
                    </a>
                    , where I cover a range of topics from emerging technologies to practical applications in everyday life.
                  </>
                }
                responsibilities={[
                  "Research and write articles on technology issues",
                  "Collaborate with editors to refine content",
                  "Ensure all content meets high editorial standards",
                  "Stay updated on technology trends and news",
                  "Participate in client meetings and project planning"
                ]}
                technologies={[
                  "WordPress",
                  "Google Docs",
                  "SEO best practices",
                  "Content management systems",
                  "Social media promotion"
                ]}
                achievements={[
                  "Delivered over 50 high-quality articles",
                  "Consistently met tight deadlines",
                  "Received positive feedback from editors",
                  "Built a strong portfolio of published work"
                ]}
              />
            </div>
          </section>
      
      {/* Coding Languages Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  lang: "Python", 
                  level: "Expert", 
                  icon: "fab fa-python",
                  color: "blue",
                  description: "Data science, web development, automation"
                },
                { 
                  lang: "PHP", 
                  level: "Expert", 
                  icon: "fab fa-php",
                  color: "purple",
                  description: "Web development, Laravel framework, server-side scripting"
                },
                { 
                  lang: "R", 
                  level: "Expert", 
                  icon: "fab fa-r-project",
                  color: "emerald",
                  description: "Statistical computing, data analysis, visualization"
                },
                { 
                  lang: "LaTeX", 
                  level: "Expert", 
                  icon: "fas fa-file-code",
                  color: "red",
                  description: "Document preparation, typesetting"
                },
                { 
                  lang: "HTML", 
                  level: "Expert", 
                  icon: "fab fa-html5",
                  color: "orange",
                  description: "Semantic markup, accessibility, modern standards"
                },
                { 
                  lang: "CSS", 
                  level: "Expert", 
                  icon: "fab fa-css3-alt",
                  color: "teal",
                  description: "Advanced styling, animations, responsive design"
                },
                { 
                  lang: "SQL", 
                  level: "Advanced", 
                  icon: "fas fa-database",
                  color: "gray",
                  description: "Database design, complex queries, optimization"
                },
                { 
                  lang: "Next.js", 
                  level: "Advanced", 
                  icon: "fas fa-bolt",
                  color: "cyan",
                  description: "Full-stack React framework, SSR, static generation"
                },
                { 
                  lang: "JavaScript", 
                  level: "Intermediate", 
                  icon: "fab fa-js-square",
                  color: "yellow",
                  description: "Modern frameworks like React, Node.js"
                },
                { 
                  lang: "React", 
                  level: "Intermediate", 
                  icon: "fab fa-react",
                  color: "indigo",
                  description: "Component-based UI library, hooks, state management"
                },
                { 
                  lang: "Node.js", 
                  level: "Basic", 
                  icon: "fab fa-node-js",
                  color: "green",
                  description: "Backend development, APIs, microservices"
                }
              ].map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md ${
                  item.color === 'yellow' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                  item.color === 'blue' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' :
                  item.color === 'cyan' ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' :
                  item.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20' :
                  item.color === 'purple' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' :
                  item.color === 'red' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                  item.color === 'indigo' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' :
                  item.color === 'emerald' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' :
                  item.color === 'orange' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' :
                  item.color === 'teal' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' :
                  'border-gray-500 bg-gray-50 dark:bg-gray-900/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <i className={`${item.icon} text-2xl ${
                        item.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                        item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        item.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        item.color === 'green' ? 'text-green-600 dark:text-green-400' :
                        item.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        item.color === 'red' ? 'text-red-600 dark:text-red-400' :
                        item.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                        item.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                        item.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                        item.color === 'teal' ? 'text-teal-600 dark:text-teal-400' :
                        'text-gray-600 dark:text-gray-400'
                      }`}></i>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.lang}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.level === 'Expert' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' :
                      item.level === 'Advanced' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      item.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                      'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          

          {/* Projects Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProjectEntry
                title="Personal CV Website"
                description="A responsive Next.js application showcasing my professional experience and skills with modern UI/UX design."
                technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                status="Completed"
                icon="fas fa-user"
                color="blue"
                features={[
                  "Responsive design with dark mode support",
                  "Interactive expandable sections",
                  "Modern animations and transitions",
                  "Component-based architecture"
                ]}
                challenges={[
                  "Implementing smooth animations with Tailwind CSS",
                  "Creating reusable component patterns",
                  "Optimizing performance for mobile devices"
                ]}
                outcomes={[
                  "Professional online presence established",
                  "Demonstrated modern web development skills",
                  "Showcased attention to UI/UX design"
                ]}
                githubUrl="https://github.com/GeorgiBurnaski/CV-Next/tree/17487165149ac08f39fce2148b0b1b285746911c/cv-app"
                liveUrl="#"
              />
              
              <ProjectEntry
                title="Actuarial Calculator"
                description="A tool for performing complex actuarial calculations and visualizing the results."
                technologies={["Python", "Pandas", "Plotly", "Streamlit"]}
                status="In Progress"
                icon="fas fa-calculator"
                color="purple"
                features={[
                  "Programmable actuarial calculations",
                  "Data visualization with interactive charts",
                  "User-friendly interface for input parameters",
                  "Exportable reports"
                ]}
                challenges={[
                  "Implementing accurate actuarial formulas",
                  "Designing intuitive user input flows",
                  "Ensuring scalability for large datasets and multiple companies"
                ]}
                outcomes={[
                  "Streamlined actuarial calculations",
                  "Improved data visualization for better insights",
                  "Enhanced user experience for pensioners and actuaries"
                ]}
                githubUrl="#"
              />
              
              <ProjectEntry
                title="E-commerce Platform"
                description="Full-stack e-commerce solution with user authentication, payment processing, and inventory management."
                technologies={["React", "Node.js", "PostgreSQL", "Stripe API"]}
                status="Completed"
                icon="fas fa-shopping-cart"
                color="green"
                features={[
                  "Secure user authentication and authorization",
                  "Payment processing with Stripe integration",
                  "Real-time inventory management",
                  "Admin dashboard for order tracking"
                ]}
                challenges={[
                  "Implementing secure payment processing",
                  "Managing complex state across components",
                  "Ensuring data consistency in transactions"
                ]}
                outcomes={[
                  "Successfully processed 1000+ transactions",
                  "99.9% uptime achieved",
                  "Positive user feedback and ratings"
                ]}
                githubUrl="#"
                liveUrl="#"
              />
              
              <ProjectEntry
                title="Machine Learning Predictor"
                description="ML model for predicting market trends using historical data and advanced algorithms."
                technologies={["Python", "Scikit-learn", "TensorFlow", "Jupyter"]}
                status="Planning"
                icon="fas fa-robot"
                color="orange"
                features={[
                  "Time series analysis and forecasting",
                  "Multiple ML algorithms comparison",
                  "Data preprocessing and feature engineering",
                  "Model performance visualization"
                ]}
                challenges={[
                  "Selecting appropriate algorithms for time series data",
                  "Feature engineering for financial data",
                  "Handling missing and noisy data"
                ]}
                githubUrl="#"
              />
              
            </div>

          </section>

          

          {/* Hobbies & Interests Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hobbies & Interests
            </h3>
            
            {/* Hobby Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  icon: "fas fa-hiking",
                  color: "text-green-500",
                  bg: "bg-green-50 dark:bg-green-900/20",
                  hover: "hover:bg-green-100 dark:hover:bg-green-900/40",
                  title: "Hiking",
                  description: "Mountain trails & nature exploration"
                },
                {
                  icon: "fas fa-seedling",
                  color: "text-orange-500",
                  bg: "bg-orange-50 dark:bg-orange-900/20",
                  hover: "hover:bg-orange-100 dark:hover:bg-orange-900/40",
                  title: "Gardening",
                  description: "Growing plants & sustainable living"
                },
                {
                  icon: "fas fa-car",
                  color: "text-purple-500",
                  bg: "bg-purple-50 dark:bg-purple-900/20",
                  hover: "hover:bg-purple-100 dark:hover:bg-purple-900/40",
                  title: "Travelling",
                  description: "Exploring new places & cultures"
                },
                {
                  icon: "fas fa-gamepad",
                  color: "text-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                  hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40",
                  title: "Gaming",
                  description: "Strategy games & game development"
                }
              ].map((hobby, index) => {
                const isSelected = selectedFilters.includes(hobby.title);
                return (
                  <button 
                    key={index} 
                    onClick={() => toggleFilter(hobby.title)}
                    className={`p-4 rounded-lg transition-all duration-300 hover:shadow-md w-full ${
                      isSelected 
                        ? `${hobby.bg} ring-2 ring-${hobby.color.split('-')[1]}-500 shadow-lg transform scale-105` 
                        : `${hobby.bg} ${hobby.hover}`
                    }`}
                  >
                    <div className="text-center">
                      <i className={`${hobby.icon} ${hobby.color} text-3xl mb-3 ${isSelected ? 'animate-pulse' : ''}`}></i>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{hobby.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{hobby.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Activity Timeline - Always Expanded */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-calendar-alt text-indigo-500 text-xl"></i>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Memorable Moments</h4>
                {selectedFilters.length > 0 && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({filteredActivities.length} of {activities.length} activities)
                  </span>
                )}
              </div>

              {/* Filter Status - Always Visible */}
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedFilters.length > 0 ? 'Filtering by:' : 'Select hobby category to view examples of activities'}
                  </span>
                  {selectedFilters.length > 0 && (
                    <>
                      {selectedFilters.map(filter => (
                        <span key={filter} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded text-xs font-medium">
                          {filter}
                        </span>
                      ))}
                      <button 
                        onClick={() => setSelectedFilters([])}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline ml-2"
                      >
                        Clear all
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Activity Timeline Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity, index) => (
                    <ActivityEntry
                      key={index}
                      date={activity.date}
                      title={activity.title}
                      category={activity.category}
                      color={activity.color}
                      description={activity.description}
                      image={activity.image}
                      hasImage={activity.hasImage}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <i className="fas fa-calendar-alt text-gray-400 text-3xl mb-4"></i>
                    <p className="text-gray-500 dark:text-gray-400">
                      {selectedFilters.length === 0 
                        ? "Select hobby categories above to view related activities." 
                        : "No activities match the selected filters."
                      }
                    </p>
                    {selectedFilters.length > 0 && (
                      <button 
                        onClick={() => setSelectedFilters([])}
                        className="mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

{/* Skills Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-orange-50/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-orange-900/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-left">
                Skills & Expertise
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Coding-Oriented Skills */}
                <div className="space-y-3 group h-full">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-16 flex items-center">
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 w-full">
                      <i className="fas fa-code text-blue-500 w-5"></i>
                      <span className="flex-1">Coding</span>
                    </h4>
                  </div>
                  {[
                    { name: "React.js/Next.js", icon: "fab fa-react" },
                    { name: "TypeScript/JavaScript", icon: "fab fa-js" }, 
                    { name: "Python/Django", icon: "fab fa-python" },
                    { name: "Node.js/Express", icon: "fab fa-node-js" },
                    { name: "HTML5/CSS3/SCSS", icon: "fab fa-html5" },
                    { name: "PostgreSQL/MongoDB", icon: "fas fa-database" },
                    { name: "REST APIs/GraphQL", icon: "fas fa-exchange-alt" },
                    { name: "Docker/Kubernetes", icon: "fab fa-docker" },
                    { name: "Git/GitHub", icon: "fab fa-git-alt" },
                    { name: "PHP/XAMPP", icon: "fab fa-php" }
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-md group/item h-12">
                      <i className={`${skill.icon} text-blue-500 text-lg w-5 flex-shrink-0`}></i>
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Mathematics-Oriented Skills */}
                <div className="space-y-3 group h-full">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-16 flex items-center">
                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2 w-full">
                      <i className="fas fa-calculator text-purple-500 w-5"></i>
                      <span className="flex-1">Mathematics</span>
                    </h4>
                  </div>
                  {[
                    { name: "Statistical Analysis", icon: "fas fa-chart-bar" },
                    { name: "Linear Algebra", icon: "fas fa-square-root-alt" },
                    { name: "Probability Theory", icon: "fas fa-dice" },
                    { name: "Mathematical Modeling", icon: "fas fa-project-diagram" },
                    { name: "Optimization Methods", icon: "fas fa-bullseye" },
                    { name: "Machine Learning", icon: "fas fa-brain" },
                    { name: "Data Mining", icon: "fas fa-gem" },
                    { name: "Predictive Modeling", icon: "fas fa-lightbulb" },
                    { name: "R/MATLAB", icon: "fas fa-chart-line" },
                    { name: "NumPy/Pandas", icon: "fas fa-table" }
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all duration-300 hover:scale-105 hover:shadow-md group/item h-12">
                      <i className={`${skill.icon} text-purple-500 text-lg w-5 flex-shrink-0`}></i>
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Science-Oriented Skills */}
                <div className="space-y-3 group h-full">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-16 flex items-center">
                    <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center gap-2 w-full">
                      <i className="fas fa-flask text-green-500 w-5"></i>
                      <span className="flex-1">Research</span>
                    </h4>
                  </div>
                  {[
                    { name: "Data Science", icon: "fas fa-database" },
                    { name: "Scientific Research", icon: "fas fa-search" },
                    { name: "Experimental Design", icon: "fas fa-vial" },
                    { name: "Advanced Chemistry", icon: "fas fa-atom" },
                    { name: "Advanced Biology", icon: "fas fa-dna" },
                    { name: "Research Methodology", icon: "fas fa-clipboard-list" },
                    { name: "Scientific Writing", icon: "fas fa-pen-fancy" },
                    { name: "Laboratory Techniques", icon: "fas fa-microscope" },
                    { name: "Hypothesis Testing", icon: "fas fa-question-circle" },
                    { name: "Academic Publishing", icon: "fas fa-book-open" }
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-all duration-300 hover:scale-105 hover:shadow-md group/item h-12">
                      <i className={`${skill.icon} text-green-500 text-lg w-5 flex-shrink-0`}></i>
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* People & Communication Skills */}
                <div className="space-y-3 group h-full">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-16 flex items-center">
                    <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 w-full">
                      <i className="fas fa-users text-orange-500 w-5"></i>
                      <span className="flex-1">Communication</span>
                    </h4>
                  </div>
                  {[
                    { name: "Leadership", icon: "fas fa-crown" },
                    { name: "Public Speaking", icon: "fas fa-microphone-alt" },
                    { name: "Outgoing", icon: "fas fa-smile-beam" },
                    { name: "Conflict Resolution", icon: "fas fa-balance-scale" },
                    { name: "Empathic", icon: "fas fa-hands-helping" },
                    { name: "Communicator", icon: "fas fa-comments" },
                    { name: "Supportive", icon: "fas fa-user-friends" },
                    { name: "Presentation Skills", icon: "fas fa-chalkboard" },
                    { name: "Innovative", icon: "fas fa-lightbulb" },
                    { name: "Emotional Intelligence", icon: "fas fa-heart" }
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all duration-300 hover:scale-105 hover:shadow-md group/item h-12">
                      <i className={`${skill.icon} text-orange-500 text-lg w-5 flex-shrink-0`}></i>
                      <span className="text-gray-700 dark:text-gray-300 font-medium flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

);
}     
