'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Award, BookOpen, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewport } from '@/utils/animations'
import { cn } from '@/utils/cn'

const cvHighlights = [
  {
    icon: BookOpen,
    color: 'text-accent',
    bg: 'bg-accent/10',
    title: 'Education',
    items: [
      'BSc Computer Science — University of Technology (2022 – Present)',
      'GPA: 8.2 / 10 — Dean\'s List 2023',
      'High School — Science & Technology (Graduated Cum Laude)',
    ],
  },
  {
    icon: Code2,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    title: 'Technical Skills',
    items: [
      'Languages: Python, TypeScript, JavaScript, Java, SQL',
      'Frameworks: React, Next.js, Node.js, Express, TailwindCSS',
      'Tools: Git, Docker, PostgreSQL, Vercel, VS Code',
    ],
  },
  {
    icon: Award,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: 'Achievements',
    items: [
      '1st Place — Regional Science Fair',
      'National Hackathon Finalist (3x)',
      '5-Star Rated Freelance Developer',
      'Full-Stack Internship @ TechStart B.V.',
    ],
  },
]

export function CV() {
  return (
    <section id="cv" className="py-24 lg:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="My Resume"
          title="Curriculum Vitae"
          subtitle="A summary of my education, skills, and key achievements. Download the full CV for complete details."
        />

        {/* Download CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-foreground">
              Want the full picture?
            </p>
            <p className="text-foreground-muted text-sm">
              Download my complete CV as a PDF file.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            href="/cv.pdf"
            target="_blank"
            icon={<Download size={18} />}
            iconPosition="left"
            className="pulse-glow shrink-0"
          >
            Download Full CV
          </Button>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cvHighlights.map((section, index) => (
            <motion.div
              key={section.title}
              variants={index === 0 ? fadeInLeft : index === 2 ? fadeInRight : fadeInUp}
              className={cn(
                'p-6 rounded-2xl border border-border bg-background',
                'shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
                'hover:border-accent/30 transition-all duration-300'
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', section.bg)}>
                  <section.icon size={18} className={section.color} />
                </div>
                <h3 className="font-bold text-foreground">{section.title}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className={cn('mt-1.5 w-1.5 h-1.5 rounded-full shrink-0', section.bg.replace('/10', ''))}>
                    </span>
                    <span className="text-sm text-foreground-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Preview note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center"
        >
          <p className="text-sm text-foreground-subtle flex items-center justify-center gap-2">
            <FileText size={14} />
            PDF available — last updated {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
