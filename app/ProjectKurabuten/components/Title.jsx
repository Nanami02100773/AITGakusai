import './Title.css';

function Title({ text = "クラブ展" }) {
  return (
    <div className="ProjectKurabuten-title">{text}</div>
  );
}

export default Title;
