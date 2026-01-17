
import React from 'react';
import { ExternalLink, FileText, Bookmark } from 'lucide-react';
import { Publication } from '../types';

const publications: Publication[] = [
  {
    id: '1',
    title: 'SHC: 8-bit Compact and Efficient S-Box Structure for Lightweight Cryptography',
    authors: 'Hemraj Shobharam Lamkuche, et al.',
    venue: 'IEEE Access',
    year: 2024,
    link: 'https://ieeexplore.ieee.org/document/10410243',
    category: 'Journal'
  },
  {
    id: '2',
    title: 'Deep Learning Based Analysis of Key Scheduling Algorithm of Advanced Ciphers',
    authors: 'Narendra Kumar Patel, Hemraj Shobharam Lamkuche',
    venue: 'IACR Cryptology ePrint Archive',
    year: 2024,
    link: 'https://eprint.iacr.org/2024/272',
    category: 'Journal'
  },
  {
    id: '3',
    title: 'Breaking the Shield: Adversarial Jailbreak Attacks and Defense Mechanisms in Large Language Models',
    authors: 'Shreyash R Dubey, Hemraj S Lamkuche',
    venue: 'EITES 2025 (Forthcoming)',
    year: 2025,
    category: 'Conference'
  },
  {
    id: '4',
    title: 'Glaucoma diagnosis from fundus images using modified Gauss-Kuzmin-distribution-based Gabor features in 2D-FAWT',
    authors: 'Rajneesh Kumar Patel, et al.',
    venue: 'Biomedical Signal Processing and Control',
    year: 2023,
    category: 'Journal'
  },
  {
    id: '5',
    title: 'CSL: FPGA Implementation of Lightweight Block Cipher for Power-Constrained Devices',
    authors: 'Hemraj Lamkuche, Dhanya Pramod',
    venue: 'Advances in Intelligent Systems and Computing',
    year: 2020,
    category: 'Conference'
  },
  {
    id: '6',
    title: 'SAL – A Lightweight Symmetric Cipher for Internet-of-Things',
    authors: 'Hemraj Lamkuche, Dhanya Pramod, et al.',
    venue: 'International Conference on Computing Communication and Networking Technologies',
    year: 2019,
    category: 'Conference'
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Research</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Selected Publications</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Focusing on the intersection of symmetric-key cryptography, IoT security, and the robustness of AI systems.
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
                <FileText size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                    pub.category === 'Journal' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {pub.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{pub.year}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {pub.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1 italic">
                  {pub.authors}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold">
                  {pub.venue}
                </p>
              </div>
              <div className="flex-shrink-0">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    View Paper <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-slate-400 text-sm italic">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-6">Explore the full list on academic repositories</p>
          <div className="flex justify-center gap-6">
            <a href="https://scholar.google.com/citations?user=sqNVq48AAAAJ" target="_blank" className="p-3 bg-white border border-slate-200 rounded-full hover:border-blue-500 transition-colors shadow-sm">
              <img src="https://www.google.com/favicon.ico" className="w-6 h-6 grayscale hover:grayscale-0" alt="Google Scholar" />
            </a>
            <a href="https://www.researchgate.net/profile/Hemraj-Lamkuche" target="_blank" className="p-3 bg-white border border-slate-200 rounded-full hover:border-blue-500 transition-colors shadow-sm">
              <Bookmark className="w-6 h-6 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
