import './Title.css';

function Title({ text = "MAKUMAKU LAND" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
