'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'subtle' | 'bordered'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variantStyles = {
  default:
    'bg-card border border-[var(--card-border)] shadow-[var(--shadow-md)]',
  glass:
    'glass shadow-[var(--shadow-md)]',
  subtle:
    'bg-background-subtle border border-border',
  bordered:
    'bg-background border border-border shadow-[var(--shadow-sm)]',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hover = true,
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'rounded-[var(--radius-card)] overflow-hidden',
      variantStyles[variant],
      paddingStyles[padding],
      className
    )

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          {...(props as React.ComponentProps<typeof motion.div>)}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
