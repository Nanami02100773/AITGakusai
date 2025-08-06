import './Title.css';

function Title({ text = "クラブ展" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
