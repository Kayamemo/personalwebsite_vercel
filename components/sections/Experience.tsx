'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { fadeInLeft, fadeInRight, fadeInUp, viewport } from '@/utils/animations'
import { timelineItems } from '@/data/experience'
import { cn } from '@/utils/cn'
import type { TimelineItem } from '@/types'

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const isLeft = index % 2 === 0
  const isWork = item.type === 'work'

  return (
    <div className={cn('relative flex items-start gap-8', isLeft ? 'flex-row' : 'flex-row-reverse')}>
      {/* Content */}
      <motion.div
        variants={isLeft ? fadeInLeft : fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex-1"
      >
        <motion.div
          className={cn(
            'p-6 rounded-2xl border border-border bg-card',
            'hover:border-accent/30 transition-all duration-300',
            'shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
            isLeft ? 'mr-0 lg:mr-8' : 'ml-0 lg:ml-8'
          )}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-bold text-foreground text-lg leading-tight">{item.title}</h3>
              <p className="font-semibold text-accent mt-0.5">{item.organization}</p>
            </div>
            <div
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                isWork ? 'bg-accent/10 text-accent' : 'bg-violet-500/10 text-violet-500'
              )}
            >
              {isWork ? <Briefcase size={18} /> : <GraduationCap size={18} />}
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
              <Calendar size={12} />
              {item.startDate} — {item.endDate}
            </span>
            {item.location && (
              <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
                <MapPin size={12} />
                {item.location}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-foreground-muted leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Highlights */}
          {item.highlights.length > 0 && (
            <ul className="space-y-2 mb-4">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground-muted">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Timeline dot (only visible on lg screens) */}
      <div className="hidden lg:flex flex-col items-center shrink-0 relative" aria-hidden="true">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={cn(
            'w-12 h-12 rounded-full border-4 border-background flex items-center justify-center z-10',
            isWork ? 'bg-accent' : 'bg-violet-500'
          )}
        >
          {isWork ? (
            <Briefcase size={16} className="text-white" />
          ) : (
            <GraduationCap size={16} className="text-white" />
          )}
        </motion.div>
      </div>

      {/* Empty half for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="My Journey"
          title="Experience & Education"
          subtitle="The milestones, roles, and learning experiences that have shaped me into the developer I am today."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8 lg:space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
