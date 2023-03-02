function Proje(props) {
  return (
    <a
      href={props.target}
      target="_blank"
      rel="noreferrer"
      className={`${props.img} my-box-padding text-neutral-100 hover:text-sky-400 border border-gray-400 relative rounded-lg shadow-xl card py-14 cursor-pointer inline-block`}
    >
      <h3 className="proje-title-text-size text-2xl py-2 rounded-3xl text-center">
        {props.title}
      </h3>
      <p className="proje-framework-text absolute bottom-1 left-20 py-1 px-2 rounded-3xl text-xl">
        {props.firstFramework}
      </p>
      <p className="proje-framework-text absolute bottom-1 right-20 py-1 px-2 rounded-3xl text-xl">
        {props.secondFramework}
      </p>
    </a>
  )
}

export default Proje
