'use client'

import { motion } from 'framer-motion'
import {
  Cpu, Brain, Rocket, Dumbbell, BookOpen, Palette, Globe, Music,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { staggerContainer, scaleIn, viewport } from '@/utils/animations'
import { interests } from '@/data/interests'
import { cn } from '@/utils/cn'

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Brain,
  Rocket,
  Dumbbell,
  BookOpen,
  Palette,
  Globe,
  Music,
}

export function Interests() {
  return (
    <section id="interests" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Beyond the Code"
          title="Interests & Passions"
          subtitle="The things that inspire, energise, and drive me outside of my professional work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {interests.map((interest) => {
            const Icon = iconMap[interest.icon] ?? Cpu

            return (
              <motion.div
                key={interest.id}
                variants={scaleIn}
                className={cn(
                  'group p-5 rounded-2xl border border-border',
                  'bg-card hover:border-accent/30',
                  'transition-all duration-300 cursor-default',
                  'text-center'
                )}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {/* Icon */}
                <motion.div
                  className={cn(
                    'w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center',
                    'bg-background-subtle border border-border',
                    'group-hover:bg-background-muted transition-colors duration-200'
                  )}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon
                    size={26}
                    className={cn(
                      'transition-colors duration-300',
                      'text-foreground-muted group-hover:text-current',
                      interest.color
                    )}
                  />
                </motion.div>

                {/* Label */}
                <h3 className="font-semibold text-foreground text-sm mb-2">
                  {interest.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests
