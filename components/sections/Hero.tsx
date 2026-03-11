'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ArrowRight, ChevronDown, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { heroContainer, heroItem } from '@/utils/animations'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status badge */}
            <motion.div variants={heroItem} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-foreground-muted font-medium">
                Open to opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={heroItem}
              className="text-lg font-medium text-foreground-muted mb-2"
            >
              Hi there, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={heroItem}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none"
            >
              <span className="gradient-text">Kaya Ercan</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={heroItem}
              className="text-xl sm:text-2xl font-semibold text-foreground-muted mb-6"
            >
              Student &middot; Developer &middot; Tech Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-10 max-w-xl lg:max-w-none"
            >
              I&apos;m a passionate computer science student who loves turning ideas into
              beautiful, functional web experiences. Currently exploring AI, building side
              projects, and preparing to make an impact in the tech world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/cv.pdf"
                target="_blank"
                icon={<Download size={18} />}
                iconPosition="left"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              variants={heroItem}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <span className="text-sm text-foreground-subtle">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-border text-foreground-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={heroItem}
            className="relative shrink-0"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/30 blur-xl" aria-hidden="true" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-secondary" aria-hidden="true" />

            {/* Profile image container */}
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/profilbild.jpg"
                alt="Kaya Ercan — Profile Photo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              />
            </motion.div>

            {/* Floating badge — Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, ease: 'backOut' }}
              className="absolute -bottom-3 -left-6 bg-background border border-border rounded-2xl px-4 py-2 shadow-[var(--shadow-md)]"
            >
              <p className="text-xs text-foreground-muted font-medium">Experience</p>
              <p className="text-sm font-bold text-foreground">2+ Years</p>
            </motion.div>

            {/* Floating badge — Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, ease: 'backOut' }}
              className="absolute -top-3 -right-6 bg-background border border-border rounded-2xl px-4 py-2 shadow-[var(--shadow-md)]"
            >
              <p className="text-xs text-foreground-muted font-medium">Projects</p>
              <p className="text-sm font-bold text-foreground">10+ Built</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground-subtle hover:text-foreground-muted transition-colors group"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="group-hover:text-accent transition-colors" />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
