'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MobileMenu } from '@/components/MobileMenu'
import { useActiveSection, useScrolled } from '@/utils/hooks'
import { navSlideDown } from '@/utils/animations'
import { cn } from '@/utils/cn'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(['hero', ...sectionIds])
  const scrolled = useScrolled(20)

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        variants={navSlideDown}
        initial="hidden"
        animate="visible"
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-[var(--shadow-sm)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-black tracking-tight gradient-text hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Back to top"
            >
              KE
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <div key={item.href} className="relative">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                        isActive
                          ? 'text-accent'
                          : 'text-foreground-muted hover:text-foreground hover:bg-background-subtle'
                      )}
                    >
                      {item.label}
                    </button>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Mobile menu button */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'md:hidden p-2 rounded-lg',
                  'text-foreground-muted hover:text-foreground hover:bg-background-subtle',
                  'transition-colors duration-200'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        activeSection={activeSection}
      />
    </>
  )
}

export default Navbar
