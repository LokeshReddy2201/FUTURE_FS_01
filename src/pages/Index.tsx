
import React from 'react';
import { Mail, Phone, Github, ExternalLink, Calendar, MapPin, Award, Code, Database, Server, Globe, GraduationCap } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Lokeshwar Reddy</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-gray-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Lokeshwar Reddy Guvvla</h1>
            <p className="text-xl text-gray-600 mb-6">Computer Science Engineer • Blockchain Technology Specialist</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about building secure, scalable, and decentralized applications. 
              Confident, adaptable, and eager to contribute technical insight and optimize system architectures.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🧑‍💻 About Me</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              A passionate Computer Science Engineer specializing in Blockchain Technology. 
              Skilled in building secure, scalable, and decentralized applications. 
              Confident, adaptable, and eager to contribute technical insight and optimize system architectures.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4+</div>
                <div className="text-sm text-gray-600">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">2</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">3</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">7.0</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🛠️ Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Core Java</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">JavaScript</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Frontend</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HTML5</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">CSS3</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">React.js</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Backend</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Express.js</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Database</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">SQL</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Tools</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">GitHub</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">VS Code</span>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">Stripe API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📁 Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Attendance Management System</h3>
                <p className="text-gray-600 mb-4">Built a QR-code based system to automate attendance with real-time monitoring and admin dashboard</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React.js</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• QR-code based attendance automation</li>
                  <li>• Real-time monitoring and admin dashboard</li>
                  <li>• Improved time tracking and accuracy</li>
                </ul>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Ordering Website</h3>
                <p className="text-gray-600 mb-4">Full-stack food ordering platform with secure Stripe payment integration</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">React.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Express.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Stripe API</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full-stack food ordering platform</li>
                  <li>• Secure payment with Stripe integration</li>
                  <li>• Real-time cart and backend order management</li>
                </ul>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📜 Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Stack Development</h3>
              <p className="text-gray-600">AlgoXFusion</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Java</h3>
              <p className="text-gray-600">Stellar Academy</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud Computing</h3>
              <p className="text-gray-600">NPTEL (IIT Kanpur)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎓 Education</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-8 h-8 text-gray-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">B.Tech – Blockchain Technology</h3>
                  <p className="text-gray-600 mb-2">Sathyabama Institute of Science and Technology, Chennai</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2022–2026
                    </span>
                    <span>CGPA: 7.0</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Smart Contracts</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Cryptography</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Consensus Algorithms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-8 h-8 text-gray-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">12th Grade</h3>
                  <p className="text-gray-600 mb-2">Sri Chaitanya Junior College</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2022
                    </span>
                    <span>77.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-8 h-8 text-gray-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">10th Grade</h3>
                  <p className="text-gray-600 mb-2">Sri Chaitanya E.M High School</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2020
                    </span>
                    <span>CGPA: 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🌟 Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem Solving & Analytical Thinking</h3>
              <p className="text-gray-600">Strong ability to break down complex problems and find efficient solutions</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Time Management</h3>
              <p className="text-gray-600">Excellent at prioritizing tasks and meeting deadlines consistently</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Self-Motivated & Fast Learner</h3>
              <p className="text-gray-600">Quick to adapt to new technologies and continuously improve skills</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confident Communicator</h3>
              <p className="text-gray-600">Effective at presenting ideas and collaborating with team members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📬 Contact</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">lokeshwarreddyguvvla@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">+91 91827 66007</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Chennai, India</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Telugu</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-4">Ready to bring your ideas to life with cutting-edge technology</p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-300">&copy; 2024 Lokeshwar Reddy Guvvla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
