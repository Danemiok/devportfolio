import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const contactEmail = 'miokdane2006@gmail.com';
  const mapUrl = 'https://www.google.com/maps?q=Passerelles+Numeriques,+Phnom+Penh,+Cambodia&z=16&output=embed';
  const mapsLink = 'https://maps.app.goo.gl/MBK93Wdf5vSSEsA68';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your email app.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
          <div className="mt-4 h-1 w-10 bg-primary rounded-full" />
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm max-w-5xl mb-10 leading-relaxed">
          For this page, I would like to show to you about my contact for everyone who want to contact to me. it is the real of my information, you can contact me by email or phone number.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="rounded-2xl glass-card p-5 md:p-7">
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                    <div className="size-11 rounded-full glass text-primary flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white leading-none mb-2">Location:</p>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Sangkat Tek Thla, Khan Sen Sok, Phnom Penh</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="size-11 rounded-full glass text-primary flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white leading-none mb-2">Email:</p>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">miokdane2006@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="size-11 rounded-full glass text-primary flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white leading-none mb-2">Call:</p>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">+855 81 634 649</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-800/50 glass-card">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-md glass px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-900 shadow-sm transition-colors"
              >
                Open in Maps
                <span aria-hidden="true">↗</span>
              </a>
              <iframe
                title="Google Map of Wat Phnom Daun Penh, Phnom Penh, Cambodia"
                src={mapUrl}
                className="h-[200px] w-full md:h-[250px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-6 md:p-7 rounded-2xl"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs md:text-sm outline-none transition-all focus:border-primary"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs md:text-sm outline-none transition-all focus:border-primary"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs md:text-sm outline-none transition-all focus:border-primary"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs md:text-sm outline-none transition-all focus:border-primary min-h-[180px]"
                  required
                />
              </div>

              {statusMessage && (
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  {statusMessage}
                </p>
              )}

              <div className="pt-2 flex justify-center">
                <button
                  className="btn-primary-glass text-xs font-medium px-4 py-2 cursor-pointer"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
