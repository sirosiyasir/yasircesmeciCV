//npm packet
import Typewriter from "typewriter-effect"

function Hakkımda() {
  return (
    <div className="hakkımda-text p-6">
      <Typewriter
        options={{
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Merhaba, ben Yasir. Front-end geliştiricisiyim.")
            .pauseFor(2000)
            .deleteAll()
            .typeString(
              "Hakkımda daha fazla bilgi edinmek isterseniz projelerime göz atabilirsiniz."
            )
            .start()
        }}
      />
    </div>
  )
}

export default Hakkımda
