import './DescriptionBox.css';

function DescriptionBox({text}) {
  return (
    <div className="description-box-container">
        <div className="section-title">企画説明</div>
        <div className="description-box">{text}</div>
    </div>
  )
}

export default DescriptionBox