import './Title.css';

function Title({ text = "献血"}) {
  return (
    <div className="Koukaten-title">{text}</div>
  );
}

export default Title;
