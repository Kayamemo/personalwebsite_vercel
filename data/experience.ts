import type { TimelineItem } from '@/types'

export const timelineItems: TimelineItem[] = [
  {
    type: 'education',
    id: 'edu-university',
    title: 'Bachelor of Science — Business Informatics',
    organization: 'Hochschule Worms',
    location: 'Worms, Germany',
    startDate: 'Sep 2025',
    endDate: 'Present',
    description:
      'Currently studying Business Informatics (Wirtschaftsinformatik) in the 2nd semester, combining business management with information technology and software development.',
    highlights: [
      'Currently in 2nd semester',
      'Focus on IT, business processes, and software development',
    ],
    tags: ['Business Informatics', 'IT', 'Software Development'],
  },
  {
    type: 'work',
    id: 'work-brasserie',
    title: 'Bartender & Service Staff',
    organization: 'Brasserie Montmartre',
    location: 'Weinheim, Germany',
    startDate: 'Mar 2023',
    endDate: 'Jun 2024',
    description:
      'Worked as a bartender and service staff member in a restaurant environment, handling customer service, bar operations, and administrative tasks.',
    highlights: [
      'Customer service and guest relations',
      'Cash register and digital POS system operation',
      'Bar service and drink preparation',
      'Coordination and management of reservations',
      'Warehouse logistics',
    ],
    tags: ['Customer Service', 'Teamwork', 'Communication'],
  },
  {
    type: 'education',
    id: 'edu-highschool',
    title: 'Abitur — Allgemeine Hochschulreife',
    organization: 'Werner-Heisenberg-Gymnasium',
    location: 'Weinheim, Germany',
    startDate: 'Sep 2018',
    endDate: 'Jul 2025',
    description:
      'Completed the German Abitur (general university entrance qualification) at Werner-Heisenberg-Gymnasium in Weinheim.',
    highlights: [
      'Final grade: 2.6',
    ],
    tags: ['Abitur', 'High School'],
  },
]
