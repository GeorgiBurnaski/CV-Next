"use client";

import Image from "next/image";
import EducationEntry from "@/components/EducationEntry";
import ExperienceEntry from "@/components/ExperienceEntry";
import ActivityEntry from "@/components/ActivityEntry";
import ProjectEntry from "@/components/ProjectEntry";
import { useState } from "react";

export default function Home() {
  const [expandedActivities, setExpandedActivities] = useState(false);

  const toggleActivities = () => {
    setExpandedActivities(!expandedActivities);
  };
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
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-2">
                  <i className="fas fa-envelope text-xl text-green-500"></i>
                  gvburnaski@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-phone text-xl text-blue-500 dark:text-blue-400"></i>
                  +359 88 857 4582
                </span>
                <a href="https://www.linkedin.com/in/georgi-burnaski-67598b22b/" className="width-fit height-fit hover:background-purple-100 rounded-lg px-2 py-1 hover:shadow-md transition">
                  <span className="flex items-center gap-2">
                    <i className="fab fa-linkedin text-xl text-purple-600"></i>
                    LinkedIn
                  </span>
                </a>
                <a href="https://github.com/GeorgiBurnaski" className="width-fit height-fit hover:background-purple-100 rounded-lg px-2 py-1 hover:shadow-md transition">
                <span className="flex items-center gap-2">
                  <i className="fab fa-github text-xl text-gray-800 dark:text-gray-200"></i>
                  GitHub
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
                <span>Hi! I'm Georgi Burnaski, a dedicated Full Stack Developer with a strong background in scientific research and mathematics.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-birthday-cake text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Born on 6th of June 1996, in Sofia, Bulgaria. Currently, 29 years old.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Currently based in Sofia, Bulgaria with an address:<address>Mladost 1A, #513, ent. 1, ap. 18, post code: 1784</address></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-code text-purple-500 mt-1 flex-shrink-0"></i>
                <span>I have experience in building web applications using modern technologies like 
                  <i className="fab fa-react text-blue-500 mx-1"></i>React, 
                  <i className="fas fa-bolt text-gray-700 dark:text-white mx-1"></i>Next.js, 
                  <i className="fab fa-js-square text-blue-600 mx-1"></i>TypeScript, and 
                  <i className="fab fa-python text-yellow-500 mx-1"></i>Python. As well as incorporating other technologies like 
                  <i className="fab fa-git-alt text-orange-500 mx-1"></i>Git and 
                  <i className="fab fa-docker text-blue-400 mx-1"></i>Docker. With some experience in other programming languages such as 
                  <i className="fab fa-php text-purple-600 mx-1"></i>PHP and 
                  <i className="fas fa-database text-gray-600 mx-1"></i>SQL.</span>
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
                <i className="fas fa-music text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Music lover and amateur guitarist.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gamepad text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Gamer with a passion for immersive storytelling and gameplay mechanics.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-heart text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Family-oriented father of two.</span>
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
                gpa="5.50/6.00"
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
                gpa="57.22/100 (2:2 Honours)"
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
                degree="High School Diploma"
                university="National High School of Mathematics and Science"
                faculty="Chemistry"
                period="2011 - 2015"
                description="High School Diploma in Natural Sciences. Focused on Chemistry, Biology, and Mathematics."
                gpa="5.50/6.00"
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
                degree="Primary Education Certificate"
                university="107th Primary School 'Han Krum'"
                faculty="Mathematics"
                period="2005 - 2011"
                description="Focused on more intensive mathematical training."
                gpa="5.50/6.00"
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
                  "Dean's List for academic excellence",
                  "Research project on predictive modeling",
                  "Thesis on machine learning applications in data science"
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
                title="Senior Full Stack Developer"
                jobTitle="Lead Developer"
                company="Tech Solutions Inc."
                period="2022 - Present"
                description="Leading a team of developers in creating scalable web applications and microservices architecture. Focus on performance optimization and mentoring junior developers."
                responsibilities={[
                  "Lead development of microservices architecture",
                  "Mentor junior developers and conduct code reviews",
                  "Optimize application performance and scalability",
                  "Collaborate with product team on feature planning",
                  "Implement CI/CD pipelines and deployment strategies"
                ]}
                technologies={[
                  "React.js",
                  "Node.js",
                  "TypeScript",
                  "Docker",
                  "Kubernetes",
                  "PostgreSQL",
                  "Redis",
                  "AWS"
                ]}
                achievements={[
                  "Improved application performance by 40%",
                  "Successfully led migration to microservices",
                  "Reduced deployment time by 60%",
                  "Mentored 3 junior developers to mid-level"
                ]}
                certificateUrl="/senior-dev-certificate.pdf"
              />
              
              <ExperienceEntry
                title="Frontend Developer"
                jobTitle="UI/UX Developer"
                company="Digital Agency Co."
                period="2020 - 2022"
                description="Developed responsive web applications and collaborated closely with design teams to create pixel-perfect user interfaces."
                responsibilities={[
                  "Develop responsive web applications using React",
                  "Collaborate with design team for UI implementation",
                  "Optimize frontend performance and accessibility",
                  "Maintain and update existing client projects",
                  "Participate in client meetings and project planning"
                ]}
                technologies={[
                  "React.js",
                  "TypeScript",
                  "SASS/SCSS",
                  "Webpack",
                  "Jest",
                  "Figma",
                  "Git"
                ]}
                achievements={[
                  "Delivered 15+ client projects on time",
                  "Improved website loading speed by 35%",
                  "Implemented accessibility standards (WCAG 2.1)",
                  "Received client satisfaction rating of 4.8/5"
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
                  lang: "SQL", 
                  level: "Advanced", 
                  icon: "fas fa-database",
                  color: "gray",
                  description: "Database design, complex queries, optimization"
                },
                { 
                  lang: "React", 
                  level: "Advanced", 
                  icon: "fab fa-react",
                  color: "cyan",
                  description: "Modern React, hooks, state management"
                },
                { 
                  lang: "Node.js", 
                  level: "Advanced", 
                  icon: "fab fa-node-js",
                  color: "green",
                  description: "Backend development, APIs, microservices"
                },
                { 
                  lang: "JavaScript", 
                  level: "Intermediate", 
                  icon: "fab fa-js-square",
                  color: "yellow",
                  description: "Modern frameworks like React, Node.js"
                },
                { 
                  lang: "TypeScript", 
                  level: "Intermediate", 
                  icon: "fab fa-js-square",
                  color: "blue",
                  description: "Type-safe development, enterprise applications"
                },
                { 
                  lang: "C#", 
                  level: "Intermediate", 
                  icon: "fas fa-code",
                  color: "indigo",
                  description: ".NET framework, desktop and web applications"
                },
                { 
                  lang: "C++", 
                  level: "Basic", 
                  icon: "fas fa-code",
                  color: "red",
                  description: "Object-oriented programming, basic algorithms"
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
          {/* Skills Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Coding-Oriented Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <i className="fas fa-code text-blue-500"></i>
                  Coding & Development
                </h4>
                {[
                  "React.js/Next.js",
                  "TypeScript/JavaScript", 
                  "Python/Django",
                  "Node.js/Express",
                  "HTML5/CSS3/SCSS",
                  "PostgreSQL/MongoDB",
                  "REST APIs/GraphQL",
                  "Docker/Kubernetes",
                  "Git/GitHub",
                  "AWS/Cloud Services"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                    <i className="fas fa-laptop-code text-blue-500 text-sm"></i>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Mathematics-Oriented Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <i className="fas fa-calculator text-purple-500"></i>
                  Mathematics & Analytics
                </h4>
                {[
                  "Statistical Analysis",
                  "Linear Algebra",
                  "Probability Theory",
                  "Mathematical Modeling",
                  "Optimization Methods",
                  "Machine Learning",
                  "Data Mining",
                  "Predictive Modeling",
                  "R/MATLAB",
                  "NumPy/Pandas"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                    <i className="fas fa-chart-line text-purple-500 text-sm"></i>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Science-Oriented Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <i className="fas fa-flask text-green-500"></i>
                  Science & Research
                </h4>
                {[
                  "Data Science",
                  "Scientific Research",
                  "Experimental Design",
                  "Chemistry Knowledge",
                  "Biology Fundamentals",
                  "Research Methodology",
                  "Scientific Writing",
                  "Laboratory Techniques",
                  "Hypothesis Testing",
                  "Academic Publishing"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                    <i className="fas fa-microscope text-green-500 text-sm"></i>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
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
                githubUrl="#"
                liveUrl="#"
              />
              
              <ProjectEntry
                title="Data Analysis Dashboard"
                description="Interactive dashboard for visualizing complex datasets with real-time charts and statistical insights."
                technologies={["Python", "Pandas", "Plotly", "Streamlit"]}
                status="In Progress"
                icon="fas fa-chart-bar"
                color="purple"
                features={[
                  "Real-time data visualization",
                  "Interactive filtering and sorting",
                  "Statistical analysis tools",
                  "Export functionality for reports"
                ]}
                challenges={[
                  "Handling large datasets efficiently",
                  "Creating intuitive user interfaces for complex data",
                  "Implementing real-time updates"
                ]}
                outcomes={[
                  "Improved data-driven decision making",
                  "Reduced analysis time by 60%",
                  "Enhanced data accessibility for stakeholders"
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
              ].map((hobby, index) => (
                <div key={index} className={`p-4 ${hobby.bg} ${hobby.hover} rounded-lg transition-all duration-300 hover:shadow-md`}>
                  <div className="text-center">
                    <i className={`${hobby.icon} ${hobby.color} text-3xl mb-3`}></i>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{hobby.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Timeline Dropdown */}
            <div>
              <button 
                onClick={toggleActivities}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-calendar-alt text-indigo-500 text-xl"></i>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activities</h4>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium">
                    8 activities
                  </span>
                </div>
                <i className={`fas ${expandedActivities ? 'fa-chevron-up' : 'fa-chevron-down'} text-indigo-500 transition-transform duration-300 ${expandedActivities ? 'rotate-180' : 'rotate-0'}`}></i>
              </button>

              {/* Dropdown Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedActivities ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ActivityEntry
                    date="October 2025"
                    title="Mountain Trail Adventure"
                    category="Hiking"
                    color="green"
                    description="Explored the scenic mountain trails during autumn season"
                    image="/hobbies/hiking1.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="September 2025"
                    title="Garden Harvest Season"
                    category="Gardening"
                    color="orange"
                    description="Harvesting homegrown vegetables and planning next season's garden"
                    image="/hobbies/gardening1.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="August 2025"
                    title="European Adventure"
                    category="Travelling"
                    color="purple"
                    description="Explored historic cities and cultural landmarks across Europe"
                    image="/hobbies/travel1.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="July 2025"
                    title="Gaming Setup Upgrade"
                    category="Gaming"
                    color="blue"
                    description="Enhanced gaming setup for better strategy gaming experience"
                    image="/hobbies/gaming1.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="June 2025"
                    title="Peak Summit Achievement"
                    category="Hiking"
                    color="green"
                    description="Successfully reached the summit of a challenging peak"
                    image="/hobbies/hiking2.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="May 2025"
                    title="Spring Garden Setup"
                    category="Gardening"
                    color="orange"
                    description="Planted new vegetables and flowers for the growing season"
                    image="/hobbies/gardening2.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="April 2025"
                    title="Coastal Road Trip"
                    category="Travelling"
                    color="purple"
                    description="Scenic coastal drive discovering hidden beaches and local cuisine"
                    image="/hobbies/travel2.jpg"
                    hasImage={false}
                  />
                  
                  <ActivityEntry
                    date="March 2025"
                    title="Strategy Gaming Tournament"
                    category="Gaming"
                    color="blue"
                    description="Participated in local strategy gaming competition"
                    image="/hobbies/gaming2.jpg"
                    hasImage={false}
                  />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}            