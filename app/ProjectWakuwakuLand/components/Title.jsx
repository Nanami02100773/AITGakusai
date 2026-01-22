import './Title.css';

function Title({ text = "WAKUWAKU LAND"}) {
  return (
    <div className="WakuwakuLand-project-title">{text}</div>
  );
}

export default Title;
