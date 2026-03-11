'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, scaleIn, viewport } from '@/utils/animations'
import { projects } from '@/data/projects'
import { cn } from '@/utils/cn'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What I've Built"
          title="Projects"
          subtitle="A selection of personal projects, university work, and freelance builds."
        />

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="mb-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {featured.map((project) => (
                <motion.article
                  key={project.id}
                  variants={scaleIn}
                  className={cn(
                    'group relative rounded-2xl overflow-hidden border border-border',
                    'bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]',
                    'transition-all duration-300 hover:border-accent/30'
                  )}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    <Star size={11} className="fill-white" />
                    Featured
                  </div>

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-background-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={15} />
                          Source
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        )}

        {/* Rest of projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((project) => (
            <motion.article
              key={project.id}
              variants={scaleIn}
              className={cn(
                'group rounded-2xl overflow-hidden border border-border',
                'bg-card shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
                'transition-all duration-300 hover:border-accent/30',
                'flex flex-col'
              )}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-background-muted shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-foreground text-base mb-1.5 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge>+{project.tags.length - 3}</Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-3 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground-muted hover:text-foreground transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={13} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
