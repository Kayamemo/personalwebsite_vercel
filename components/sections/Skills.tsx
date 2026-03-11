'use client'

import { motion } from 'framer-motion'
import {
  Code2, Layers, Globe, Users
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { staggerContainer, scaleIn, viewport } from '@/utils/animations'
import { skillCategories } from '@/data/skills'
import { cn } from '@/utils/cn'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Globe,
  Users,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What I Know"
          title="Skills & Expertise"
          subtitle="A snapshot of my technical abilities, languages, tools, and the soft skills I bring to every team."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Code2
            return (
              <motion.div
                key={category.id}
                variants={scaleIn}
                className={cn(
                  'relative p-6 rounded-2xl border border-border',
                  'bg-card hover:border-accent/30',
                  'transition-all duration-300 group',
                  'overflow-hidden'
                )}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    `bg-gradient-to-br ${category.gradient}`
                  )}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-5',
                      `bg-gradient-to-br ${category.gradient}`,
                      'border border-border'
                    )}
                  >
                    <Icon size={22} className={category.color} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-foreground text-lg mb-5">
                    {category.name}
                  </h3>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground-muted">
                            {skill.name}
                          </span>
                          {skill.level !== undefined && (
                            <span className={cn('text-xs font-semibold', category.color)}>
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        {skill.level !== undefined && (
                          <div className="h-1.5 bg-background-muted rounded-full overflow-hidden">
                            <motion.div
                              className={cn(
                                'h-full rounded-full',
                                `bg-gradient-to-r ${category.gradient.replace('/10', '')}`
                              )}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
