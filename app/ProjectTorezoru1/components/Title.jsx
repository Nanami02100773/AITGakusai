import './Title.css';

function Title({ text = "トレゾール"}) {
  return (
    <div className="Torezoru-project-title">{text}</div>
  );
}

export default Title;
