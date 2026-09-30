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
