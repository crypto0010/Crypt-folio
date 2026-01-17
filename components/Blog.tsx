
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Why Feistel Networks Remain Relevant in 2025",
      excerpt: "Exploring the mathematical elegance and security proofs behind Feistel structures in modern symmetric cryptography.",
      date: "Oct 12, 2024",
      tag: "Cryptography"
    },
    {
      title: "Lightweight Cryptography for IoT Healthcare",
      excerpt: "How resource-constrained devices can achieve high privacy standards in sensitive medical monitoring environments.",
      date: "Sep 28, 2024",
      tag: "IoT Security"
    },
    {
      title: "Defending LLMs Against Jailbreak Attacks",
      excerpt: "A deep dive into prompt injection patterns and the automated detection tools currently in development.",
      date: "Aug 15, 2024",
      tag: "AI Safety"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Recent Articles</h3>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            View All Posts <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full self-start mb-6">
                {post.tag}
              </span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600">
                {post.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                <span className="text-blue-600 text-sm font-bold flex items-center gap-1">Read More <ArrowRight size={14} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
