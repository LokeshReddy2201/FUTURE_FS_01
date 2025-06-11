import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, ExternalLink, Calendar, MapPin, Award, Code, Database, Server, Globe, GraduationCap, Menu, X, Home, User, FileText, Briefcase, Book, Contact } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Contact },
  ];

  // Animated background particles component
  const AnimatedParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  // Floating geometric shapes
  const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200 rounded-full animate-spin opacity-10" style={{ animationDuration: '20s' }} />
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg animate-bounce opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-green-200 transform rotate-45 animate-pulse opacity-15" />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full animate-ping opacity-10" style={{ animationDuration: '3s' }} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Global animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 animate-gradient-shift pointer-events-none" />
      
      {/* Fixed Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white z-50 transform transition-transform duration-300 lg:translate-x-0 -translate-x-full lg:block shadow-2xl border-r border-gray-700">
        <div className="p-8 relative">
          {/* Sidebar background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
          
          {/* Profile Section */}
          <div className="text-center mb-8 relative z-10">
            <div className="relative w-32 h-32 mx-auto mb-4 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-2 rounded-full bg-white"></div>
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/f2c6e985-8559-4402-b060-716b670040b0.png"
                  alt="Lokeshwar Reddy Guvvla"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating particles around profile */}
              <div className="absolute -inset-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"
                    style={{
                      left: `${20 + Math.cos(i * Math.PI / 4) * 40}%`,
                      top: `${20 + Math.sin(i * Math.PI / 4) * 40}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lokeshwar Reddy</h2>
            <p className="text-gray-300 text-sm animate-pulse">Blockchain Developer</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="mailto:lokeshwarreddyguvvla@gmail.com" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center hover:from-gray-500 hover:to-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="space-y-2 relative z-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 w-10 h-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 z-40 backdrop-blur-md">
          <div className="pt-20 px-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-72 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Dynamic background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-pink-100/30 animate-gradient-shift" />
          <AnimatedParticles />
          <FloatingShapes />
          
          {/* Animated mesh background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform skew-y-6 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-l from-pink-500/20 to-cyan-500/20 transform -skew-y-6 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="text-center max-w-4xl px-6 relative z-20">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-800">I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-text">
                  Lokeshwar Reddy
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Computer Science Engineer • Blockchain Technology Specialist
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Passionate about building secure, scalable, and decentralized applications. 
              Confident, adaptable, and eager to contribute technical insight and optimize system architectures.
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg hover:shadow-xl animate-bounce"
              style={{ animationDelay: '0.6s' }}
            >
              Learn More About Me
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50" />
          <FloatingShapes />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Blockchain Technology Specialist</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A passionate Computer Science Engineer specializing in Blockchain Technology. 
                  Skilled in building secure, scalable, and decentralized applications. 
                  Confident, adaptable, and eager to contribute technical insight and optimize system architectures.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personal Info:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Email:</strong> lokeshwarreddyguvvla@gmail.com</li>
                      <li><strong>Phone:</strong> +91 91827 66007</li>
                      <li><strong>Location:</strong> Chennai, India</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Languages:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Telugu:</strong> Native</li>
                      <li><strong>English:</strong> Fluent</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-gray-600">Years of Study</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-gray-600">Major Projects</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7.0</div>
                  <div className="text-gray-600">CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-cyan-50/30" />
          <AnimatedParticles />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Core Java</span>
                    <span className="text-blue-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">JavaScript</span>
                    <span className="text-blue-600 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">React.js</span>
                    <span className="text-green-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">HTML5/CSS3</span>
                    <span className="text-green-600 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <Server className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Node.js</span>
                    <span className="text-purple-600 font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Express.js</span>
                    <span className="text-purple-600 font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Database</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">MySQL</span>
                    <span className="text-orange-600 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full w-[80%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">SQL</span>
                    <span className="text-orange-600 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Tools & Others</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">GitHub</span>
                      <span className="text-red-600 font-semibold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Stripe API</span>
                      <span className="text-red-600 font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-purple-50/30" />
          <FloatingShapes />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Attendance Management System</h3>
                  <p className="text-gray-600 mb-4">Built a QR-code based system to automate attendance with real-time monitoring and admin dashboard</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React.js</span>
                  </div>
                  
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>QR-code based attendance automation</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Real-time monitoring and admin dashboard</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Improved time tracking and accuracy</li>
                  </ul>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <Server className="w-16 h-16 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Food Ordering Website</h3>
                  <p className="text-gray-600 mb-4">Full-stack food ordering platform with secure Stripe payment integration</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Express.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Stripe API</span>
                  </div>
                  
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Full-stack food ordering platform</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Secure payment with Stripe integration</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Real-time cart and backend order management</li>
                  </ul>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Strengths */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/20 to-blue-50/30" />
          <AnimatedParticles />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Certifications */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
                    <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Full Stack Development</h3>
                      <p className="text-gray-600">AlgoXFusion</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
                    <Award className="w-12 h-12 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Advanced Java</h3>
                      <p className="text-gray-600">Stellar Academy</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
                    <Award className="w-12 h-12 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Cloud Computing</h3>
                      <p className="text-gray-600">NPTEL (IIT Kanpur)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Strengths</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem Solving & Analytical Thinking</h3>
                    <p className="text-gray-600">Strong ability to break down complex problems and find efficient solutions</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Time Management</h3>
                    <p className="text-gray-600">Excellent at prioritizing tasks and meeting deadlines consistently</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Self-Motivated & Fast Learner</h3>
                    <p className="text-gray-600">Quick to adapt to new technologies and continuously improve skills</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Confident Communicator</h3>
                    <p className="text-gray-600">Effective at presenting ideas and collaborating with team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 to-blue-50/30" />
          <FloatingShapes />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-8 shadow-sm flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">B.Tech – Blockchain Technology</h3>
                      <span className="text-blue-600 font-semibold">2022–2026</span>
                    </div>
                    <p className="text-gray-600 mb-3">Sathyabama Institute of Science and Technology, Chennai</p>
                    <p className="text-gray-500 mb-4">CGPA: 7.0</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Smart Contracts</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cryptography</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Consensus Algorithms</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="relative z-10 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-8 shadow-sm flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">12th Grade</h3>
                      <span className="text-green-600 font-semibold">2022</span>
                    </div>
                    <p className="text-gray-600 mb-3">Sri Chaitanya Junior College</p>
                    <p className="text-gray-500">Percentage: 77.8%</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-start">
                  <div className="relative z-10 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-8 shadow-sm flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">10th Grade</h3>
                      <span className="text-orange-600 font-semibold">2020</span>
                    </div>
                    <p className="text-gray-600 mb-3">Sri Chaitanya E.M High School</p>
                    <p className="text-gray-500">CGPA: 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50" />
          <AnimatedParticles />
          
          <div className="container mx-auto max-w-6xl text-white relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300">Ready to bring your ideas to life with cutting-edge technology</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-300">lokeshwarreddyguvvla@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-300">+91 91827 66007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-300">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 text-white"
                  />
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 text-white resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white border-t border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <p className="text-gray-300">&copy; 2024 Lokeshwar Reddy Guvvla. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-text {
          background-size: 400% 400%;
          animation: gradient-text 4s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Index;
