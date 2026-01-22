import './Title.css';

function Title({ text = "楽市楽座" }) {
  return (
    <div className="Rakuiti-project-title">{text}</div>
  );
}

export default Title;
