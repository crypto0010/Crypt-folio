
import React from 'react';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  ShieldAlert, 
  Activity, 
  Link as LinkIcon, 
  Users, 
  Network 
} from 'lucide-react';

const About: React.FC = () => {
  const researchFocus = [
    {
      title: "Lightweight Cryptography",
      desc: "Design of 8-bit compact S-Box structures and symmetric ciphers (SAL, SHC) for resource-constrained IoT.",
      icon: <Lock size={22} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "IoT & Hardware Security",
      desc: "FPGA implementations using VHDL/Verilog with a focus on power-efficient security architectures.",
      icon: <Cpu size={22} />,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "AI & LLM Robustness",
      desc: "Investigating adversarial jailbreak attacks and developing defense mechanisms for Large Language Models.",
      icon: <ShieldAlert size={22} />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Medical Image Analysis",
      desc: "Deep learning frameworks for automated screening of Pneumonia and Glaucoma from radiology images.",
      icon: <Activity size={22} />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Blockchain & E-Governance",
      desc: "Developing secure, decentralized applications for smart cities and sustainable commuting solutions.",
      icon: <LinkIcon size={22} />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Cybersecurity Training",
      desc: "Conducted specialized training for Armed Forces and Civil Services (IAS/IPS) personnel via YASHADA.",
      icon: <Users size={22} />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

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
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-600">12+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Exp.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-600">450+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Citations</p>
              </div>
            </div>

            <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-blue-200" />
                <h4 className="font-bold text-lg">Key Accomplishments</h4>
              </div>
              <ul className="space-y-3 text-sm text-blue-50">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 flex-shrink-0"></span>
                  Ph.D. in Computer Science (Information Security)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 flex-shrink-0"></span>
                  Recognized expert by YASHADA (Govt. of Maharashtra)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 flex-shrink-0"></span>
                  Principal Investigator for SPEAR Grant research
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Biography</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Advancing the Frontiers of Cybersecurity</h3>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                I am <span className="text-slate-900 dark:text-white font-semibold">Dr. Hemraj Shobharam Lamkuche</span>, a Senior Assistant Professor at VIT Bhopal University with over 12 years of academic and research excellence. My journey in computer science has been driven by a singular passion: securing the digital future through innovative cryptographic primitives and robust AI frameworks.
              </p>
              <p>
                With a Ph.D. focused on Information Security from Symbiosis International University, I specialize in the design and implementation of <strong>lightweight block ciphers</strong> for IoT and power-constrained devices. My work bridges the gap between theoretical cryptology and practical FPGA implementations, ensuring high security doesn't compromise efficiency.
              </p>
              <p>
                Beyond standard cryptography, I actively research <strong>Adversarial Robustness in LLMs</strong>, medical image processing using advanced deep learning, and blockchain-based sustainable solutions. I have had the privilege of training Armed Forces and Civil Services (IAS/IPS) personnel in Cybersecurity & Crime.
              </p>
              
              <div className="pt-8">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-blue-600"></span>
                  Research Focus Areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {researchFocus.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                      <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h5>
                        <p className="text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-blue-600" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">45+ Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-blue-600" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Senior Researcher</span>
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
