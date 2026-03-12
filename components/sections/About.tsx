'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp, viewport } from '@/utils/animations'

const highlights = [
  {
    icon: Target,
    title: 'My Goal',
    description:
      'My goal is to become a well-rounded IT professional with strong technical and problem-solving skills. I want to continuously learn new technologies and build products that are useful for people. In the long term, I aim to develop the skills that allow me to work from anywhere in the world while building meaningful digital solutions.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Lightbulb,
    title: 'My Passion',
    description:
      'I\'m especially interested in the rapid development of artificial intelligence and how it can be combined with modern web technologies. I enjoy building things, experimenting with new tools, and understanding how technology can improve everyday life.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Heart,
    title: 'What Drives Me',
    description:
      'What drives me is curiosity and continuous learning. Technology evolves quickly, and I enjoy the challenge of constantly improving my skills and discovering new possibilities. Building projects, solving problems, and turning ideas into real applications motivates me to keep growing every day.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Who I Am"
          title="About Me"
          subtitle="A little bit about my background, what drives me, and where I want to go."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div
                className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 rounded-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-accent/5 to-accent-secondary/5 rounded-2xl"
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-background-muted">
                <Image
                  src="/profilbild.jpg"
                  alt="Kaya Ercan — About photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 right-0 left-auto lg:-right-8 bg-background border border-border rounded-2xl p-4 shadow-[var(--shadow-lg)] flex gap-6"
              >
                {[
                  { value: '2+', label: 'Years Coding' },
                  { value: '10+', label: 'Projects Built' },
                  { value: '6+', label: 'Clients Served' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-black gradient-text">{stat.value}</p>
                    <p className="text-xs text-foreground-muted whitespace-nowrap">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="pt-10 lg:pt-0"
          >
            <div className="space-y-5 text-foreground-muted leading-relaxed mb-10">
              <p>
                Hey! I&apos;m <strong className="text-foreground font-semibold">Kaya Ercan</strong>, a
                Business Informatics student at Hochschule Worms, currently living in Germany.
                I&apos;m passionate about building modern websites and web applications, especially where
                technology and artificial intelligence come together.
              </p>
              <p>
                My journey into tech started when I was 14 years old, when I built my first website.
                After taking a break for a while, I recently returned to coding about six months ago,
                and since then I&apos;ve been fully focused on learning and improving my skills again.
              </p>
              <p>
                Today, I combine my studies in Business Informatics with web development in my free time,
                working on personal projects and exploring new technologies in modern web development and AI.
              </p>
              <p>
                Outside of tech, I enjoy healthiness and sports in general, and I like learning about
                startups, innovation, and new ideas that could shape the future of technology.
              </p>
            </div>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
