import { Content, type SectionName } from "./content"

type PageProps = { activeSection: SectionName }

export const Page = ({ activeSection }: PageProps) => {
  return (
    <div className="page">
      <Content activeSection={activeSection} />
    </div>
  )
}
