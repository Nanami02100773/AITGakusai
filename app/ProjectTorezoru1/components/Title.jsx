import './Title.css';

function Title({ text = "ルミノス"}) {
  return (
    <div className="kajino-title">{text}</div>
  );
}

export default Title;
