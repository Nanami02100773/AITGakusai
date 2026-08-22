import './Title.css';

function Title({ text = "CONCERT"}) {
  return (
    <div className="concert-title">{text}</div>
  );
}

export default Title;
