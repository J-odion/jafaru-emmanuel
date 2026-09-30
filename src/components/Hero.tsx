import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 border-b border-gray-800 overflow-hidden">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)] -z-10" />
      
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          {profileData.hero.name}
        </h1>
        <div className="text-xl md:text-2xl text-blue-400 font-semibold mb-8 font-mono">
          {profileData.hero.title}
        </div>
        
        <div className="text-lg md:text-xl text-white font-medium max-w-3xl mb-6 border-l-4 border-blue-500 pl-6">
          "{profileData.hero.statement}"
        </div>
        
        <div className="text-lg text-gray-400 max-w-4xl space-y-4 mb-12">
          {profileData.hero.description.map((paragraph, index) => (
            <p key={index} className={index === 2 ? "text-gray-300 font-medium" : ""}>
              {paragraph}
            </p>
          ))}
          
          <div className="mt-8 p-6 bg-blue-500/5 rounded-xl border border-blue-500/10">
            <p className="text-white italic m-0">
              {profileData.hero.philosophyQuote}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a href="#selected-work" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(59,130,246,0.15)] hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] transition-all">
            View my work
          </a>
          <a href="#what-i-do" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-800 hover:border-blue-500 hover:bg-blue-500/5 transition-all">
            View tailored CVs
          </a>
          <a href="#contact" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-800 hover:border-blue-500 hover:bg-blue-500/5 transition-all">
            Let's build something
          </a>
        </div>
      </div>
    </header>
  );
}
