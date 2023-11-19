import { OrgControl } from './_components/OrgControl'

interface LayoutProps {
  children: React.ReactNode
}

const OrganizationIdLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}

export default OrganizationIdLayout
