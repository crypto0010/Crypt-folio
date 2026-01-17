
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Assistant Professor - Grade 2",
      org: "VIT Bhopal University",
      period: "June 2023 – Present",
      desc: "Lead research in cryptography and system security. Principal Investigator for SPEAR Grant on LLM security."
    },
    {
      title: "Assistant Professor",
      org: "Symbiosis University of Applied Science, Indore",
      period: "Feb 2022 – April 2023",
      desc: "Instruction and research in blockchain technology, cloud computing, and symmetric encryption schemes."
    },
    {
      title: "Assistant Professor",
      org: "Symbiosis Centre for Information Technology, Pune",
      period: "Feb 2019 – Feb 2022",
      desc: "Delivered courses on Information Security Audit and Smart Contracts. Led NAAC criteria for IQAC."
    }
  ];

  const education = [
    {
      degree: "Ph.D. in Computer Science (Information Security)",
      inst: "Symbiosis International (Deemed University)",
      period: "2015 – 2019",
      details: "Thesis: A Lightweight Block Cipher with Pipelined Feistel Structure"
    },
    {
      degree: "M.Phil. in Information Security",
      inst: "Bharathiar University",
      period: "2011 – 2013",
      details: "Focus on Blowfish Scheme enhancements"
    },
    {
      degree: "M.Sc. in Computer Science",
      inst: "North Maharashtra University",
      period: "2008 – 2010",
      details: "Academic distinction with 64.95%"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold">Academic Career</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-[1.85rem] before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-6 top-1.5 w-3 h-3 bg-blue-600 rounded-full border-4 border-slate-900"></div>
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{exp.period}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2">{exp.title}</h4>
                  <p className="text-slate-300 font-semibold mb-2">{exp.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-[1.85rem] before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-6 top-1.5 w-3 h-3 bg-indigo-600 rounded-full border-4 border-slate-900"></div>
                  <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2">{edu.degree}</h4>
                  <p className="text-slate-300 font-semibold mb-2">{edu.inst}</p>
                  <p className="text-slate-400 text-sm italic">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
