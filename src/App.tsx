import { useState } from "react"
import { Profile } from "./components/profile"
import { Page } from "./components/page"
import type { SectionName } from "./components/content"

function App() {
  const [activeSection, setActiveSection] = useState<SectionName>("Education")

  return (
    <div className="App w-screen flex flex-col sm:flex-row h-auto sm:h-screen">
      <aside className="text-white p-4 h-auto sm:h-full w-full sm:w-106 bg-gray-800">
        <Profile activeSection={activeSection} setActiveSection={setActiveSection} />
      </aside>
      <main className="flex-1 p-6 bg-gray-900 sm:overflow-y-auto">
        <Page activeSection={activeSection} />
      </main>
    </div>
  )
}

export default App
