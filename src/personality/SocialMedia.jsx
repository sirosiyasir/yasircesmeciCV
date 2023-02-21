import React from "react"

function SocialMedia() {
  return (
    <div className="mt-10">
      <div className="text-center">
        <a href="https://twitter.com/sirosiyasir" target="blank">
          <i className="fa-brands fa-twitter text-white text-3xl hover:text-sky-300 cursor-pointer icons"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-%C3%A7e%C5%9Fmeci-7104b9250/"
          target="blank"
        >
          <i className="fa-brands fa-linkedin text-white text-3xl mx-5 hover:text-sky-300 cursor-pointer icons"></i>
        </a>

        <a href="https://github.com/sirosiyasir" target="blank">
          <i className="fa-brands fa-github text-white text-3xl hover:text-sky-300 cursor-pointer icons"></i>
        </a>
        <a href="mailto:yasircesmeci@gmail.com">
          <i className="fa-regular fa-envelope text-white text-3xl ml-5 hover:text-sky-300 cursor-pointer icons"></i>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
