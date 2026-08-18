import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, ExternalLink, Check, Send, Download, Award, Mail, Copy } from 'lucide-react';
import { UserProfile } from '../types';

interface ContactSectionProps {
  profile: UserProfile;
  onOpenPrintModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onOpenPrintModal }) => {
  const [messageText, setMessageText] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [sentStatus, setSentStatus] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const directEmail = 'sohailbatarseh@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSubject = () => `Academic/Research Inquiry from ${senderName || 'Colleague'}`;
  const getBody = () => `Name: ${senderName || 'Not specified'}\nEmail: ${senderEmail || 'Not specified'}\n\nMessage:\n${messageText}`;

  const getMailtoUrl = () => {
    return `mailto:${directEmail}?subject=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getBody())}`;
  };

  const getGmailWebUrl = () => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getBody())}`;
  };

  const copyDraft = () => {
    const draft = `To: ${directEmail}\nSubject: ${getSubject()}\n\n${getBody()}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    // Safe iframe-compatible launcher
    const link = document.createElement('a');
    link.href = getMailtoUrl();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSentStatus(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white relative scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] mb-3">
            <span>Get in Touch</span>
            <span>•</span>
            <span>Academic Collaboration & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-normal text-[#0F172A] tracking-tight">
            Connect, Collaborate & Review Full CV
          </h2>
          <p className="text-base text-[#475569] font-serif-editorial max-w-xl mx-auto mt-2">
            Available for clinical neurology & neurosurgery inquiries, multicenter research collaborations, and academic exchange.
          </p>
        </motion.div>

        {/* Primary Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {/* LinkedIn Profile */}
          <a
            id="contact-linkedin-link"
            href="https://jo.linkedin.com/in/suhel-batarseh-9b6101239"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-2xs group transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-1">
                Professional Network
              </span>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">Suhel Batarseh</p>
              <p className="text-xs text-[#64748B]">LinkedIn • Clinical & Academic updates</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#0F172A] mt-4 group-hover:underline">
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Academic Citations / Scholar */}
          <a
            id="contact-scholar-link"
            href={profile.googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-2xs group transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-[#0F172A]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-1">
                Google Scholar
              </span>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">33+ Publications</p>
              <p className="text-xs text-[#64748B]">Full Citation Profile</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#0F172A] mt-4 group-hover:underline">
              <span>Live Bibliography</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Institutional / Society Memberships */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-2xs group transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block mb-1">
                Affiliations
              </span>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">EAN • AHA • MDS</p>
              <p className="text-xs text-[#64748B]">Active member societies</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#0F172A] mt-4">
              <span>JUST Medicine</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Message Box & Download Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Quick Message Form */}
          <div className="lg:col-span-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E2E8F0]">
              <div>
                <h3 className="text-base font-serif-heading font-semibold text-[#0F172A] mb-0.5">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-[#64748B] font-serif-editorial">
                  Inquire about research collaborations, clinical electives, or request the full CV.
                </p>
              </div>
              
              {/* Clickable & Copyable Direct Email Pill */}
              <div className="flex flex-wrap items-center gap-2 bg-white border border-[#CBD5E1] rounded-xl px-3 py-1.5 shadow-2xs self-start sm:self-auto">
                <a
                  href={`mailto:${directEmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer"
                  title="Click to open default email app"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span>{directEmail}</span>
                </a>
                <span className="text-[#CBD5E1]">|</span>
                <a
                  href={getGmailWebUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-blue-700 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-0.5"
                  title="Compose directly in Gmail Web"
                >
                  <span>Gmail</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span className="text-[#CBD5E1]">|</span>
                <button
                  type="button"
                  id="copy-direct-email-btn"
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-[11px] text-[#64748B] hover:text-[#0F172A] font-medium transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-600 flex items-center gap-0.5 font-semibold">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Copy className="w-3 h-3" /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#475569] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Dr. Jordan Ellis"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg focus:outline-hidden focus:border-[#0F172A] text-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#475569] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jordan.ellis@hospital.edu"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg focus:outline-hidden focus:border-[#0F172A] text-[#0F172A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#475569] mb-1">
                  Message / Inquiry
                </label>
                <textarea
                  rows={3}
                  required
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={`Dear Suhel, I reviewed your research and would like to connect regarding...`}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg focus:outline-hidden focus:border-[#0F172A] text-[#0F172A] resize-none"
                />
              </div>

              {sentStatus && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Email trigger sent to <strong>{directEmail}</strong>!</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-white border border-emerald-300 font-semibold text-emerald-800 hover:bg-emerald-100 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      type="button"
                      onClick={copyDraft}
                      className="px-2.5 py-1 rounded-md bg-emerald-700 text-white font-medium hover:bg-emerald-800 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedDraft ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedDraft ? 'Draft Copied' : 'Copy Draft'}</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={copyDraft}
                  disabled={!messageText.trim()}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] font-medium flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedDraft ? 'Draft Copied to Clipboard' : 'Copy Draft'}</span>
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href={messageText.trim() ? getGmailWebUrl() : `https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                    title="Compose using Gmail Web"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="submit"
                    id="submit-contact-message"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email App</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Formal PDF Export Box */}
          <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-serif-heading font-semibold text-white mb-2">
                Official PDF Dossier
              </h3>
              <p className="text-xs text-slate-300 font-serif-editorial leading-relaxed mb-4">
                View or export a formatted academic printout of this Personal Statement and CV dossier with formal institutional typography.
              </p>
            </div>

            <button
              id="download-full-pdf-btn"
              onClick={onOpenPrintModal}
              className="w-full py-2.5 px-4 rounded-xl bg-white text-[#0F172A] font-semibold text-xs hover:bg-[#F1F5F9] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
            >
              <span>View & Print Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] text-center text-xs text-[#64748B] font-medium space-y-2">
          <p>© {new Date().getFullYear()} {profile.name} • Jordan University of Science and Technology</p>
          <div className="flex items-center justify-center gap-4 text-xs text-[#475569]">
            <a
              href="https://jo.linkedin.com/in/suhel-batarseh-9b6101239"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F172A] underline underline-offset-2 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <span>•</span>
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0F172A] underline underline-offset-2 flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Google Scholar</span>
            </a>
          </div>
          <p className="text-[11px] text-[#94A3B8] mt-1">
            Clinical Neuroscience • Stroke Research • Health Advocacy
          </p>
        </div>
      </div>
    </section>
  );
};
