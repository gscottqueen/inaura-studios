import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  icon?: LucideIcon
  className?: string
  children?: React.ReactNode
}

export function Card({ title, description, icon: Icon, className, children }: CardProps) {
  return (
    <div className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      'p-6 space-y-4',
      className
    )}>
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="h-5 w-5" />}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </div>
  )
}
