import React from "react"
import SocialMedia from "./SocialMedia"

function Yasir() {
  return (
    <div className="w-screen 2xl:h-[40%] lg:h-[40%] md:h-{30%} pb-5 bg-[url('https://i.pinimg.com/originals/a5/de/39/a5de392b257f6c85f23c0a7cc91feb95.gif')] bg-no-repeat bg-cover">
      <div className="pt-20">
        <img
          className="w-44 h-44 mx-auto rounded-3xl border-2 border-sky-300"
          src="https://pbs.twimg.com/profile_images/1148915581309075456/xnpK5aPH_400x400.jpg"
          alt="Yasir Çeşmeci"
        />
      </div>
      <SocialMedia />
    </div>
  )
}

export default Yasir
