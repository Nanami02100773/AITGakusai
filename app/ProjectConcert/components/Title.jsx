import './Title.css';

function Title({ text = "CONCERT2026"}) {
  return (
    <div className="concert-title">{text}</div>
  );
}

export default Title;
