'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '@/utils/animations'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', 'mb-12 lg:mb-16', className)}>
      {label && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-sm font-semibold tracking-widest uppercase text-accent mb-3"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {/* Accent underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: centered ? 'center' : 'left' }}
        className={cn(
          'h-1 w-16 rounded-full mb-5',
          'bg-gradient-to-r from-accent to-accent-secondary',
          centered ? 'mx-auto' : ''
        )}
      />
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-lg text-foreground-muted max-w-2xl leading-relaxed"
          style={{ margin: centered ? '0 auto' : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader
