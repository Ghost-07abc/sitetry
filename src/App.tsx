import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  
  // Typing animation for hero subtitle
  const fullTypingText = "Websites that dominate. Results that matter. Built for the future.";
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullTypingText.slice(0, i + 1));
      i++;
      if (i === fullTypingText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Animate On Scroll (AOS) setup - optimized for performance
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: 'mobile' });
  }, []);

  // Helper to render heading with 3D shadow on each letter
  const heading = "Websites That\nTruly Drive Results";
  const headingLines = heading.split("\n");

  return (
    <div className="min-h-screen text-white font-['Quicksand'] relative overflow-hidden" style={{
      background:
        'linear-gradient(135deg, #1a102a 0%, #2a1550 50%, #1a102a 100%)',
    }}>
      {/* Hero section background elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Right side geometric cards pattern - only for hero section */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* Website Development card */}
          <div className="absolute top-32 right-32 w-48 h-24 bg-gradient-to-br from-[#5a5a9a]/40 to-[#4a4a8a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform rotate-3 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/80 font-medium">Web Dev</span>
          </div>
          
          {/* Hosting & SSL card */}
          <div className="absolute top-56 right-64 w-40 h-20 bg-gradient-to-br from-[#5a5a9a]/40 to-[#4a4a8a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform -rotate-2 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/80 font-medium">Hosting</span>
          </div>
          
          {/* X symbol card */}
          <div className="absolute top-80 right-48 w-32 h-32 bg-gradient-to-br from-[#6a6aaa]/40 to-[#5a5a9a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform rotate-1 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/60 text-4xl font-light">✕</span>
          </div>
          
          {/* Support card */}
          <div className="absolute top-48 right-16 w-44 h-28 bg-gradient-to-br from-[#5a5a9a]/40 to-[#4a4a8a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform -rotate-1 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/80 font-medium">Support</span>
          </div>
          
          {/* Contact card */}
          <div className="absolute top-72 right-8 w-40 h-24 bg-gradient-to-br from-[#5a5a9a]/40 to-[#4a4a8a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform rotate-2 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/80 font-medium">Contact</span>
          </div>
          
          {/* Additional X symbol */}
          <div className="absolute top-96 right-80 w-28 h-28 bg-gradient-to-br from-[#6a6aaa]/40 to-[#5a5a9a]/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform -rotate-3 shadow-2xl" style={{boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 4px 16px rgba(255,255,255,0.1)'}}>
            <span className="text-white/60 text-3xl font-light">✕</span>
          </div>
        </div>
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a4a8a]/40 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-transparent">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo and status */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm transform rotate-45"></div>
                </div>
              </div>
              <span className="text-2xl font-bold tracking-wide">TechBasic</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Currently available</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="/contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 space-y-4 border-t border-white/20 pt-6">
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Home</a>
              <a href="/contact" className="block text-white/90 hover:text-white transition-colors">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 lg:py-32 flex flex-col items-center px-4 sm:px-8" data-aos="fade-up">
        {/* Unconventional animated logo centerpiece - now absolutely positioned and behind text */}
        <div className="absolute left-1/2 top-0 w-full flex justify-center pointer-events-none z-0" style={{transform: 'translateX(-50%)'}}>
          <img
            src="/logo_main.png"
            alt="TechBasic Logo"
            className="h-32 sm:h-48 md:h-56 w-auto mx-auto drop-shadow-2xl animate-float opacity-80"
            style={{ filter: 'drop-shadow(0 8px 32px rgba(108,76,207,0.4))' }}
          />
        </div>
        <div className="container mx-auto px-0 sm:px-8 relative z-10 pt-24 sm:pt-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight flex flex-col gap-2">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line.split("").map((char, j) => (
                    char === " " ? (
                      <span key={j} className="inline-block w-2"></span>
                    ) : (
                      <span key={j} className="inline-block relative">
                        <span className="absolute left-0 top-0 text-[#6C4CCF] opacity-80 select-none pointer-events-none" style={{zIndex:0, filter:'blur(1.5px)'}}> {char} </span>
                        <span className="relative z-10 heading-lift">{char}</span>
                      </span>
                    )
                  ))}
                </span>
              ))}
            </h1>
            {/* Robotic green typing animation subtitle */}
            <p className="text-base sm:text-xl lg:text-2xl font-mono text-green-400 mb-8 sm:mb-12 leading-relaxed text-left w-full" data-aos="fade-right" style={{whiteSpace: 'pre-wrap'}}>
              <span>{typedText}</span>
              <span className="w-2 h-7 bg-green-400 animate-blink rounded-sm" style={{display:'inline-block', marginLeft: '-2px', marginRight: '2px', verticalAlign: 'middle'}}></span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <a
                href="/contact"
                className="w-full sm:w-auto shadow-xl shadow-black/20 bg-gradient-to-r from-[#FFCD4B] to-[#FFC233] px-8 py-4 rounded-lg hover:from-[#FFC233] hover:to-[#FFB71A] transition-all duration-300 font-semibold text-lg border border-[#FFCD4B]/40 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
                data-aos="zoom-in"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TechBasic? */}
      <section className="relative z-10 py-16" data-aos="fade-up">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFCD4B] font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>Why Choose TechBasic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Fast Support</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Quick responses and help when you need it most.</span>
            </div>
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Affordable Pricing</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Transparent, honest pricing with no hidden fees.</span>
            </div>
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Modern Design</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Sleek, mobile-friendly websites that stand out.</span>
            </div>
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Secure & Reliable</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Your site is protected and always online.</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-16" data-aos="fade-up">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFCD4B] font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Choose Your Plan</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Pick the website and maintenance plan that fits you best.</span>
            </div>
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>We Build Your Site</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>We design, develop, and set up everything for you.</span>
            </div>
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFCD4B] to-[#FFC233] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-purple-100 mb-1 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Launch & Support</span>
              <span className="text-purple-300 text-sm font-['Quicksand']" style={{lineHeight: '1.6'}}>Go live and enjoy ongoing support and updates.</span>
            </div>
          </div>
        </div>
      </section>

      {/* About TechBasic */}
      <section className="relative z-10 py-16" data-aos="fade-up">
        <div className="container mx-auto px-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#FFCD4B] font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>About TechBasic</h2>
          <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8">
            <p className="text-purple-100 text-lg mb-4 font-['Quicksand']" style={{lineHeight: '1.7'}}>
              <span className="font-bold text-[#FFCD4B] font-['Poppins']" style={{letterSpacing: '0.5px'}}>TechBasic</span> is run by a passionate website developer dedicated to helping individuals and businesses get online with confidence. I craft modern, secure, and beautiful websites tailored to your needs—no templates, no shortcuts.
            </p>
                          <p className="text-purple-300 font-['Quicksand']" style={{lineHeight: '1.7'}}>
              My mission is to provide honest pricing, fast support, and a stress-free experience. I handle the tech, so you can focus on what matters most: growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Website Plans Section */}
      <section className="relative z-10 py-16" data-aos="fade-up">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>Choose Your Website Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Essentials Plan Card */}
            <div className="plan-card bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8 flex flex-col items-start" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <span className="text-xl font-bold mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Essentials Plan</span>
              <span className="text-2xl font-bold text-[#FFCD4B] mb-4 font-['Poppins']" style={{letterSpacing: '0.5px'}}>
                <span className="line-through text-gray-400 mr-2">€329</span>
                <span className="text-[#FFCD4B]">€270 <span className="text-base font-normal italic animate-glow-red font-['Quicksand']" style={{ color: '#FF4B4B' }}>(early bird offer)</span></span>
              </span>
              <span className="text-purple-300 text-sm font-['Quicksand'] mb-4">(inclusive of all taxes), no extra hidden charges</span>
              
              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>DESIGN & CONTENT</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-red-400">✕</span><span className="font-bold text-purple-300">SEO Content Writing</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span><span className="font-bold text-purple-300">5 Dynamic Web Pages</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Professional UI/UX Design</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>Brand Identity Integration (Logo & Colors)</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>Professional Content Writing Included</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.6s'}}>➜</span>Royalty-Free Image Sourcing</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.7s'}}>➜</span>Image & Video Integration</li>
                </ul>
              </div>

              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>FEATURES & FUNCTIONALITY</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span>100% Mobile & Tablet Responsive</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span>Interactive Contact Form</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Click-to-Call Integration</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.3s'}}>➜</span>Google Maps Integration</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>Customer Testimonials Section</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>Image Gallery / Slider</li>
                </ul>
              </div>

              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>TECHNOLOGY & SUPPORT</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-red-400">✕</span><span className="font-bold text-purple-300">0 Free Design Revisions</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span>HTML5 & CSS3 Architecture</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span>Cross-Browser Compatibility</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Secure Website Framework</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.3s'}}>➜</span>Fast Page-Load Optimization</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>FREE .com or .in Domain Name</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>FREE High-Speed Web Hosting</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.6s'}}>➜</span>FREE SSL Certificate (HTTPS Security)</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.7s'}}>➜</span>Weekly Website Backups</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.8s'}}>➜</span>Ongoing Technical Support</li>
                </ul>
              </div>

              <a href="/contact" className="mt-auto shadow-xl shadow-black/20 bg-gradient-to-r from-[#FFCD4B] to-[#FFC233] px-6 py-3 rounded-lg hover:from-[#FFC233] hover:to-[#FFB71A] transition-all duration-300 font-semibold text-lg border border-[#FFCD4B]/40 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 font-['Poppins'] text-center block" style={{letterSpacing: '0.5px'}}>Book This Plan</a>
            </div>

            {/* Premium Plan Card */}
            <div className="plan-card bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8 flex flex-col items-start" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <span className="text-xl font-bold mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Premium Plan</span>
              <span className="text-2xl font-bold text-[#FFCD4B] mb-4 font-['Poppins']" style={{letterSpacing: '0.5px'}}>
                <span className="line-through text-gray-400 mr-2">€369</span>
                <span className="text-[#FFCD4B]">€310 <span className="text-base font-normal italic animate-glow-red font-['Quicksand']" style={{ color: '#FF4B4B' }}>(early bird offer)</span></span>
              </span>
              <span className="text-purple-300 text-sm font-['Quicksand'] mb-4">(inclusive of all taxes), no extra hidden charges</span>
              
              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>DESIGN & CONTENT</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span><span className="font-bold text-[#FFCD4B]">SEO Content Writing</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span><span className="font-bold text-[#FFCD4B]">10 Dynamic Web Pages(includes detailed service pages)</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Professional UI/UX Design</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>Brand Identity Integration (Logo & Colors)</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>Professional Content Writing Included</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.6s'}}>➜</span>Royalty-Free Image Sourcing</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.7s'}}>➜</span>Image & Video Integration</li>
                </ul>
              </div>

              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>FEATURES & FUNCTIONALITY</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span>100% Mobile & Tablet Responsive</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span>Interactive Contact Form</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Click-to-Call Integration</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.3s'}}>➜</span>Google Maps Integration</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>Customer Testimonials Section</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>Image Gallery / Slider</li>
                </ul>
              </div>

              <div className="w-full mb-4">
                <h4 className="font-bold text-purple-100 mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>TECHNOLOGY & SUPPORT</h4>
                <ul className="list-none text-purple-100 space-y-1 mb-4 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span><span className="font-bold text-[#FFCD4B]">1 Free Design Revision</span></li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]">➜</span>HTML5 & CSS3 Architecture</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.1s'}}>➜</span>Cross-Browser Compatibility</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.2s'}}>➜</span>Secure Website Framework</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.3s'}}>➜</span>Fast Page-Load Optimization</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.4s'}}>➜</span>FREE .com or .in Domain Name</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.5s'}}>➜</span>FREE High-Speed Web Hosting</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.6s'}}>➜</span>FREE SSL Certificate (HTTPS Security)</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.7s'}}>➜</span>Weekly Website Backups</li>
                  <li className="flex items-center"><span className="mr-2 animate-checkmark text-[#FFCD4B]" style={{animationDelay: '0.8s'}}>➜</span>Ongoing Technical Support</li>
                </ul>
              </div>

              <a href="/contact" className="mt-auto shadow-xl shadow-black/20 bg-gradient-to-r from-[#FFCD4B] to-[#FFC233] px-6 py-3 rounded-lg hover:from-[#FFC233] hover:to-[#FFB71A] transition-all duration-300 font-semibold text-lg border border-[#FFCD4B]/40 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 font-['Poppins'] text-center block" style={{letterSpacing: '0.5px'}}>Book This Plan</a>
            </div>
          </div>

          {/* Important Details */}
          <div className="mt-8 bg-[#23113a]/60 backdrop-blur-md rounded-xl shadow-glass p-6" data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#FFCD4B] mb-4 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Important Details</h3>
            <div className="space-y-3 text-purple-100 font-['Quicksand']" style={{lineHeight: '1.7'}}>
              <p><span className="font-semibold">Add-On Pages:</span> Need more than 10 pages? You can add extra pages to any plan for a simple, one-time small fee. A custom plan be created for more than 5 extra pages.</p>
              <p><span className="font-semibold">Required Maintenance Plan:</span> All features listed under "Technology & Support" (Hosting, Domain, SSL, Backups, etc.) are covered by our mandatory maintenance plan, which ensures your website stays online, secure, and supported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="relative z-10 py-16" data-aos="fade-up">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>Choose Your Maintenance Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Plan Card */}
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8 flex flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in">
              <span className="text-xl font-bold mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Quarterly Plan</span>
              <div className="text-purple-100 mb-4 mt-2 space-y-1 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                <div className="font-bold"><span className="mr-2">🔒</span>Hosting, Domain & SSL</div>
                <div>Maintenance</div>
                <div>Everything your website needs to stay online, secure, and up-to-date</div>
                <div>Support</div>
              </div>
              <span className="mt-auto text-purple-100 italic font-['Quicksand']">€50 quarterly</span>
              <span className="text-purple-300 text-sm font-['Quicksand'] mt-2">(inclusive of all taxes), no extra hidden charges</span>
            </div>
            {/* Annual Plan Card */}
            <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8 flex flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <span className="text-xl font-bold mb-2 font-['Poppins']" style={{letterSpacing: '0.5px'}}>Annual Plan <span className="text-primary font-semibold">(Best Value)</span></span>
              <div className="text-purple-100 mb-4 mt-2 space-y-1 font-['Quicksand']" style={{lineHeight: '1.6'}}>
                <div className="font-bold"><span className="mr-2">🔒</span>Hosting, Domain & SSL</div>
                <div>Maintenance</div>
                <div>Everything your website needs to stay online, secure, and up-to-date</div>
                <div>Support</div>
              </div>
              <span className="mt-auto text-purple-100 italic font-['Quicksand']">€175 per year <span className="text-primary">(You save £25)</span></span>
              <span className="text-purple-300 text-sm font-['Quicksand'] mt-2">(inclusive of all taxes), no extra hidden charges</span>
            </div>
          </div>
          
          {/* Domain Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-purple-300 italic text-sm opacity-75 font-['Quicksand']" style={{lineHeight: '1.7'}}>
              <span className="font-semibold">Note:</span> My first preference is always the domain you want, and there's a 99% chance my maintenance plan will cover it. In the rare scenario where your desired domain is more expensive (like premium domains such as dentist.com), there is a chance it can cost more depending on demand. In that case, you can choose my offered domains or pay the additional cost for premium domains.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#5CCEFF] font-['Poppins']" data-aos="fade-right" style={{letterSpacing: '0.5px'}}>FAQs</h2>
          {/* FAQ accordion placeholder */}
          <div className="space-y-4">
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="50" onClick={() => toggleFAQ(0)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>Is building a website worth it?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(0) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Absolutely! A professional website is essential for any business in today's digital world. It serves as your 24/7 online presence, builds credibility, generates leads, and provides a platform to showcase your services. A well-designed website can significantly increase your business reach and customer trust.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="100" onClick={() => toggleFAQ(1)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>Do I need a maintenance plan?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(1) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Yes, a maintenance plan is mandatory and essential for your website's success. It covers hosting, domain management, SSL security, regular backups, and ongoing technical support. Without it, your website won't stay online, secure, or up-to-date. We offer both quarterly (€50) and annual (€175) options.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="125" onClick={() => toggleFAQ(2)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>What's included in the maintenance plan?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(2) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Our maintenance plan includes hosting, domain management, SSL certificate, weekly backups, security updates, ongoing technical support, and up to 30 minutes of minor updates per month. Minor updates include: changing text on a page (e.g., updating business hours, team member bios, or service descriptions), swapping out a photo in your gallery or on a page, adding a new customer testimonial you send us, and updating your business address or contact information. You can simply email your request, and we will handle it for you.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="150" onClick={() => toggleFAQ(3)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>How many design revisions are included?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(3) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>The Essentials plan includes 0 design revisions, while the Premium plan includes 1 design revision. Both plans include up to 30 minutes of minor updates per month for things like updating business hours, swapping photos, adding testimonials, or changing text content. For the Essentials Plan, we use our professionally designed template as a foundation and populate it with your brand's colors, logo, and content. For the Premium Plan, you get one formal round of feedback before development begins where you can provide a single, consolidated list of changes. Major changes beyond the included revisions will be considered a new project.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="175" onClick={() => toggleFAQ(4)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>What if I need more than 10 pages?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(4) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(4) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>No problem! You can add extra pages to any plan for a simple, one-time fee of £15 per page. Just let us know your requirements and we'll accommodate your needs. A custom plan be created for more than 5 extra pages.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="200" onClick={() => toggleFAQ(5)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>What technologies do you use for development?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(5) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(5) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>We use modern, industry-standard technologies including HTML5, CSS3, JavaScript, and responsive frameworks. Our websites are built with security, speed, and scalability in mind.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="250" onClick={() => toggleFAQ(6)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>Is ongoing support included?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(6) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(6) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Yes, all maintenance plans include ongoing technical support, regular backups, security updates, and hosting management. We ensure your website stays online, secure, and up-to-date.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="300" onClick={() => toggleFAQ(7)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>Will my website be mobile-friendly?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(7) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(7) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Absolutely! Every website we build is 100% mobile and tablet responsive. Your site will look and function perfectly on all devices, from smartphones to desktop computers.</div>
                </div>
              </div>
              <div className="bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-6 cursor-pointer transition-all duration-300 hover:bg-[#23113a]/90" data-aos="fade-up" data-aos-delay="350" onClick={() => toggleFAQ(8)}>
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-['Poppins']" style={{letterSpacing: '0.5px'}}>What's included in the hosting and domain package?</div>
                  <span className="text-[#FFCD4B] text-xl font-bold transition-transform duration-300" style={{transform: expandedFAQs.includes(8) ? 'rotate(45deg)' : 'rotate(0deg)'}}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(8) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-purple-100 font-['Quicksand'] mt-4" style={{lineHeight: '1.7'}}>Our hosting package includes high-speed web hosting, a free .com or .in domain name, SSL certificate for security, weekly backups, and 24/7 uptime monitoring to keep your site always accessible.</div>
                </div>
              </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 py-10 mt-8 bg-[#23113a]/80 backdrop-blur-md">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-wide text-[#FFCD4B] font-['Poppins']" style={{letterSpacing: '0.5px'}}>TechBasic</span>
            <span className="text-purple-100 text-sm mb-2 font-['Quicksand']" style={{lineHeight: '1.6'}}>Building modern, secure websites for businesses and individuals.</span>
            <span className="text-purple-300 text-xs font-['Quicksand']">© {new Date().getFullYear()} TechBasic. All rights reserved.</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 text-purple-100">
            <div className="flex space-x-6 mb-4 md:mb-0 font-['Quicksand']">
              <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Services</a>
              <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
              <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:techbasic851@gmail.com" className="hover:text-orange-400 transition-colors" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
