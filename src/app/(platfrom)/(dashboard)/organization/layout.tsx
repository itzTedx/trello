import React from 'react'
import Sidebar from '../_components/Sidebar'

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-5 px-4">
      <div className="flex gap-x-7">
        <aside className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </aside>
        {children}
      </div>
    </main>
  )
}

export default OrganizationLayout
