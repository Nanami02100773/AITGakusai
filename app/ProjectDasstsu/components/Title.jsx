import './Title.css';

function Title({ text = "脱出ゲーム" }) {
  return (
    <div className="Dasstsu-project-title">{text}</div>
  );
}

export default Title;
