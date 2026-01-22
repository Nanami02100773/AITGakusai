import './Title.css';

function Title({ text = "CONCERT"}) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
