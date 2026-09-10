import React, { useState, useMemo } from 'react';
import { portfolio } from '../config/portfolio';
import { ProjectItem } from '../types';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { Sparkles, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  onViewCaseStudy: (project: ProjectItem) => void;
  onOpenImage: (src: string, alt: string, caption?: string) => void;
}

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'frontend', label: 'Front-End' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'creative', label: 'Creative' },
];

export default function Projects({ onViewCaseStudy, onOpenImage }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [comingSoonInfo, setComingSoonInfo] = useState<{ title: string; type: 'live' | 'github' } | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return portfolio.projects;
    return portfolio.projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  const handleShowComingSoon = (title: string, type: 'live' | 'github') => {
    setComingSoonInfo({ title, type });
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase block mb-2">
              02 // Portfolio Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Selected Projects
            </h2>
          </div>
          <div className="max-w-md text-sm text-slate-400">
            <p>
              Detailed explorations of interface design systems, web architecture, and full-stack concept implementations.
            </p>
            <span className="inline-block mt-1 text-xs text-blue-300 font-mono">
              ✦ All entries presented as Self-Initiated & Concept Projects.
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterCategories.map((category) => {
            const isActive = selectedFilter === category.id;
            return (
              <button
                key={category.id}
                id={`filter-btn-${category.id}`}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-blue-500'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
                } border`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewCaseStudy={onViewCaseStudy}
                onOpenImage={onOpenImage}
                onShowComingSoon={handleShowComingSoon}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/30 border border-slate-800 max-w-lg mx-auto space-y-3">
            <Clock className="w-8 h-8 text-blue-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Future Additions Coming Soon</h4>
            <p className="text-sm text-slate-400">
              New project explorations in this category are currently in development and will appear here shortly.
            </p>
            <button
              onClick={() => setSelectedFilter('all')}
              className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-mono underline"
            >
              Reset filter to view all projects
            </button>
          </div>
        )}
      </div>

      {/* Graceful "Coming Soon" Modal (No fake URLs!) */}
      <Modal
        isOpen={comingSoonInfo !== null}
        onClose={() => setComingSoonInfo(null)}
        title="URL Deployment Status"
        subtitle={comingSoonInfo?.title}
        maxWidth="max-w-md"
      >
        <div className="space-y-5 text-slate-300 text-sm">
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-base">
                {comingSoonInfo?.type === 'live' ? 'Live Deployment Coming Soon' : 'Public Repository Coming Soon'}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                In strict adherence to portfolio authenticity, no mock or placeholder URLs are used.
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            The full case study, wireframes, visual design tokens, and technical architecture for <strong className="text-white">{comingSoonInfo?.title}</strong> are documented comprehensively in the Case Study view.
          </p>

          <button
            onClick={() => setComingSoonInfo(null)}
            className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Understood
          </button>
        </div>
      </Modal>
    </section>
  );
}
