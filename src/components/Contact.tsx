import React, { useState } from 'react';
import { Mail, MapPin, GraduationCap, Copy, Check, Send, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { validateContactForm, ContactFormData } from '../utils/portfolio';
import { SocialLinks } from './SocialLinks';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactFormData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If already touched, validate live
    if (touched[name]) {
      const result = validateContactForm({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: result.errors[name] || '',
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const result = validateContactForm(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: result.errors[name] || '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const result = validateContactForm(formData);
    setErrors(result.errors);

    if (!result.isValid) {
      return;
    }

    setIsSubmitting(true);
    // Simulate swift client processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage({ ...formData });
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedMessage(null);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTouched({});
    setErrors({});
  };

  // Pre-generate mailto link so user can immediately send via their mail client
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Amit,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient lighting */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 text-[#0066ff] text-xs font-bold uppercase tracking-widest mb-3">
            Contact Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            LET'S WORK TOGETHER
          </h2>
          <div className="w-16 h-1 bg-[#0066ff] rounded-full mt-3 mb-4 shadow-[0_0_10px_#0066ff]" />
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Have a project idea, collaboration opportunity or simply want to connect? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0c101a] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Contact Details</h3>
                <p className="text-sm text-slate-400">
                  I'm currently available for freelance projects, internships, and developer collaborations.
                </p>
              </div>

              {/* Email item with Quick Copy */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#0066ff]/10 text-[#0066ff] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#0066ff]">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-white hover:text-blue-400 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location info */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0066ff]/10 text-[#0066ff] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#0066ff]">
                    Location
                  </p>
                  <p className="text-sm font-medium text-white">
                    {personalInfo.location} · Remote Available
                  </p>
                </div>
              </div>

              {/* Academic info */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0066ff]/10 text-[#0066ff] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#0066ff]">
                    Education
                  </p>
                  <p className="text-sm font-medium text-white">
                    {personalInfo.education}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                  Connect on Social Networks
                </p>
                <SocialLinks variant="contact" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0c101a] border border-white/10 shadow-xl">
              
              {submittedMessage ? (
                /* Success Feedback State */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Prepared!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{submittedMessage.name}</strong>. Your message details have been validated.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-left text-xs text-slate-300 max-w-md mx-auto space-y-1.5">
                    <p><strong className="text-slate-400">Subject:</strong> {submittedMessage.subject}</p>
                    <p><strong className="text-slate-400">Email:</strong> {submittedMessage.email}</p>
                    <p className="line-clamp-2"><strong className="text-slate-400">Note:</strong> {submittedMessage.message}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <span>Open in Email App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 max-w-md mx-auto pt-2">
                    Developer Notice: To route submissions directly into your inbox automatically via HTTP, link a free service like <code>Formspree.io</code> or <code>EmailJS</code> in <code>src/components/Contact.tsx</code>.
                  </p>
                </div>
              ) : (
                /* Interactive Form with Validation */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Your Name <span className="text-[#0066ff]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Amit Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition-all ${
                          touched.name && errors.name
                            ? 'border-rose-500/80 bg-rose-500/5'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Your Email <span className="text-[#0066ff]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition-all ${
                          touched.email && errors.email
                            ? 'border-rose-500/80 bg-rose-500/5'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Subject <span className="text-[#0066ff]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Web Development Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition-all ${
                        touched.subject && errors.subject
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Message <span className="text-[#0066ff]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Hi Amit, I'd like to talk about building a website..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition-all resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Validating...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-xs text-slate-400">
                      Response within 24 hours
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
