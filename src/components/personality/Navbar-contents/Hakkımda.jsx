import { useEffect, useState } from "react"

function Hakkımda() {
  const [animationClass, setAnimationClass] = useState(
    "text-white p-6 info-header"
  )

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("text-white p-6 info-header text-animation")
    }, 1000)
    setTimeout(() => {
      setAnimationClass("text-white p-6 info-header text-animation-second")
    }, 1800)
  }, [])

  return (
    <div>
      <h1 className={animationClass}>
        Merhaba, ben Yasir. Front-end geliştiricisiyim.
      </h1>
    </div>
  )
}

export default Hakkımda
