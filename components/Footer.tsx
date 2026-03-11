'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { fadeInUp, viewport } from '@/utils/animations'
import { cn } from '@/utils/cn'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:kercanprivate@gmail.com', label: 'Email' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-background-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
        >
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-black gradient-text mb-3 block hover:opacity-80 transition-opacity"
              aria-label="Back to top"
            >
              YN.
            </button>
            <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
              Student, developer, and dreamer building things that matter one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-foreground-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center',
                    'bg-background border border-border text-foreground-muted',
                    'hover:text-accent hover:border-accent/50 hover:bg-accent/5',
                    'transition-all duration-200'
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-sm text-foreground-subtle flex items-center gap-1.5">
            © {new Date().getFullYear()} Your Name. Made with{' '}
            <Heart size={13} className="text-rose-500 fill-rose-500" /> in Amsterdam.
          </p>
          <p className="text-xs text-foreground-subtle">
            Built with Next.js &amp; TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
