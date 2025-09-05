export type SectionName = "Education" | "Projects" | "Experience" | "Achievements"
import { School } from "./school"
import { Projects } from "./projects"
import { Achievements } from "./achievements"
import { Experience } from "./experience"

type ContentProps = {
  activeSection?: SectionName
}

export const Content = ({ activeSection = "Education" }: ContentProps) => {
      const PageContent = () => {
        switch (activeSection) {
          case "Education":
            return (
              <div className="mt-8 text-base space-y-4 justify-center items-center">
                <School />
              </div>
            )
          case "Projects":
            return (
              <div className="mt-8 text-base space-y-3">
                <Projects />
              </div>
            )
          case "Experience":
            return (
              <div className="mt-8 text-base space-y-3">
                <Experience />
              </div>
            )
            case "Achievements":
            return (
                <div className="mt-8 text-base space-y-3">
                    <Achievements />
                </div>
            )
          default:
            return null
        }
      }
    return <PageContent />
}
