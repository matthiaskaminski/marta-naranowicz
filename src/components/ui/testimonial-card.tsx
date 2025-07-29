import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <div className="relative border border-white/20 rounded-2xl p-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <Card
        {...(href ? { href } : {})}
        className={cn(
          "flex flex-col justify-between rounded-xl text-start",
          "w-[350px] h-[230px] p-4",
          "transition-colors duration-300",
          className
        )}
        style={{backgroundColor: '#141414'}}
      >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none" style={{color: '#F0F0F0'}}>
            {author.name}
          </h3>
          <p className="text-sm" style={{color: '#595959'}}>
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-sm mt-auto" style={{color: '#595959'}}>
        {text}
      </p>
      </Card>
    </div>
  )
}