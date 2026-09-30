"use client";

import { useEffect } from 'react';
import { profileData } from '../data/profile';

type ResumeType = 'master' | null;

interface ResumeModalProps {
  activeResume: ResumeType;
  setActiveResume: (r: ResumeType) => void;
}

export default function ResumeModal({ activeResume, setActiveResume }: ResumeModalProps) {
  useEffect(() => {
    if (activeResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeResume]);

  if (!activeResume) return null;

  const data = profileData.resumes[activeResume];

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/95 z-[100] overflow-y-auto p-4 md:p-8 print:bg-white print:p-0 print:static print:h-auto print:w-full print:overflow-visible" onClick={() => setActiveResume(null)}>
      <div className="w-full max-w-[850px] mx-auto relative flex flex-col gap-4" onClick={e => e.stopPropagation()}>
        
        {/* Actions Toolbar - Hidden on Print */}
        <div className="flex flex-wrap justify-end gap-3 sticky top-0 z-10 print:hidden">
          <a href="/emmanuel-jafaru-resume.pdf" download="Emmanuel_Jafaru_Resume.pdf" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-lg text-sm flex items-center">
            Download Original CV
          </a>
          <button 
            onClick={() => { 
              setActiveResume(null); 
              setTimeout(() => window.print(), 300); 
            }} 
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors shadow-lg text-sm"
          >
            Download Portfolio
          </button>
          <button onClick={() => window.print()} className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-md transition-colors shadow-lg text-sm">
            Print Web CV
          </button>
          <button onClick={() => setActiveResume(null)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold rounded-md transition-colors shadow-lg text-sm">
            Close
          </button>
        </div>

        {/* The Document - A4 Aspect */}
        <div className="bg-white text-gray-900 p-12 md:p-16 rounded-lg shadow-2xl font-sans min-h-[1056px] print:shadow-none print:m-0 print:w-full print:rounded-none">
          {/* Header */}
          <div className="text-center mb-8 border-b pb-6 border-gray-300">
            <h1 className="text-3xl font-extrabold text-black tracking-tight mb-2 uppercase">Emmanuel Odion Jafaru</h1>
            <p className="text-base font-bold text-gray-800 mb-2">
              {data.title}
            </p>
            <div className="text-sm text-gray-600">Abuja, Nigeria | +234 916 262 2433 | jafaruemmanuel48@gmail.com | <a href="https://www.linkedin.com/in/emmanuel-jafaru/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></div>
          </div>
          
          {/* Summary */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-800 mb-6">
            {data.summary}
          </p>
          
          {/* Skills */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Core Skills</h2>
          <div className="text-sm leading-relaxed text-gray-800 mb-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="mb-1">
                <strong>{skill.category}:</strong> {skill.tools}
              </div>
            ))}
          </div>

          {/* Experience */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Professional Experience</h2>
          
          {data.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="text-sm font-bold text-black mb-1">
                {job.role} — {job.company} | {job.date}
              </div>
              <ul className="list-disc ml-5 text-sm leading-relaxed text-gray-800 space-y-1">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Education</h2>
          <div className="text-sm leading-relaxed text-gray-800 mb-6">
            {data.education}
          </div>

          {/* Certifications */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Certifications & Training</h2>
          <div className="text-sm leading-relaxed text-gray-800 mb-6">
            {data.certifications}
          </div>

          {/* Community */}
          <h2 className="text-sm font-extrabold uppercase text-black border-b border-black pb-1 mb-2 mt-6">Community, Speaking & Languages</h2>
          <div className="text-sm leading-relaxed text-gray-800 mb-6">
            {data.community}
          </div>
          
        </div>
      </div>
    </div>
  );
}
