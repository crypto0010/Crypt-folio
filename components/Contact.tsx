
import React from 'react';
import { Mail, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info Column */}
          <div className="lg:w-2/5 p-12 bg-blue-600 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
              <p className="text-blue-100 mb-12 text-lg">
                Interested in collaboration, research partnerships, or have questions about cryptography? Reach out directly.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-blue-200">Email</h4>
                    <p className="text-lg">hemrajshobharamlamkuche@vitbhopal.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-blue-200">Professional</h4>
                    <a href="https://linkedin.com/in/dr-hemraj-lamkuche-4b760040" className="text-lg hover:underline flex items-center gap-2">
                      LinkedIn Profile <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-blue-200">Address</h4>
                    <p className="text-md opacity-90">
                      School of Computing Science & Engineering,<br />
                      VIT Bhopal University, Bhopal-Indore Highway,<br />
                      Sehore, Madhya Pradesh 466114, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-12 bg-slate-900 text-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Research Query"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="mt-8 text-xs text-slate-500 text-center">
              Note: This form requires a backend like Formspree or Netlify Forms to process submissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
