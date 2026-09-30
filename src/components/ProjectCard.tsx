import { profileData } from '../data/profile';

type ProjectProps = {
  project: typeof profileData.projects[0];
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="mb-16 last:mb-0 group">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="text-lg text-emerald-400 font-medium">
          {project.subtitle}
        </div>
      </div>
      
      <ul className="mb-6 space-y-2">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="relative pl-6 text-gray-400 before:content-['→'] before:absolute before:left-0 before:text-blue-500 before:font-mono before:text-sm">
            {bullet}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-800">
        {project.stack.map(tech => (
          <span key={tech} className="px-3 py-1 bg-white/5 text-gray-200 text-sm font-medium font-mono rounded-md border border-white/10 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
