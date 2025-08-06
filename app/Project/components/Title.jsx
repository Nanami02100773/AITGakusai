import './Title.css'

function Title({ text = "Gakuyukai" }) {

  return (
    <>
        <div className="projest_title">{text}</div>
    </>
  )
}

export default Title