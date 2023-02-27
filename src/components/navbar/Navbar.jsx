import { useState } from "react"
import Hakkımda from "../personality/Navbar-contents/Hakkımda"
import Projelerim from "../personality/Navbar-contents/Projelerim"

function Navbar() {
  const [info, setInfo] = useState({
    hakkımda: true,
    projelerim: false,
    yetenekler: false,
  })

  const infoOnClick = (e) => {
    setInfo((prevState) => ({
      ...!prevState,
      [e.target.id]: prevState,
    }))
  }

  return (
    <div>
      <div className="py-4">
        <p
          onClick={infoOnClick}
          id="hakkımda"
          className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl pl-4 inline info cursor-pointer"
        >
          Hakkımda
        </p>
        <p
          onClick={infoOnClick}
          id="projelerim"
          className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl pl-4 inline info cursor-pointer"
        >
          Projelerim
        </p>
        <p
          onClick={infoOnClick}
          id="yetenekler"
          className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl pl-4 inline info cursor-pointer"
        >
          Yetenekler
        </p>
      </div>
      <div className="w-screen h-[2px] bg-gray-400"></div>
      {info.hakkımda && <Hakkımda />}
      {info.projelerim && <Projelerim />}
      {info.yetenekler && <h1 className="text-2xl text-white">Yetenekler</h1>}
    </div>
  )
}

export default Navbar
