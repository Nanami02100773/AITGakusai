import './Title.css';

function Title({ text = "脱出ゲーム"}) {
  return (
    <div className="Koukaten-title">{text}</div>
  );
}

export default Title;
