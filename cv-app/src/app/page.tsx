import Image from "next/image";
import EducationEntry from "@/components/EducationEntry";

export default function Home() {
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
          {/* About Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"></div>
              About Me
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-user text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Hi! I'm Georgi Burnaski, a dedicated Full Stack Developer with a strong background in scientific research and mathematics.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-birthday-cake text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Born on 6th of June 1996, in Sofia, Bulgaria .</span>
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
                <span>Family-oriented and values strong relationships.</span>
              </li>
            </ul>
          </section>
          
          {/* Education Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg"></div>
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

          {/* Skills and Languages Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills Section */}
            <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                Skills
              </h3>
              <div className="space-y-3">
                {[
                  "React/Next.js",
                  "TypeScript", 
                  "Node.js",
                  "Python",
                  "Tailwind CSS",
                  "JavaScript"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg"></div>
                Languages
              </h3>
              <div className="space-y-3">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Bulgarian", level: "Native" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.lang}</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>


          {/* Experience Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg"></div>
              Experience
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Senior Full Stack Developer",
                  company: "Tech Solutions Inc.",
                  period: "2022 - Present",
                  description: "Lead development of microservices architecture, mentored junior developers, and improved application performance by 40%."
                },
                {
                  title: "Frontend Developer",
                  company: "Digital Agency Co.",
                  period: "2020 - 2022",
                  description: "Developed responsive web applications using React and TypeScript, collaborated with design team to implement pixel-perfect UIs."
                }
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}            