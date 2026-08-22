import './Title.css';

function Title({ text = "後夜祭"}) {
  return (
    <div className="koyasai-title">{text}</div>
  );
}

export default Title;
