import './App.css'

import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Check, CreditCard, Building2, Car, Coins, Menu, X, Home } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Vehicle Loans",
      icon: <Car className="h-12 w-12 text-green-600" />,
      description: "Competitive rates on auto loans with flexible terms and quick approval process",
      features: ["Competitive interest rates", "Quick approval process", "Flexible repayment terms", "New & used vehicles"]
    },
    {
      title: "Business Loans",
      icon: <Building2 className="h-12 w-12 text-green-600" />,
      description: "Supporting local businesses with tailored financing solutions",
      features: ["Customized lending options", "Local decision making", "Business expansion", "Equipment financing"]
    },
    {
      title: "Mortgages",
      icon: <Home className="h-12 w-12 text-green-600" />,
      description: "Making homeownership dreams a reality with flexible mortgage solutions",
      features: ["First-time buyers", "Refinancing options", "Construction loans", "Home equity lines"]
    },
    {
      title: "Credit Cards",
      icon: <CreditCard className="h-12 w-12 text-green-600" />,
      description: "Rewards credit cards with competitive rates and local benefits",
      features: ["Cash back rewards", "Local merchant deals", "Zero liability", "Mobile payments"]
    }
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    // { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" }
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Local Business Owner",
      content: "Bank on Guelph helped me expand my business with their personalized approach to lending."
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "Their exceptional service and competitive rates made my home buying process smooth and stress-free."
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "The financial advisors truly care about helping students make smart financial decisions."
    }
  ];

  const whyUs = [
    "Community-focused banking with local decision making",
    "Personalized service from dedicated financial advisors",
    "Competitive rates and flexible terms",
    "Modern digital banking with a personal touch"
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo-final.png" alt="Bank on Guelph" className="h-fit w-auto" />
              {/* <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">Bank on Guelph</span> */}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 font-medium transition duration-300"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-gradient-to-r from-green-500 to-green-800 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition duration-300">
                Apply for credit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200">
              <div className="flex flex-col space-y-4 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition duration-300"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                ))}
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
                Apply for credit
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-500 to-green-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 max-w-[1400px] py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Fast-friendly Finance that{' '}
                  <TypeAnimation
                    sequence={[
                      'Grows with Your Dreams',
                      2000,
                      'Builds Our Community',
                      2000,
                      'Puts You First',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-slate-900"
                  />
                </h1>
                <p className="text-xl mb-8 text-green-100">Experience the perfect blend of local trust and modern finance solutions.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition duration-300">
                    Get Free Debt advice
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                    Book Consultation
                  </button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img src="/hero.svg" alt="Banking App" className="" />
              </div>
            </div>
          </div>
        </section>

         {/* Services Section */}
         <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our <span className="underline underline-offset-4 decoration-green-500 decoration-from-font">Services</span></h2>
              <p className="text-gray-600">Tailored financial solutions to meet your every need</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:border-green-600 hover:border-2 hover:shadow-green-700">
                  <div className="p-8">
                    <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="px-8 pb-8">
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our <span className="underline underline-offset-4 decoration-green-500 decoration-from-font">Mission</span></h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12">
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Hassle Free Lending</h3>
                <p className="text-gray-600">Simple, straightforward lending process with quick approvals and minimal paperwork.</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Community-First Approach</h3>
                <p className="text-gray-600">Dedicated to serving and growing with our local community.</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Small Business Support</h3>
                <p className="text-gray-600">Specialized solutions and guidance for small business growth.</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Trusted Finance Partner</h3>
                <p className="text-gray-600">Your reliable partner for all financial needs and goals.</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Growth</h3>
                <p className="text-gray-600">Committed to fostering sustainable local economic development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Building Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Financing That <span className="underline underline-offset-4 decoration-green-500 decoration-from-font">Builds Community</span></h2>
                <p className="text-lg text-gray-600 mb-6">Since 2024, Guelph Savings and Loans Inc. has been more than just a financial lending partner – we're your neighbors, friends, and partners in building a stronger Guelph. Our commitment goes beyond traditional banking:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Over $20K invested in local businesses annually</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">Supporting 50+ community events each year</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">98% financial partner satisfaction</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/community.svg" alt="Community Banking" className="" />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       

         {/* About Section */}
         <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <img 
                  src="/cam.png" 
                  alt="John Smith - Founder" 
                  className="rounded-lg shadow-xl shadow-green-700 border-2 border-green-500"
                />
                <div className="absolute -bottom-4 bg-green-600 text-white p-6 rounded-lg">
                  <p className="font-semibold">5+ Years</p>
                  <p className="text-sm">of Entrepreneur Excellence</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6">Our <span className="underline underline-offset-4 decoration-green-500 decoration-from-font">Story</span></h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                Inspired by the community banking model championed by Dave Fishwick in the UK, Jermaine Cameron founded "Bank on Guelph" aka <span className='text-green-600 font-bold'>Guelph Savings and Loans</span> in 2024 to serve the financial needs of the Guelph community.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                Jermaine was inspired by Fishwick's approach of offering accessible financial services and reinvesting profits into the community. Embracing these principles, Bank on Guelph aims to empower local residents and businesses by providing fair and transparent lending options, fostering economic growth and community development.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">15+</p>
                    <p className="text-gray-600">Happy Financial Partners</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">$50K+</p>
                    <p className="text-gray-600">Assets Managed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">98%</p>
                    <p className="text-gray-600">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-green-500 to-green-800 text-white">
          <div className="container mx-auto px-4 max-w-[1400px] text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Experience lending that puts you first. Open an account today and become part of Guelph's trusted financial family.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">Open an Account</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Contact Us</button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our <span className="underline underline-offset-4 decoration-green-500 decoration-from-font">Customers Say</span></h2>
              <p className="text-gray-600">Real stories from real customers who trust Bank on Guelph</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center mb-6">
                    {/* <img 
                      src={`https://source.unsplash.com/random/150x150/?person&${index}`}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    /> */}
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-green-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/* <section id="why-us" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600">Experience banking that puts you first</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-lg font-medium text-gray-800">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <p>(519) 555-0123</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                    <p>contact@bankonguelph.ca</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <p>123 Main Street, Guelph, ON N1H 1A1</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0447872716396!2d-80.24968372346183!3d43.544133571260866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9b3f43053cf7%3A0x1449a5a53b22c5f8!2sDowntown%20Guelph!5e0!3m2!1sen!2sca!4v1709856047612!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Bank on Guelph. All rights reserved.</p>
            <span>Made with love by <a href="https://aarohana.tech" className="hover:underline text-green-400 font-semibold">Aarohana Technologies</a></span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
