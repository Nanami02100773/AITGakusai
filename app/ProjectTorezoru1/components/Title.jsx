import './Title.css';

function Title({ text = "ルミノス"}) {
  return (
    <div className="ruminosu-title">{text}</div>
  );
}

export default Title;
