function Yetenek(props) {
  return (
    <div className="p-4">
      <h1 className="yetenek-text-size text-left text-xl font-bold text-gray-400">
        {props.yetenek}
      </h1>
      <div className={`w-full h-3 bg-slate-300 rounded-lg`}>
        <div className={`h-3 ${props.width} rounded-lg ${props.color}`}></div>
      </div>
    </div>
  )
}

export default Yetenek
