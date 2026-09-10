import React from 'react';
import { ProjectItem } from '../types';
import { Layers, ArrowUpRight, Github, ExternalLink, Sparkles, Clock, Eye } from 'lucide-react';

interface ProjectCardProps {
  key?: React.Key;
  project: ProjectItem;
  onViewCaseStudy: (project: ProjectItem) => void;
  onOpenImage: (src: string, alt: string, caption?: string) => void;
  onShowComingSoon: (title: string, type: 'live' | 'github') => void;
}

export default function ProjectCard({
  project,
  onViewCaseStudy,
  onOpenImage,
  onShowComingSoon
}: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl bg-[#0b1120] border border-slate-800/90 overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/30 flex flex-col justify-between">
      <div>
        {/* Project Image Banner with Lightbox Trigger */}
        <div
          className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#070d18] cursor-pointer"
          onClick={() => onOpenImage(project.image, project.name, `${project.name} - ${project.type}`)}
        >
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

          {/* Classification Badge (Top Left) */}
          <div className="absolute top-3.5 left-3.5">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#070e1e]/90 backdrop-blur-md text-blue-300 border border-blue-900/60 shadow-md">
              {project.nature}
            </span>
          </div>

          {/* Hover zoom cue (Top Right) */}
          <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 p-2 rounded-lg text-slate-300 text-xs border border-slate-700 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            Zoom
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-medium text-blue-400 uppercase">
                {project.categoryLabel}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {project.type}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tools List */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
        <div className="pt-4 flex flex-wrap items-center justify-between gap-2">
          {/* View Case Study Button */}
          <button
            id={`case-study-btn-${project.id}`}
            onClick={() => onViewCaseStudy(project)}
            className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
          >
            <Layers className="w-3.5 h-3.5" />
            View Case Study
          </button>

          {/* Secondary links (Always graceful Coming Soon, no fake URLs!) */}
          <div className="flex items-center gap-2">
            <button
              id={`live-btn-${project.id}`}
              onClick={() => onShowComingSoon(project.name, 'live')}
              aria-label={`Live website for ${project.name}`}
              className="flex items-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 hover:border-slate-700 transition-colors"
              title="Live preview status"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Live</span>
            </button>

            <button
              id={`github-btn-${project.id}`}
              onClick={() => onShowComingSoon(project.name, 'github')}
              aria-label={`GitHub repository for ${project.name}`}
              className="flex items-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-800 hover:border-slate-700 transition-colors"
              title="Source repository status"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Repo</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
