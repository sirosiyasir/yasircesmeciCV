import React from "react"
import Proje from "../../template/Proje"

function Projelerim() {
  return (
    <div className="p-5 grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
      <Proje
        title={"Apple Website"}
        firstFramework={"Jquery"}
        secondFramework={"CSS3"}
        target={"https://custom-apple-products.netlify.app/"}
        img={"apple-image"}
      />
      <Proje
        title={"Twitter"}
        firstFramework={"React"}
        secondFramework={"Tailwind"}
        target={"https://github.com/sirosiyasir/twitter"}
        img={"twitter-image"}
      />
      <Proje
        title={"Weather App"}
        firstFramework={"React"}
        secondFramework={"CSS3"}
        target={"https://github.com/sirosiyasir/react_weather_website"}
        img={"weather-image"}
      />
      <Proje
        title={"Funny Cards"}
        firstFramework={"React"}
        secondFramework={"CSS3"}
        target={"https://funnycards.netlify.app/"}
        img={"funny-cards-image"}
      />
      <Proje
        title={"Movies"}
        firstFramework={"EJS"}
        secondFramework={"CSS3"}
        target={"https://github.com/sirosiyasir/movies_information"}
        img={"movie-image"}
      />
      <Proje
        title={"Kodlar"}
        firstFramework={".txt"}
        secondFramework={"Notlarım"}
        target={"https://github.com/sirosiyasir/kodlar_html_css_js"}
        img={"kodlar-image"}
      />
      <Proje
        title={"Daha fazlası.."}
        target={"https://github.com/sirosiyasir?tab=repositories"}
      />
    </div>
  )
}

export default Projelerim
