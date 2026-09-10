import React from 'react';
import { portfolio } from '../config/portfolio';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Sparkles, Layout, Cpu, ShieldCheck, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onOpenImage: (src: string, alt: string, caption?: string) => void;
}

export default function Hero({ onOpenCV, onOpenImage }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">{portfolio.contact.availability}</span>
            </div>

            {/* Typography Stack */}
            <div className="space-y-2">
              <span className="text-base sm:text-lg font-mono text-blue-400 font-medium block">
                {portfolio.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
                {portfolio.name}
              </h1>
              <div className="pt-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
                  {portfolio.role}
                </h2>
                <span className="inline-block mt-1.5 text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                  {portfolio.secondaryRole}
                </span>
              </div>
            </div>

            {/* Supporting Statements */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {portfolio.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed border-l-2 border-blue-500/50 pl-3">
                {portfolio.subTagline}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-xl shadow-blue-600/30 transition-all hover:translate-y-[-2px]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-semibold border border-slate-800 hover:border-slate-700 transition-all hover:translate-y-[-2px]"
              >
                Contact Me
              </a>

              <button
                id="hero-cv-btn"
                onClick={onOpenCV}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white text-sm font-medium border border-slate-800/80 transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download CV
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolio.contact.email}`}
                aria-label="Send Email"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Photograph & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-[4/5] max-w-full">
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-3xl blur-md opacity-80" />

              {/* Photograph Frame */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0c1220] shadow-2xl cursor-pointer group"
                onClick={() => onOpenImage(portfolio.profileImage, portfolio.name, "Alfi Shahriyar — UI/UX Designer & Front-End Developer")}
              >
                <img
                  src={portfolio.profileImage}
                  alt={portfolio.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-950/75 backdrop-blur-md border border-slate-800 text-left">
                  <div className="text-white text-xs font-bold font-display">{portfolio.name}</div>
                  <div className="text-[11px] text-blue-300 font-mono">BSc CSE • CGPA 3.94</div>
                </div>
              </div>

              {/* Floating UI Badges */}
              {/* 1. UI/UX Design Badge (Top Left) */}
              <div className="absolute -top-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-[#0d1424]/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5 animate-bounce-slow">
                <Layout className="w-3.5 h-3.5 text-blue-400" />
                UI/UX Design
              </div>

              {/* 2. Figma Badge (Top Right) */}
              <div className="absolute top-12 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl bg-[#0d1424]/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Figma
              </div>

              {/* 3. Next.js & React (Middle Left) */}
              <div className="absolute top-1/2 -left-4 sm:-left-8 px-3 py-1.5 rounded-xl bg-[#0d1424]/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                Next.js
              </div>

              {/* 4. AI/ML Badge (Bottom Right) */}
              <div className="absolute bottom-20 -right-3 sm:-right-6 px-3 py-1.5 rounded-xl bg-[#0d1424]/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                AI/ML
              </div>

              {/* 5. Cybersecurity Badge (Bottom Left) */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-[#0d1424]/90 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Cybersecurity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
