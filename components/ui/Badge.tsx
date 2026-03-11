import { cn } from '@/utils/cn'

type BadgeVariant = 'default' | 'indigo' | 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose' | 'orange'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-background-subtle text-foreground-muted border-border',
  indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  violet: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
}

// Auto-assign variant color based on tag content hash (deterministic)
function getVariantFromString(str: string): BadgeVariant {
  const variants: BadgeVariant[] = ['indigo', 'violet', 'cyan', 'emerald', 'amber', 'rose', 'orange']
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) & 0xffffffff
  }
  return variants[Math.abs(hash) % variants.length]
}

export function Badge({ children, variant, className }: BadgeProps) {
  const resolvedVariant = variant ?? getVariantFromString(String(children))
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[resolvedVariant],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
