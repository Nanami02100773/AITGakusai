import './Title.css';

function Title({ text = "MAKE"}) {
  return (
    <div className="Koukaten-title">{text}</div>
  );
}

export default Title;
