import './Title.css';

function Title({ text = "狂夜祭"}) {
  return (
    <div className="Kyouyasai-project-title">{text}</div>
  );
}

export default Title;
