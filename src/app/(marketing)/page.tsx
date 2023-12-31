import Link from 'next/link'
import { Medal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { headingFont, poppins } from '@/lib/fonts'

const Homepage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-2 px-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" /> No. 1 Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-2">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-orange-600 to-pink-600 rounded-md w-fit bg-clip-text text-transparent">
          work forward.
        </div>
      </div>
      <p
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mb-4',
          poppins.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify
      </p>
      <Button>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  )
}

export default Homepage
