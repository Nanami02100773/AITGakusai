import './Title.css';

function Title({ text = "楽市楽座" }) {
  return (
    <div className="project_title">{text}</div>
  );
}

export default Title;
