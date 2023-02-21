import { useState, useEffect } from "react"
import Hakkımda from "./personality/Hakkımda"

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
          className="text-white text-2xl pl-4 inline info cursor-pointer"
        >
          Hakkımda
        </p>
        <p
          onClick={infoOnClick}
          id="projelerim"
          className="text-white text-2xl pl-4 inline info cursor-pointer"
        >
          Projelerim
        </p>
        <p
          onClick={infoOnClick}
          id="yetenekler"
          className="text-white text-2xl pl-4 inline info cursor-pointer"
        >
          Yetenekler
        </p>
      </div>
      <div className="w-screen h-[2px] bg-gray-400"></div>
      {info.hakkımda && <Hakkımda />}
      {info.projelerim && <h1 className="text-3xl text-white">Projelerim</h1>}
      {info.yetenekler && <h1 className="text-3xl text-white">yeteneklerim</h1>}
    </div>
  )
}

export default Navbar
