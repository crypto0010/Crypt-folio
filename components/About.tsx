
import React from 'react';
import { Award, BookOpen, ShieldCheck, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Image and Highlights */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="https://picsum.photos/seed/hemraj/800/1000"
                alt="Dr. Hemraj Lamkuche"
                className="relative rounded-2xl shadow-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <p className="text-3xl font-bold text-blue-600">12+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <p className="text-3xl font-bold text-blue-600">450+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Citations</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Biography</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Advancing the Frontiers of Cybersecurity</h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                I am <span className="text-slate-900 font-semibold">Dr. Hemraj Shobharam Lamkuche</span>, a Senior Assistant Professor at VIT Bhopal University with over 12 years of academic and research excellence. My journey in computer science has been driven by a singular passion: securing the digital future through innovative cryptographic primitives and robust AI frameworks.
              </p>
              <p>
                With a Ph.D. focused on Information Security from Symbiosis International University, I specialize in the design and implementation of <strong>lightweight block ciphers</strong> for IoT and power-constrained devices. My work bridges the gap between theoretical cryptology and practical FPGA implementations, ensuring high security doesn't compromise efficiency.
              </p>
              <p>
                Beyond standard cryptography, I actively research <strong>Adversarial Robustness in LLMs</strong>, medical image processing using advanced deep learning (e.g., Pneumonia and Glaucoma screening), and blockchain-based sustainable commuting solutions. I have had the privilege of training Armed Forces and Civil Services (IAS/IPS) personnel in Cybersecurity & Crime via YASHADA, Govt. of Maharashtra.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Expert Cryptologist</h4>
                    <p className="text-sm">Design of lightweight symmetric ciphers like SAL and SHC.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Embedded Security</h4>
                    <p className="text-sm">VHDL/Verilog implementations for resource-constrained hardware.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Prolific Researcher</h4>
                    <p className="text-sm">45+ peer-reviewed contributions with impact across domains.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Lead Innovator</h4>
                    <p className="text-sm">Incubated 3 startups and led funded projects on LLM security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
