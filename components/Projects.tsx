
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Lightweight Block Ciphers (CSL/SAL/SHC)',
    description: 'Design and FPGA implementation of symmetric ciphers optimized for resource-constrained IoT nodes, focusing on pipelined Feistel architectures.',
    tags: ['Cryptography', 'FPGA', 'VHDL', 'IoT'],
    imageUrl: 'https://picsum.photos/seed/cipher/600/400'
  },
  {
    id: 'p2',
    title: 'LLM Prompt Injection Detection',
    description: 'A SPEAR Grant funded project focused on detecting and mitigating adversarial jailbreak attacks on Large Language Models.',
    tags: ['LLM Security', 'AI', 'Adversarial Attacks'],
    imageUrl: 'https://picsum.photos/seed/ai-sec/600/400'
  },
  {
    id: 'p3',
    title: 'Pneumonia & Glaucoma Screening',
    description: 'Medical image analysis using modified Gauss-Kuzmin distributions and customized deep learning (VGG-16) for automated diagnosis.',
    tags: ['Deep Learning', 'Imaging', 'Healthcare'],
    imageUrl: 'https://picsum.photos/seed/medical/600/400'
  },
  {
    id: 'p4',
    title: 'Blockchain for Sustainable Cities',
    description: 'Developed "Yu-Go", a sustainable commuting application leveraging blockchain for transparent and secure micro-payments.',
    tags: ['Blockchain', 'Sustainability', 'Smart Cities'],
    imageUrl: 'https://picsum.photos/seed/blockchain/600/400'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Research & Innovation</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white dark:bg-slate-700 text-[10px] font-bold text-slate-500 dark:text-slate-300 rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
