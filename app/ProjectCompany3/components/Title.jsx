import './Title.css';

function Title({ text = "企業３" }) {
  return (
    <div className="Company-project-title">{text}</div>
  );
}

export default Title;
