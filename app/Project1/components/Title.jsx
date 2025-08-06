import './Title.css';

function Title({ text = "企画紹介" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
