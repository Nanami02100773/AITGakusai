import './Title.css';

function Title({ text = "MAKE" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
