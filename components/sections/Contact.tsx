'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Twitter, CheckCircle, MapPin, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fadeInLeft, fadeInRight, viewport } from '@/utils/animations'
import { cn } from '@/utils/cn'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kercanprivate@gmail.com',
    href: 'mailto:kercanprivate@gmail.com',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/KayaErcan',
    href: 'https://www.linkedin.com/in/kaya-ercan-6285b4254',
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourname',
    href: 'https://github.com',
    color: 'text-foreground',
    bg: 'bg-foreground/10',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    value: '@yourhandle',
    href: 'https://twitter.com',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
  },
]

interface FormState {
  name: string
  email: string
  message: string
}

const initialForm: FormState = { name: '', email: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    // Simulate network request — replace with real API call when ready
    await new Promise((res) => setTimeout(res, 1200))
    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5"
              >
                <CheckCircle size={56} className="text-emerald-500 mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-foreground-muted mb-6">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSuccess(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Full Name <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl text-sm',
                      'bg-background-subtle border transition-colors duration-200',
                      'text-foreground placeholder:text-foreground-subtle',
                      'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
                      errors.name ? 'border-rose-500' : 'border-border hover:border-foreground-muted'
                    )}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email Address <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl text-sm',
                      'bg-background-subtle border transition-colors duration-200',
                      'text-foreground placeholder:text-foreground-subtle',
                      'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
                      errors.email ? 'border-rose-500' : 'border-border hover:border-foreground-muted'
                    )}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Message <span className="text-rose-500" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    className={cn(
                      'w-full px-4 py-3 rounded-xl text-sm',
                      'bg-background-subtle border transition-colors duration-200 resize-none',
                      'text-foreground placeholder:text-foreground-subtle',
                      'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent',
                      errors.message ? 'border-rose-500' : 'border-border hover:border-foreground-muted'
                    )}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-rose-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  icon={<Send size={16} />}
                  iconPosition="right"
                  className="w-full"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            {/* Intro text */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-secondary/5 border border-accent/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MessageSquare size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Let&apos;s Talk</h3>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed">
                I&apos;m currently available for freelance work, internship opportunities, and
                collaboration. Whether you have a question or just want to connect — don&apos;t
                hesitate to reach out!
              </p>
              <div className="flex items-center gap-2 mt-4">
                <MapPin size={14} className="text-foreground-subtle" />
                <span className="text-sm text-foreground-muted">Amsterdam, Netherlands</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={cn(
                    'flex items-center gap-4 p-4 rounded-xl',
                    'border border-border bg-background-subtle',
                    'hover:border-accent/30 hover:bg-background transition-all duration-200',
                    'group'
                  )}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center shrink-0', bg)}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground-muted">{label}</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
