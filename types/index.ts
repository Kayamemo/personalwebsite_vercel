export interface NavItem {
  label: string
  href: string
}

export interface Skill {
  name: string
  level?: number // 0-100, optional for progress bar display
}

export interface SkillCategory {
  id: string
  name: string
  icon: string // Lucide icon name
  color: string // Tailwind accent color class
  gradient: string // Tailwind gradient class
  skills: Skill[]
}

export interface WorkItem {
  type: 'work'
  id: string
  title: string
  organization: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  description: string
  highlights: string[]
  tags?: string[]
}

export interface EducationItem {
  type: 'education'
  id: string
  title: string
  organization: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  description: string
  highlights: string[]
  tags?: string[]
}

export type TimelineItem = WorkItem | EducationItem

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
}

export interface Interest {
  id: string
  label: string
  icon: string // Lucide icon name
  description: string
  color: string // accent color class
}

export interface CVHighlight {
  category: string
  items: string[]
}
