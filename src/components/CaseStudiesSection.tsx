import React from 'react';
import { portfolio } from '../config/portfolio';
import { ProjectItem } from '../types';
import { Layers, ArrowRight, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface CaseStudiesSectionProps {
  onViewCaseStudy: (project: ProjectItem) => void;
  onOpenImage: (src: string, alt: string, caption?: string) => void;
}

export default function CaseStudiesSection({
  onViewCaseStudy,
  onOpenImage
}: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="py-24 relative border-t border-slate-800/80 bg-[#060a14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase block mb-2">
              10 // In-Depth Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              UX Case Studies
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            End-to-end design rationales from user problem identification to information architecture, visual design systems, and front-end engineering notes.
          </p>
        </div>

        {/* Featured In-Depth Case Study Showcase Cards */}
        <div className="space-y-8">
          {portfolio.projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0b1120] border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Thumbnail & Trigger */}
                <div className="lg:col-span-5">
                  <div
                    className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-[#080d1a] group cursor-pointer shadow-lg"
                    onClick={() => onOpenImage(project.image, project.name, `${project.name} - Case Study Overview`)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/75 text-xs text-blue-300 font-mono border border-slate-700">
                      {project.nature}
                    </div>
                  </div>
                </div>

                {/* Right: Case Study Story Highlights */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.caseStudy.overview}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 py-2 text-xs text-slate-400">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <strong className="text-slate-200 block mb-1">Target Users</strong>
                      {project.caseStudy.targetUsers}
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <strong className="text-slate-200 block mb-1">Impact / Outcome</strong>
                      {project.caseStudy.qualitativeOutcome}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onViewCaseStudy(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Full Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
