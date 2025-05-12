
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold">
              <span className="text-coral">Dev</span>Portfolio
            </Link>
            <p className="mt-4 text-white/80 max-w-sm">
              A passionate JavaScript full-stack developer who loves creating 
              beautiful, functional web applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-coral transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-white/70 hover:text-coral transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@example.com"
                className="text-white/70 hover:text-coral transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-coral transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-coral transition-colors duration-300">About</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-coral transition-colors duration-300">Projects</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-coral transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">asimabbasi1029@gmail.com</li>
              <li className="text-white/70">Islamabad, Pakistann</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
