import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code2',
    color: 'text-indigo-500',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'JavaScript / TypeScript', level: 30 },
      { name: 'HTML & CSS', level: 55 },
      { name: 'SQL', level: 30 },
      { name: 'Bash / Shell', level: 50 },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Tools',
    icon: 'Layers',
    color: 'text-violet-500',
    gradient: 'from-violet-500/10 to-purple-500/10',
    skills: [
      { name: 'React / Next.js', level: 75 },
      { name: 'Node.js', level: 65 },
      { name: 'TailwindCSS', level: 80 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Docker', level: 55 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: 'Globe',
    color: 'text-cyan-500',
    gradient: 'from-cyan-500/10 to-sky-500/10',
    skills: [
      { name: 'English', level: 95 },
      { name: 'French', level: 70 },
      { name: 'German', level: 100 },
    ],
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    icon: 'Users',
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Teamwork', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Leadership', level: 75 },
      { name: 'Adaptability', level: 90 },
      { name: 'Time Management', level: 95 },
    ],
  },
]
