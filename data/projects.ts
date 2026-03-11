import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-ai-assistant',
    title: 'AI Study Assistant',
    description:
      'A web app that uses AI to help students summarise lecture notes, generate practice questions, and create personalised study plans. Built with Next.js and integrated with an LLM API.',
    image: '/project-placeholder.jpg',
    tags: ['Next.js', 'TypeScript', 'AI', 'TailwindCSS', 'OpenAI API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-portfolio',
    title: 'Personal Portfolio Website',
    description:
      'This portfolio website — designed and built from scratch using Next.js, TailwindCSS, and Framer Motion. Features dark/light mode, smooth animations, and a fully responsive layout.',
    image: '/project-placeholder.jpg',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-task-manager',
    title: 'Task Manager App',
    description:
      'A full-stack task management application with real-time updates, drag-and-drop task ordering, user authentication, and team collaboration features.',
    image: '/project-placeholder.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Express'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 'project-weather',
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard showing current conditions, 7-day forecasts, and interactive maps. Uses the OpenWeatherMap API with clean data visualisations.',
    image: '/project-placeholder.jpg',
    tags: ['React', 'TypeScript', 'Chart.js', 'OpenWeatherMap API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 'project-ecommerce',
    title: 'E-commerce Store',
    description:
      'A fully functional e-commerce storefront with product listings, shopping cart, Stripe payment integration, and an admin dashboard for inventory management.',
    image: '/project-placeholder.jpg',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 'project-data-viz',
    title: 'Data Visualisation Tool',
    description:
      'An interactive tool for exploring and visualising datasets. Supports CSV upload, multiple chart types, and custom filtering. Built as a university project.',
    image: '/project-placeholder.jpg',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    githubUrl: 'https://github.com',
    featured: false,
  },
]
