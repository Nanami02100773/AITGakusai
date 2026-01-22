import './Title.css';

function Title({ text = "スタンプラリー"}) {
  return (
    <div className="ProjectStampRally-project_title">{text}</div>
  );
}

export default Title;
