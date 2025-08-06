import './Title.css';

function Title({ text = "脱出ゲーム" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
