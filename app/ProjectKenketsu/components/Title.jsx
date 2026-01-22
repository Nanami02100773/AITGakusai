import './Title.css';

function Title({ text = "献血" }) {
  return (
    <div className="Kenketsu-project-title">{text}</div>
  );
}

export default Title;
