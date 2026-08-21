import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Milestone } from '../types';
import { affiliationsAndCollaborations } from '../data/statementData';
import { 
  FileText, 
  Stethoscope, 
  Users, 
  Award, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  Search,
  Globe,
  Layers,
  Clock,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface Chapter3MilestonesProps {
  milestones: Milestone[];
  onSelectMilestone: (milestone: Milestone) => void;
}

export const Chapter3Milestones: React.FC<Chapter3MilestonesProps> = ({
  milestones,
  onSelectMilestone,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  const categories = [
    { id: 'all', label: 'All Records', count: milestones.length },
    { id: 'research', label: 'Peer Reviewed Studies', count: milestones.filter(m => m.category === 'research').length },
    { id: 'award', label: 'Awards & Honors', count: milestones.filter(m => m.category === 'award').length },
    { id: 'leadership', label: 'Global Fellowships', count: milestones.filter(m => m.category === 'leadership').length },
    { id: 'clinical', label: 'Clinical & Advocacy', count: milestones.filter(m => m.category === 'clinical').length },
  ];

  const filteredMilestones = useMemo(() => {
    return milestones.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.title.toLowerCase().includes(query) ||
        item.institutionOrJournal.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        (item.citationOrLink && item.citationOrLink.toLowerCase().includes(query)) ||
        item.keyHighlights.some(h => h.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [milestones, activeCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'research':
        return <FileText className="w-4 h-4 text-[#0F172A]" />;
      case 'clinical':
        return <Stethoscope className="w-4 h-4 text-emerald-800" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-slate-800" />;
      case 'award':
        return <Award className="w-4 h-4 text-amber-800" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-700" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'research':
        return 'bg-slate-100 text-[#0F172A] border-slate-300';
      case 'clinical':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'leadership':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'award':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <article
      id="milestones"
      className="py-16 md:py-24 border-t border-[#E2E8F0] relative scroll-mt-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] mb-3">
            <span>Chapter III</span>
            <span>•</span>
            <span>Academic & Research Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-normal text-[#0F172A] tracking-tight">
            Selected Research Samples, Honors & Global Delegations
          </h2>
          <p className="text-sm text-[#475569] mt-2 max-w-2xl mx-auto font-serif-editorial leading-relaxed">
            Featured highlights and representative studies from a comprehensive portfolio of <span className="font-semibold text-[#0F172A]">33+ peer reviewed publications</span> across <em>European Stroke Journal</em>, <em>Neurology</em>, <em>Neurosurgery</em>, and <em>Circulation</em>.
          </p>
        </motion.div>

        {/* Google Scholar Live Full Bibliography Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 p-5 sm:p-6 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 text-white">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-medium mb-1.5 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Author Account • 33+ Published Contributions</span>
              </div>
              <h3 className="text-lg font-serif-heading font-semibold text-white mb-1">
                Complete Academic Bibliography on Google Scholar
              </h3>
              <p className="text-xs text-slate-300 max-w-xl font-serif-editorial leading-relaxed">
                The milestones showcased below are representative study samples. For the complete, real time citation index, full author list, and all 33+ journal articles and meta analyses, please explore the official Google Scholar profile.
              </p>
            </div>
          </div>

          <a
            id="google-scholar-banner-link"
            href="https://scholar.google.com/citations?user=bPlVQPMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-[#0F172A] font-semibold text-xs hover:bg-[#F8FAFC] transition-all flex items-center justify-center gap-2 shadow-xs hover:shadow-md cursor-pointer shrink-0 hover:-translate-y-0.5"
          >
            <span>View Full Google Scholar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Global Collaborations Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 mb-10 shadow-2xs"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0F172A]" />
              <span>Key International Research Affiliations</span>
            </h3>
            <span className="text-xs text-[#64748B] font-medium">Harvard MGH • EAN • Mission Brain</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {affiliationsAndCollaborations.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E2E8F0] p-3.5 rounded-xl hover:border-[#CBD5E1] transition-all">
                <span className="text-[11px] font-bold text-[#0F172A] block leading-tight mb-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#64748B] font-medium block mb-1">
                  {item.role} • {item.period}
                </span>
                <p className="text-xs text-[#475569] leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search studies (e.g. stroke, epilepsy, ALS, POCUS, AHA)..."
              className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
            />
          </div>

          {/* View Mode Toggle: Grid vs Timeline */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="flex items-center gap-1 p-1 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0]">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="Card Grid View"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Card Grid</span>
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'timeline'
                    ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="Chronological Timeline View"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-[#0F172A] shadow-xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/50'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1.5 px-1.5 py-0.2 bg-black/5 rounded-full text-[10px] font-semibold">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Results Counter */}
        {searchQuery && (
          <p className="text-xs text-[#64748B] mb-4">
            Showing {filteredMilestones.length} result(s) matching "{searchQuery}"
          </p>
        )}

        {/* Milestone Display: Grid Mode */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMilestones.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                id={`milestone-card-${item.id}`}
                onClick={() => onSelectMilestone(item)}
                className="group bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-6 transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Metadata Line */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.8 rounded-full text-xs font-medium border ${getCategoryBadgeClass(item.category)}`}>
                      {getCategoryIcon(item.category)}
                      <span className="capitalize">{item.category}</span>
                    </div>

                    <span className="text-xs text-[#64748B] font-medium">
                      {item.dateRange}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base sm:text-lg font-serif-heading font-semibold text-[#0F172A] group-hover:text-[#334155] transition-colors mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#64748B] font-medium mb-3">
                    <span className="truncate max-w-[240px]">{item.institutionOrJournal}</span>
                    {item.metrics && (
                      <span className="text-[#0F172A] font-bold bg-[#E2E8F0]/70 px-2 py-0.5 rounded text-[11px]">
                        {item.metrics.value}
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm font-serif-editorial text-[#475569] leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-5">
                    {item.keyHighlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F172A] shrink-0 mt-0.5" />
                        <span className="leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#0F172A] font-semibold">
                  <span className="font-medium text-[#475569]">{item.roleOrStatus}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Abstract</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Milestone Display: Timeline Mode */
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#CBD5E1] space-y-8 max-w-3xl mx-auto my-4">
            {filteredMilestones.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                id={`milestone-timeline-${item.id}`}
                onClick={() => onSelectMilestone(item)}
                className="relative group cursor-pointer"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-[#0F172A] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  {getCategoryIcon(item.category)}
                </div>

                {/* Timeline Card */}
                <div className="bg-[#F8FAFC] group-hover:bg-white border border-[#E2E8F0] group-hover:border-[#CBD5E1] rounded-xl p-5 shadow-2xs group-hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#0F172A]">
                      {item.dateRange}
                    </span>
                    <span className={`text-[11px] px-2 py-0.5 rounded border ${getCategoryBadgeClass(item.category)}`}>
                      {item.roleOrStatus}
                    </span>
                  </div>

                  <h3 className="text-base font-serif-heading font-semibold text-[#0F172A] group-hover:text-[#334155] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mb-2">{item.institutionOrJournal}</p>

                  <p className="text-xs sm:text-sm font-serif-editorial text-[#475569] leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#0F172A] font-semibold pt-2 border-t border-[#E2E8F0]">
                    <span>{item.metrics ? `${item.metrics.label}: ${item.metrics.value}` : item.institutionOrJournal}</span>
                    <span className="flex items-center gap-1">
                      <span>Full Abstract & Summary</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Chapter Transition Footer */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('journey');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <span>← Previous: Chapter II</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('vision');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
          >
            <span>Next: Chapter IV: Vision for the Future</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
