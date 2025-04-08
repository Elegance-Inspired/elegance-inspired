import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/10 to-background", className)}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
