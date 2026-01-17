
import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tight">Dr. Hemraj Lamkuche</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#about" className="text-slate-400 hover:text-white text-sm">About</a>
            <a href="#publications" className="text-slate-400 hover:text-white text-sm">Research</a>
            <a href="#experience" className="text-slate-400 hover:text-white text-sm">Experience</a>
            <a href="#blog" className="text-slate-400 hover:text-white text-sm">Insights</a>
            <a href="#contact" className="text-slate-400 hover:text-white text-sm">Contact</a>
          </nav>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/dr-hemraj-lamkuche-4b760040" target="_blank" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hemrajshobharamlamkuche@vitbhopal.ac.in" className="p-2 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Dr. Hemraj Shobharam Lamkuche. All rights reserved.</p>
          <p>School of Computing Science & Engineering, VIT Bhopal University</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
