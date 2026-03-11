'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { NavItem } from '@/types'
import { cn } from '@/utils/cn'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
  activeSection: string
}

export function MobileMenu({ isOpen, onClose, items, activeSection }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onClose()
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'fixed right-0 top-0 bottom-0 z-50 w-72',
              'bg-background border-l border-border',
              'flex flex-col shadow-2xl'
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="text-lg font-bold gradient-text">Navigation</span>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-subtle transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close navigation"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1" role="list">
                {items.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'bg-accent/10 text-accent font-semibold'
                            : 'text-foreground-muted hover:text-foreground hover:bg-background-subtle'
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border">
              <p className="text-xs text-foreground-subtle text-center">
                © {new Date().getFullYear()} Kaya Ercan
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
