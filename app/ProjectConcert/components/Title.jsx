import './Title.css';

function Title({ text = "Concert2026"}) {
  return (
    <div className="concert-title">{text}</div>
  );
}

export default Title;
