import Yetenek from "../../template/Yetenek"

function Yeteneklerim() {
  return (
    <div className="mt-5 px-4">
      <div className="grid grid-cols-3">
        <Yetenek
          yetenek={"Javascript"}
          color={"bg-orange-500"}
          width={"w-3/5"}
        />
        <Yetenek yetenek={"EJS"} color={"bg-pink-500"} width={"w-2/5"} />
        <Yetenek yetenek={"React"} color={"bg-sky-500"} width={"w-3/5"} />
        <Yetenek yetenek={"jQuery"} color={"bg-blue-500"} width={"w-3/5"} />
        <Yetenek yetenek={"HTML"} color={"bg-orange-700"} width={"w-4/5"} />
        <Yetenek yetenek={"Express"} color={"bg-gray-500"} width={"w-2/5"} />
        <Yetenek yetenek={"CSS"} color={"bg-blue-600"} width={"w-4/5"} />
        <Yetenek
          yetenek={"Bootstrap"}
          color={"bg-purple-500"}
          width={"w-4/5"}
        />
        <Yetenek yetenek={"TailwindCSS"} color={"bg-sky-400"} width={"w-3/5"} />
        <Yetenek yetenek={"Node.js"} color={"bg-orange-600"} width={"w-3/5"} />
        <Yetenek yetenek={"Git"} color={"bg-orange-700"} width={"w-4/5"} />
        <Yetenek yetenek={"npm"} color={"bg-red-700"} width={"w-4/5"} />
        <Yetenek yetenek={"API"} color={"bg-orange-500"} width={"w-4/5"} />
      </div>
    </div>
  )
}

export default Yeteneklerim
