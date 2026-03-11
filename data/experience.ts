import type { TimelineItem } from '@/types'

export const timelineItems: TimelineItem[] = [
  {
    type: 'education',
    id: 'edu-university',
    title: 'Bachelor of Science — Computer Science',
    organization: 'University of Technology',
    location: 'Amsterdam, Netherlands',
    startDate: 'Sep 2022',
    endDate: 'Present',
    description:
      'Pursuing a BSc in Computer Science with a focus on software engineering, algorithms, and artificial intelligence. Actively involved in university tech clubs and hackathons.',
    highlights: [
      'GPA: 8.2 / 10',
      'Member of the AI & Robotics Student Club',
      'Participated in 3 national hackathons',
      'Dean\'s List — Academic Year 2023',
    ],
    tags: ['Computer Science', 'AI', 'Algorithms', 'Software Engineering'],
  },
  {
    type: 'work',
    id: 'work-internship',
    title: 'Software Development Intern',
    organization: 'TechStart B.V.',
    location: 'Amsterdam, Netherlands',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description:
      'Worked as a full-stack intern building internal tooling and improving the company\'s customer-facing web application. Collaborated closely with a senior engineering team using agile methodologies.',
    highlights: [
      'Built a React dashboard that reduced data review time by 40%',
      'Wrote REST API endpoints in Node.js / Express',
      'Improved test coverage from 55% to 78%',
      'Presented sprint demos to stakeholders',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'Agile'],
  },
  {
    type: 'education',
    id: 'edu-highschool',
    title: 'High School Diploma — Science & Technology',
    organization: 'International High School',
    location: 'Amsterdam, Netherlands',
    startDate: 'Sep 2016',
    endDate: 'Jun 2022',
    description:
      'Graduated with honours, specialising in mathematics, physics, and computer science. Developed a strong foundation in logical reasoning and analytical thinking.',
    highlights: [
      'Graduated with distinction (Cum Laude)',
      'Final exam average: 8.5 / 10',
      'Founded the school\'s first coding club',
      'Won regional science fair — 1st place',
    ],
    tags: ['Mathematics', 'Physics', 'Computer Science'],
  },
  {
    type: 'work',
    id: 'work-freelance',
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description:
      'Building websites and web applications for small businesses and entrepreneurs. Managing client relationships from requirements gathering through deployment.',
    highlights: [
      'Delivered 6+ client projects on time and within budget',
      'Specialized in Next.js and TailwindCSS builds',
      'Achieved 5-star reviews from all clients',
      'Managed hosting and deployment on Vercel',
    ],
    tags: ['Next.js', 'Freelance', 'Client Work', 'Deployment'],
  },
]
