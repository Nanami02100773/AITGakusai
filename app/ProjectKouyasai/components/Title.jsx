import './Title.css';

function Title({ text = "後夜祭"}) {
  return (
    <div className="Kouyasai-project-title">{text}</div>
  );
}

export default Title;
