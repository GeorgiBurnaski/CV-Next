import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <header className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in opacity-0 animation-delay-100">
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
                  <i className="fas fa-phone text-xl text-blue-500"></i>
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
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in opacity-0 animation-delay-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"></div>
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              Specialized in React, Node.js, and modern JavaScript frameworks. Love creating user-friendly 
              interfaces and robust backend systems.
            </p>
          </section>

          {/* Skills and Languages Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills Section */}
            <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in opacity-0 animation-delay-500">
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
            <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in opacity-0 animation-delay-700">
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
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in opacity-0 animation-delay-900">
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

          {/* Education Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 animate-fade-in opacity-0 animation-delay-1100">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg"></div>
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">University of Technology</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2020</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}            