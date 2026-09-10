import React, { useState } from 'react';
import { Layers, Sparkles, Check, ChevronRight, Eye, Sliders, Bell } from 'lucide-react';

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'typography'>('components');
  const [testInputValue, setTestInputValue] = useState('Interactive UI Input Test');
  const [buttonState, setButtonState] = useState<'idle' | 'clicked'>('idle');

  return (
    <section id="design-system" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase block mb-2">
              08 // Craft & Precision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              Design System Showcase
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            A live, interactive demonstration of the core UI tokens, ergonomic component primitives, and typographic ratios powering this portfolio.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 w-fit mb-8">
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'components'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            UI Components & States
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'tokens'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Color Palette & Tokens
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'typography'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Typographic Scale
          </button>
        </div>

        {/* Tab Content 1: Components */}
        {activeTab === 'components' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1: Buttons & Triggers */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Button Variants</span>
                <span className="text-[10px] font-mono text-blue-400">Interactive</span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setButtonState('clicked');
                    setTimeout(() => setButtonState('idle'), 1500);
                  }}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium text-xs rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  {buttonState === 'clicked' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" /> Interaction Triggered!
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Primary Interactive Button
                    </>
                  )}
                </button>

                <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-2">
                  Secondary Neutral Button
                </button>

                <button className="w-full py-2.5 px-4 text-slate-400 hover:text-blue-300 font-medium text-xs rounded-xl hover:bg-blue-950/30 transition-colors flex items-center justify-center gap-2">
                  Ghost Action Link <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column 2: Form Inputs & Fields */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Input Primitives</span>
                <span className="text-[10px] font-mono text-emerald-400">Live Focus State</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Form Control Text Field
                  </label>
                  <input
                    type="text"
                    value={testInputValue}
                    onChange={(e) => setTestInputValue(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-all"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">
                    WCAG AA compliant focus ring
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Status Pill Badges
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      Active / Verified
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-950/60 text-blue-300 border border-blue-800/40">
                      In Development
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                      Research Node
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Surface & Elevation */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Surface Elevation</span>
                <span className="text-[10px] font-mono text-cyan-400">Layer Hierarchy</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#080c14] border border-slate-800/80 text-xs text-slate-400">
                  <strong className="text-slate-200 block mb-0.5">Level 0: Base Surface</strong>
                  Deep Obsidian Canvas (#070a12)
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d1424] border border-slate-800 text-xs text-slate-400">
                  <strong className="text-slate-200 block mb-0.5">Level 1: Container Card</strong>
                  Secondary Slate Surface (#0d1424)
                </div>

                <div className="p-3.5 rounded-xl bg-[#111a30] border border-blue-900/40 text-xs text-blue-200 shadow-md">
                  <strong className="text-white block mb-0.5">Level 2: Floating Popover</strong>
                  High-Contrast Accent Layer (#111a30)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Color Palette */}
        {activeTab === 'tokens' && (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Canvas Obsidian', hex: '#070a12', role: 'Main Background' },
              { name: 'Card Deep Navy', hex: '#0b1120', role: 'Component Card' },
              { name: 'Electric Blue', hex: '#2563eb', role: 'Primary Trigger / CTA' },
              { name: 'Cyan Highlight', hex: '#06b6d4', role: 'Accent Vector' },
              { name: 'Slate Border', hex: '#1e293b', role: 'Divider & Stroke' },
              { name: 'Text Pure Light', hex: '#f8fafc', role: 'H1 Display Heading' },
              { name: 'Text Muted Slate', hex: '#94a3b8', role: 'Body Copy Reading' },
              { name: 'Success Emerald', hex: '#10b981', role: 'Verified Indicator' }
            ].map((token) => (
              <div key={token.hex} className="p-4 rounded-xl bg-[#0b1120] border border-slate-800 space-y-3">
                <div
                  className="w-full h-14 rounded-lg border border-slate-700/50 shadow-inner"
                  style={{ backgroundColor: token.hex }}
                />
                <div>
                  <div className="text-xs font-bold text-white">{token.name}</div>
                  <div className="text-[11px] font-mono text-blue-400">{token.hex}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{token.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Typography */}
        {activeTab === 'typography' && (
          <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 space-y-6">
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-white">Syne Display Typeface</span>
                <span className="text-xs font-mono text-slate-400">Headings & Hero Ratios</span>
              </div>
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <span className="font-sans text-lg font-medium text-slate-200">Plus Jakarta Sans Body Typeface</span>
                <span className="text-xs font-mono text-slate-400">Optical 1.6 Line-Height Body</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-300">JetBrains Mono Code Typeface</span>
                <span className="text-xs font-mono text-slate-400">Telemetry, Steps & Stats</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
