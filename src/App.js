import { useEffect, useState } from "react"
import Yasir from "./personality/Yasir.jsx"
function App() {
  const [animationClass, setAnimationClass] = useState(
    "text-white text-7xl p-6 info-header"
  )
  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("text-white text-7xl p-6 info-header text-animation")
    }, 1400)
  }, [])
  return (
    <div className="bg-[#01384e] h-screen">
      <Yasir />
      <div className="py-4">
        <p className="text-white text-3xl pl-4 inline">Hakkımda</p>
        <p className="text-white text-3xl pl-4 inline">Projelerim</p>
        <p className="text-white text-3xl pl-4 inline">Yetenekler</p>
      </div>
      <div className="w-screen h-[2px] bg-gray-400"></div>
      <h1 className={animationClass}>
        Merhaba, ben Yasir. Front-end geliştiricisiyim.
      </h1>
    </div>
  )
}

export default App
