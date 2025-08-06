import './Title.css';

function Title({ text = "工科展" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
