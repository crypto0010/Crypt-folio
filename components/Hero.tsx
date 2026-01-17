
import React from 'react';
import FeistelCanvas from './FeistelCanvas';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden feistel-gradient">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0">
        <FeistelCanvas />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Dr. Hemraj Shobharam Lamkuche
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
            Assistant Professor • Cryptologist • Researcher
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            "Preserving Security and Privacy of Digital Information Across Any Communication Medium"
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 text-sm">Lightweight Cryptography</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 text-sm">IoT Security</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 text-sm">AI Robustness</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#publications"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Explore Research
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-slate-500 hover:border-white text-white font-bold rounded-lg transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400 w-8 h-8" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
