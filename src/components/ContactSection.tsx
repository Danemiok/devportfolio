import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Touch Me</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              I welcome conversations about new projects, creative initiatives, and ways to help achieve your vision.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium">dane.miok@student.passerellesnumeriques.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-medium">Passerelles Numériques Cambodia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium">+855 816 34649</p>
                </div>
              </div>
              <div className="pt-6 flex gap-4">
                <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Github size={23} />
                </a>
                <a href="https://www.linkedin.com/in/dane-miok-2789563a2" className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Linkedin size={23} />

                </a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all"
                  placeholder="Dane@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all"
                  placeholder="Tell me about your project..."
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer" type="submit">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
