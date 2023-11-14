import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationPage = () => {
  const { userId, orgId } = auth()

  return <div>Organization</div>
}

export default OrganizationPage
