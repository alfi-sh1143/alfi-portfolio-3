import React, { useState } from 'react';
import { portfolio } from '../config/portfolio';
import Modal from './Modal';
import { Shield, Cpu, Network, Lock, Zap, Eye, ChevronRight, CheckCircle, Info } from 'lucide-react';

interface ResearchProps {
  onOpenImage: (src: string, alt: string, caption?: string) => void;
}

export default function Research({ onOpenImage }: ResearchProps) {
  const { research } = portfolio;
  const [activePillarModal, setActivePillarModal] = useState<{ title: string; description: string } | null>(null);

  return (
    <section id="research" className="py-24 relative border-t border-slate-800/80 bg-[#070b14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              <Shield className="w-3.5 h-3.5" /> 03 // Academic Research
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Research & Technology
            </h2>
          </div>
          <div className="max-w-md text-sm text-slate-400">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50 inline-block mb-2">
              {research.category}
            </span>
            <p className="leading-relaxed">
              Investigating distributed, privacy-preserving machine learning paradigms for next-generation edge cyber defense.
            </p>
          </div>
        </div>

        {/* Central Research Showcase Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#090f1e] to-[#070c18] border border-blue-900/40 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Detailed Technical Concept */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Undergraduate Research Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-snug">
                  {research.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {research.concept}
                </p>
              </div>

              {/* Research Areas Tag Cloud */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Investigative Sub-Domains:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {research.areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-3 py-1 rounded-md bg-slate-900/90 text-blue-200 border border-blue-950/80 font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Diagram Preview with Lightbox Trigger */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#060a14] group cursor-pointer shadow-xl"
                onClick={() => onOpenImage(research.diagramImage, research.title, "Federated IDS Network Architecture & Aggregation Model")}
              >
                <img
                  src={research.diagramImage}
                  alt="Federated Learning Architecture Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-slate-300 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700">
                  <span className="font-mono text-blue-300 flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5" /> Edge Node Architecture
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-white">
                    <Eye className="w-3 h-3" /> Expand
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Architectural Pillars */}
          <div className="pt-6 border-t border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Core Architectural Pillars
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {research.keyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePillarModal(pillar)}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-400">Pillar 0{idx + 1}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {pillar.title}
                  </h5>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pillar Detail Modal */}
      <Modal
        isOpen={activePillarModal !== null}
        onClose={() => setActivePillarModal(null)}
        title={activePillarModal?.title}
        subtitle="Architectural Pillar Detail"
        maxWidth="max-w-md"
      >
        <div className="space-y-4 text-slate-300 text-sm">
          <p className="leading-relaxed">
            {activePillarModal?.description}
          </p>

          <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-blue-300 space-y-1">
            <div className="font-semibold text-white">Research Methodology Note</div>
            <div>
              Designed to overcome IoT constraints: limited battery life, restricted RAM, and intermittent wireless edge connectivity.
            </div>
          </div>

          <button
            onClick={() => setActivePillarModal(null)}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
