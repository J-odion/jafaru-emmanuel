"use client";

import { useState } from 'react';
import { profileData } from '../data/profile';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ResumeModal from '../components/ResumeModal';

type ResumeType = 'master' | null;

export default function Home() {
  const [activeResume, setActiveResume] = useState<ResumeType>(null);

  return (
    <>
      <ResumeModal activeResume={activeResume} setActiveResume={setActiveResume} />
      
      <Hero />

      <main className="max-w-5xl mx-auto px-8 py-20">
        
        {/* What I Do Section */}
        <section id="what-i-do" className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-blue-500 after:rounded-sm">
              What I Do
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400">
              I wear multiple hats depending on what the product needs. Below are my core areas of expertise, along with specialized resumes for each.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Backend & Systems Architecture</h3>
                <p className="text-gray-400 mb-4">I design backend systems around clear domain boundaries, reliable data models, strong authorization, observability, and maintainability.</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">REST API architecture & Modular monoliths</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Multi-tenant systems & Role-based access control</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Payment verification & double-entry financial ledgers</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <button onClick={() => setActiveResume('master')} className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 cursor-pointer bg-transparent border-none">
                  <span>View My Resume</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Frontend Engineering</h3>
                <p className="text-gray-400 mb-4">I build interfaces where complexity stays behind the scenes using React, Next.js, TypeScript, and Tailwind CSS.</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Enterprise dashboards & Admin consoles</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Financial applications & Data-heavy interfaces</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Responsive web apps & Design-system driven interfaces</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <button onClick={() => setActiveResume('master')} className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 cursor-pointer bg-transparent border-none">
                  <span>View My Resume</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl transition-all md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Mobile Engineering</h3>
                <p className="text-gray-400 mb-4">I build cross-platform mobile applications using React Native, Expo, and Flutter, sharing reliable backend infrastructure with web clients.</p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Authentication, Maps, and geolocation</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Offline resilience & Role-based experiences</li>
                  <li className="text-gray-400 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">Notifications & Media-heavy experiences</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <button onClick={() => setActiveResume('master')} className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 cursor-pointer bg-transparent border-none">
                  <span>View My Resume</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl transition-all md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Security, Quality & Reliability</h3>
                <p className="text-gray-400 mb-4">I care about the parts of software that users don't see until something goes wrong. I've implemented and worked with:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileData.skills.core.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 text-gray-200 text-sm font-medium font-mono rounded-md border border-white/10">{skill}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6">I am developing deeper expertise in <strong>application security, OWASP ASVS, threat modelling, secure code review, IT controls, COBIT, and ISO/IEC 27001.</strong></p>
              </div>
              <div className="pt-6 border-t border-gray-800">
                <button onClick={() => setActiveResume('master')} className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 cursor-pointer bg-transparent border-none">
                  <span>View My Resume</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="selected-work" className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-blue-500 after:rounded-sm">
              Selected Work
            </h2>
          </div>
          <div className="space-y-4">
            {profileData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Technical Writing Section */}
        <section id="writings" className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-blue-500 after:rounded-sm">
              Technical Writing & Architecture
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400">
              I document my architectural decisions and system designs to share knowledge and build trust in the engineering community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.writings.map((post, index) => (
              <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="group bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl transition-all">
                <div>
                  <div className="text-xs font-bold font-mono text-blue-500 mb-3 uppercase tracking-wider">{post.type}</div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">{post.title}</h3>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    {post.platform}
                  </span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy Section */}
        <section id="philosophy" className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-blue-500 after:rounded-sm">
              How I Think About Engineering
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white m-0">Architecture is a product decision</h3>
              </div>
              <p className="text-gray-400">Good architecture isn't about using the most sophisticated technology. It's about making the right trade-offs.</p>
              <p className="text-sm font-mono text-blue-400/80 my-3">Scalability → Security → Reliability → Maintainability → DX → Cost</p>
              <p className="text-gray-400">The best architecture allows the product and the team to move quickly without creating unnecessary operational debt.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white m-0">Security is part of engineering</h3>
              </div>
              <p className="text-gray-400">Authentication is not authorization. Authorization is not access control. And access control is not simply hiding a button.</p>
              <p className="text-gray-400 mt-2">I design systems where permissions, data ownership, authentication state, financial operations, and auditability are treated as first-class concerns.</p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section id="contact">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-blue-500 after:rounded-sm">
              Open to Opportunities
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 rounded-2xl p-10 shadow-2xl">
            <p className="text-gray-300 text-lg">I'm currently open to opportunities as a <strong className="text-white">Senior Backend Engineer · Full-Stack Engineer · Systems Architect</strong>.</p>
            
            <h3 className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Let's build something that matters.</h3>
            
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-800">
              <a href="mailto:jafaruemmanuel48@gmail.com" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">jafaruemmanuel48@gmail.com</a>
              <a href="https://github.com/J-odion" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/emmanuel-jafaru/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">LinkedIn</a>
              <a href={profileData.socials.devTo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">Dev.to</a>
              <a href={profileData.socials.medium} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">Medium</a>
            </div>
          </div>

          {/* WhatsApp & Direct Call Line */}
          <div className="mt-8 bg-gradient-to-r from-gray-900 via-gray-900 to-emerald-950/40 border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl transition-all">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Direct Connect
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Oh, if WhatsApp is easier, there you have it
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
                Prefer a direct conversation? Chat with me on WhatsApp, or place a direct phone call for immediate discussions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/2349162622433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all text-base whitespace-nowrap group cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.983zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat me</span>
              </a>

              <a
                href="tel:+2349162622433"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gray-800/90 hover:bg-gray-700/90 text-white font-semibold rounded-xl border border-gray-700 hover:border-gray-500 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all text-base whitespace-nowrap group cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-300 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call me</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-800 bg-gray-900/50 text-center mt-20">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xl text-white font-semibold italic mb-8">
            "I started by learning how to build software. I am now focused on learning how to build software systems that businesses can trust."
          </p>
          <div className="mb-8">
            <h4 className="text-white font-bold mb-1">Emmanuel Jafaru</h4>
            <p className="text-gray-500 text-sm">Senior Full-Stack Software Engineer · Systems Architect<br />Abuja, Nigeria · Available Worldwide</p>
          </div>
          <p className="text-gray-600 text-xs">&copy; 2026 Emmanuel Jafaru.</p>
        </div>
      </footer>
    </>
  );
}
