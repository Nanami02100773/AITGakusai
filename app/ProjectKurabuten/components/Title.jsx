import './Title.css';

function Title({ text = "クラブ展"}) {
  return (
    <div className="kurabuten-title">{text}</div>
  );
}

export default Title;
