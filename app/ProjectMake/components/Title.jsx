import './Title.css';

function Title({ text = "MAKE"}) {
  return (
    <div className="Make-project-title">{text}</div>
  );
}

export default Title;
